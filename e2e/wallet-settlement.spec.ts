import { expect, test, APIRequestContext, type Page } from '@playwright/test';

type AuthLoginResponse = {
  success: boolean;
  message: string;
  data?: {
    accessToken: string;
    refreshToken: string;
    expiresIn?: number;
    user?: { id?: string };
  };
};

const ENV = {
  apiBaseUrl: 'http://localhost:8080',
  email: 'chinhnt2@sapo.vn',
  password: 'Abcd1111',
};

async function uiLogin(page: Page) {
  await page.goto(`/projects/wallet-app?e2e=${Date.now()}#login`);

  await page.getByLabel('Email').fill(ENV.email);
  await page.getByLabel('Password').fill(ENV.password);
  await page.getByRole('button', { name: /sign in/i }).click();

  // Sau login sẽ redirect về dashboard
  await expect(page).toHaveURL(/#dashboard$/);
}

async function apiLogin(request: APIRequestContext) {
  if (!ENV.email || !ENV.password) {
    throw new Error('Missing E2E_EMAIL or E2E_PASSWORD');
  }

  const res = await request.post(`${ENV.apiBaseUrl}/api/v1/auth/login`, {
    data: {
      email: ENV.email,
      password: ENV.password,
    },
  });
  expect(res.ok()).toBeTruthy();
  const json = (await res.json()) as AuthLoginResponse;
  expect(json.success).toBeTruthy();
  expect(json.data?.accessToken).toBeTruthy();
  expect(json.data?.refreshToken).toBeTruthy();
  return {
    accessToken: json.data!.accessToken,
    refreshToken: json.data!.refreshToken,
  };
}

async function apiCreateAccount(request: APIRequestContext, accessToken: string) {
  const res = await request.post(`${ENV.apiBaseUrl}/api/v1/wallet/accounts`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    data: {
      name: `E2E Cash ${Date.now()}`,
      type: 'CASH',
      currency: 'VND',
      openingBalance: 0,
      note: 'e2e',
    },
  });
  expect(res.ok()).toBeTruthy();
  const json = await res.json();
  return json.data;
}

async function apiCreateReceivable(request: APIRequestContext, accessToken: string) {
  const res = await request.post(`${ENV.apiBaseUrl}/api/v1/wallet/receivables`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    data: {
      counterpartyName: `E2E Borrower ${Date.now()}`,
      amount: 1000000,
      currency: 'VND',
      occurredAt: new Date().toISOString(),
      note: 'e2e',
    },
  });
  expect(res.ok()).toBeTruthy();
  const json = await res.json();
  return json.data;
}

async function apiCreateLiability(request: APIRequestContext, accessToken: string) {
  const res = await request.post(`${ENV.apiBaseUrl}/api/v1/wallet/liabilities`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    data: {
      counterpartyName: `E2E Lender ${Date.now()}`,
      amount: 1000000,
      currency: 'VND',
      occurredAt: new Date().toISOString(),
      note: 'e2e',
    },
  });
  expect(res.ok()).toBeTruthy();
  const json = await res.json();
  return json.data;
}

