import { expect, test, type Page } from '@playwright/test';

const ENV = {
  apiBaseUrl: 'http://localhost:8080',
  email: 'chinhnt2@sapo.vn',
  password: 'Abcd1111',
};

/**
 * Test để verify API calls không bị duplicate khi vào các màn hình
 * 
 * Test này sẽ:
 * 1. Intercept network requests
 * 2. Navigate đến các màn hình
 * 3. Verify mỗi API chỉ được gọi 1 lần (hoặc tối đa 2 lần do React Strict Mode trong dev)
 */
test.describe('Wallet API Calls - Duplicate Prevention', () => {
  let apiCallCounts: Map<string, number> = new Map();

  test.beforeEach(async ({ page }) => {
    test.skip(!ENV.email || !ENV.password, 'Thiếu E2E_EMAIL/E2E_PASSWORD để login');

    // Reset counter
    apiCallCounts.clear();

    // Intercept tất cả network requests
    await page.route('**/api/v1/**', (route) => {
      const url = route.request().url();
      const method = route.request().method();
      const key = `${method} ${url}`;

      // Đếm số lần gọi
      const currentCount = apiCallCounts.get(key) || 0;
      apiCallCounts.set(key, currentCount + 1);

      // Continue với request thực tế
      route.continue();
    });

    // Login trước
    await page.goto(`/projects/wallet-app?e2e=${Date.now()}#login`);
    await page.getByLabel('Email').fill(ENV.email);
    await page.getByLabel('Password').fill(ENV.password);
    await page.getByRole('button', { name: /sign in/i }).click();
    await expect(page).toHaveURL(/#dashboard$/);

    // Đợi dashboard load xong
    await page.waitForTimeout(1000);
    
    // Reset counter sau khi dashboard đã load (bỏ qua các calls từ dashboard init)
    apiCallCounts.clear();
  });

  test('Categories page: categories API chỉ được gọi 1 lần', async ({ page }) => {
    await page.evaluate(() => {
      window.location.hash = 'categories';
    });
    await expect(page).toHaveURL(/#categories$/);

    // Đợi page load xong
    await page.waitForTimeout(2000);

    // Kiểm tra số lần gọi /wallet/categories
    const categoriesCalls = Array.from(apiCallCounts.entries()).filter(([key]) =>
      key.includes('/wallet/categories') && key.includes('GET')
    );

    // Trong dev mode với Strict Mode, có thể gọi 2 lần, nhưng không nên nhiều hơn
    const totalCalls = categoriesCalls.reduce((sum, [, count]) => sum + count, 0);
    expect(totalCalls).toBeLessThanOrEqual(2); // Cho phép 2 lần do Strict Mode
  });

  test('Budgets page: budgets API chỉ được gọi 1 lần', async ({ page }) => {
    await page.evaluate(() => {
      window.location.hash = 'budgets';
    });
    await expect(page).toHaveURL(/#budgets$/);

    // Đợi page load xong
    await page.waitForTimeout(2000);

    // Kiểm tra số lần gọi /wallet/budgets
    const budgetsCalls = Array.from(apiCallCounts.entries()).filter(([key]) =>
      key.includes('/wallet/budgets') && key.includes('GET')
    );

    const totalCalls = budgetsCalls.reduce((sum, [, count]) => sum + count, 0);
    expect(totalCalls).toBeLessThanOrEqual(2); // Cho phép 2 lần do Strict Mode
  });

  test('Accounts page: accounts API chỉ được gọi 1 lần', async ({ page }) => {
    await page.evaluate(() => {
      window.location.hash = 'accounts';
    });
    await expect(page).toHaveURL(/#accounts$/);

    // Đợi page load xong
    await page.waitForTimeout(2000);

    // Kiểm tra số lần gọi /wallet/accounts
    const accountsCalls = Array.from(apiCallCounts.entries()).filter(([key]) =>
      key.includes('/wallet/accounts') && key.includes('GET')
    );

    const totalCalls = accountsCalls.reduce((sum, [, count]) => sum + count, 0);
    expect(totalCalls).toBeLessThanOrEqual(2); // Cho phép 2 lần do Strict Mode
  });

  test('Transactions page: accounts và categories API chỉ được gọi 1 lần mỗi loại', async ({ page }) => {
    await page.evaluate(() => {
      window.location.hash = 'transactions';
    });
    await expect(page).toHaveURL(/#transactions$/);

    // Đợi page load xong
    await page.waitForTimeout(2000);

    // Kiểm tra accounts
    const accountsCalls = Array.from(apiCallCounts.entries()).filter(([key]) =>
      key.includes('/wallet/accounts') && key.includes('GET')
    );
    const accountsTotal = accountsCalls.reduce((sum, [, count]) => sum + count, 0);
    expect(accountsTotal).toBeLessThanOrEqual(2);

    // Kiểm tra categories
    const categoriesCalls = Array.from(apiCallCounts.entries()).filter(([key]) =>
      key.includes('/wallet/categories') && key.includes('GET')
    );
    const categoriesTotal = categoriesCalls.reduce((sum, [, count]) => sum + count, 0);
    expect(categoriesTotal).toBeLessThanOrEqual(2);
  });

  test('Receivables page: accounts API chỉ được gọi 1 lần', async ({ page }) => {
    await page.evaluate(() => {
      window.location.hash = 'receivables';
    });
    await expect(page).toHaveURL(/#receivables$/);

    // Đợi page load xong
    await page.waitForTimeout(2000);

    // Kiểm tra số lần gọi /wallet/accounts
    const accountsCalls = Array.from(apiCallCounts.entries()).filter(([key]) =>
      key.includes('/wallet/accounts') && key.includes('GET')
    );

    const totalCalls = accountsCalls.reduce((sum, [, count]) => sum + count, 0);
    expect(totalCalls).toBeLessThanOrEqual(2);
  });

  test('Liabilities page: accounts API chỉ được gọi 1 lần', async ({ page }) => {
    await page.evaluate(() => {
      window.location.hash = 'liabilities';
    });
    await expect(page).toHaveURL(/#liabilities$/);

    // Đợi page load xong
    await page.waitForTimeout(2000);

    // Kiểm tra số lần gọi /wallet/accounts
    const accountsCalls = Array.from(apiCallCounts.entries()).filter(([key]) =>
      key.includes('/wallet/accounts') && key.includes('GET')
    );

    const totalCalls = accountsCalls.reduce((sum, [, count]) => sum + count, 0);
    expect(totalCalls).toBeLessThanOrEqual(2);
  });

  test('Assets page: assets API chỉ được gọi 1 lần', async ({ page }) => {
    await page.evaluate(() => {
      window.location.hash = 'assets';
    });
    await expect(page).toHaveURL(/#assets$/);

    // Đợi page load xong
    await page.waitForTimeout(2000);

    // Kiểm tra số lần gọi /wallet/assets
    const assetsCalls = Array.from(apiCallCounts.entries()).filter(([key]) =>
      key.includes('/wallet/assets') && key.includes('GET')
    );

    const totalCalls = assetsCalls.reduce((sum, [, count]) => sum + count, 0);
    expect(totalCalls).toBeLessThanOrEqual(2);
  });

  test('Dashboard page: accounts và categories API chỉ được gọi 1 lần mỗi loại khi mount', async ({ page }) => {
    // Dashboard đã được load trong beforeEach, reset counter
    apiCallCounts.clear();

    // Reload dashboard
    await page.reload();
    await expect(page).toHaveURL(/#dashboard$/);
    await page.waitForTimeout(2000);

    // Kiểm tra accounts
    const accountsCalls = Array.from(apiCallCounts.entries()).filter(([key]) =>
      key.includes('/wallet/accounts') && key.includes('GET')
    );
    const accountsTotal = accountsCalls.reduce((sum, [, count]) => sum + count, 0);
    expect(accountsTotal).toBeLessThanOrEqual(2);

    // Kiểm tra categories
    const categoriesCalls = Array.from(apiCallCounts.entries()).filter(([key]) =>
      key.includes('/wallet/categories') && key.includes('GET')
    );
    const categoriesTotal = categoriesCalls.reduce((sum, [, count]) => sum + count, 0);
    expect(categoriesTotal).toBeLessThanOrEqual(2);
  });

  test('AddTransaction page: accounts và categories API chỉ được gọi 1 lần mỗi loại', async ({ page }) => {
    await page.evaluate(() => {
      window.location.hash = 'transactions/add';
    });
    await expect(page).toHaveURL(/#transactions\/add$/);

    // Đợi page load xong
    await page.waitForTimeout(2000);

    // Kiểm tra accounts
    const accountsCalls = Array.from(apiCallCounts.entries()).filter(([key]) =>
      key.includes('/wallet/accounts') && key.includes('GET')
    );
    const accountsTotal = accountsCalls.reduce((sum, [, count]) => sum + count, 0);
    expect(accountsTotal).toBeLessThanOrEqual(2);

    // Kiểm tra categories
    const categoriesCalls = Array.from(apiCallCounts.entries()).filter(([key]) =>
      key.includes('/wallet/categories') && key.includes('GET')
    );
    const categoriesTotal = categoriesCalls.reduce((sum, [, count]) => sum + count, 0);
    expect(categoriesTotal).toBeLessThanOrEqual(2);
  });
});