test.describe('Wallet settlement flows', () => {
  test.beforeEach(async ({ page }) => {
    // Skip nếu chưa có credentials (tránh fail CI/local chưa setup)
    test.skip(!ENV.email || !ENV.password, 'Thiếu E2E_EMAIL/E2E_PASSWORD để login');

    await page.goto('about:blank');
  });

  test('Receivable: nhận tiền một phần từ modal', async ({ page, request }) => {
    const { accessToken } = await apiLogin(request);
    const account = await apiCreateAccount(request, accessToken);
    const receivable = await apiCreateReceivable(request, accessToken);

    await uiLogin(page);
    // Điều hướng sang trang Cho vay bằng cách đổi hash (không reload app)
    await page.evaluate(() => {
      window.location.hash = 'receivables';
    });
    await expect(page).toHaveURL(/#receivables$/);

    // Click vào card (có tên counterparty)
    await page.getByText(receivable.counterpartyName).first().click();

    // Form nhận tiền: amount + account + submit
    await page.locator('.settlement-form input[type="number"]').first().fill('600000');
    // Account đã được preselect (loadAccounts + handleOpenModal). Không cần chọn lại để tránh phụ thuộc thứ tự list.
    await page.getByRole('button', { name: 'Ghi nhận lần trả này' }).click();

    // Lịch sử phải có item 600k (dòng "Đã trả: 600.000 ₫")
    await expect(page.getByText('Đã trả: 600.000 ₫').first()).toBeVisible();
  });

  test('Liability: trả nợ một phần từ modal', async ({ page, request }) => {
    const { accessToken } = await apiLogin(request);
    const account = await apiCreateAccount(request, accessToken);
    const liability = await apiCreateLiability(request, accessToken);

    await uiLogin(page);
    // Điều hướng sang trang Nợ bằng cách đổi hash (không reload app)
    await page.evaluate(() => {
      window.location.hash = 'liabilities';
    });
    await expect(page).toHaveURL(/#liabilities$/);
    await page.getByText(liability.counterpartyName).first().click();

    await page.locator('.settlement-form input[type="number"]').first().fill('400000');
    // Account đã được preselect (loadAccounts + handleOpenModal). Không cần chọn lại để tránh phụ thuộc thứ tự list.
    await page.getByRole('button', { name: 'Ghi nhận lần trả này' }).click();

    // Lịch sử phải có item 400k (dòng "Đã trả: 400.000 ₫")
    await expect(page.getByText('Đã trả: 400.000 ₫').first()).toBeVisible();
  });

  test.skip('AddTransaction: tạo giao dịch đặc biệt nhận tiền/trả nợ', async ({ page, request }) => {
    const { accessToken } = await apiLogin(request);
    await apiCreateAccount(request, accessToken);
    await apiCreateReceivable(request, accessToken);

    // Login qua UI để đảm bảo flow giống người dùng thật
    await uiLogin(page);
    // Điều hướng sang trang tạo giao dịch bằng cách đổi hash (không reload app)
    await page.evaluate(() => {
      window.location.hash = 'transactions/add';
    });
    await expect(page).toHaveURL(/#transactions\/add$/);

    // Các label ở form AddTransaction không có htmlFor, dùng selector theo thứ tự
    await page.locator('select.select').first().selectOption('RECEIVABLE_SETTLEMENT'); // type
    await page.locator('input.input[type="number"]').first().fill('250000'); // amount
    // Chọn tài khoản đầu tiên (bỏ qua placeholder)
    await page.locator('select.select').nth(1).selectOption({ index: 1 }); // account
    // Chọn khoản cho vay đầu tiên bằng JS để đảm bảo onChange được trigger
    // Chờ cho tới khi cả select tài khoản và khoản cho vay đã load options (>= 2: placeholder + ít nhất 1 option)
    await page.waitForFunction(() => {
      const selects = document.querySelectorAll('select.select');
      const accountSelect = selects[2] as HTMLSelectElement | undefined; // 0: type, 1: currency, 2: account, 3: receivable
      const receivableSelect = selects[3] as HTMLSelectElement | undefined;
      return (
        !!accountSelect &&
        !!receivableSelect &&
        accountSelect.options.length > 1 &&
        receivableSelect.options.length > 1
      );
    });

    await page.evaluate(() => {
      const selects = document.querySelectorAll('select.select');
      const accountSelect = selects[2] as HTMLSelectElement | undefined;
      const receivableSelect = selects[3] as HTMLSelectElement | undefined;
      if (accountSelect && accountSelect.options.length > 1) {
        accountSelect.selectedIndex = 1;
        accountSelect.dispatchEvent(new Event('change', { bubbles: true }));
      }
      if (receivableSelect && receivableSelect.options.length > 1) {
        receivableSelect.selectedIndex = 1;
        receivableSelect.dispatchEvent(new Event('change', { bubbles: true }));
      }
    });

    await page.getByRole('button', { name: 'Lưu giao dịch' }).click();

    // Redirect về transactions
    await expect(page).toHaveURL(/#transactions$/);
  });
});

