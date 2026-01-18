# Hướng dẫn sử dụng shadcn/ui Components

## Nguyên tắc

1. **shadcn/ui components**: Dùng cho các UI elements (Button, Input, Card, Dialog, Select, etc.)
2. **styled-components**: Giữ nguyên cho layout wrappers (theo FE_AGENTS.md rules)
3. **Kết hợp**: shadcn/ui components bên trong styled-components wrappers

## Cách sử dụng

### Ví dụ 1: Page với shadcn/ui components

```tsx
import styled from 'styled-components';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Layout wrapper dùng styled-components
const PageWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing[8]};
  max-width: 1400px;
  margin: 0 auto;
`;

// Component sử dụng cả hai
export const MyPage = () => {
  return (
    <PageWrapper>
      <Card>
        <CardHeader>
          <CardTitle>Tiêu đề</CardTitle>
        </CardHeader>
        <CardContent>
          <Input placeholder="Nhập text..." />
          <Button>Click me</Button>
        </CardContent>
      </Card>
    </PageWrapper>
  );
};
```

### Ví dụ 2: Form với shadcn/ui

```tsx
import styled from 'styled-components';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const MyForm = () => {
  return (
    <FormWrapper>
      <FormGroup>
        <Label>Tên</Label>
        <Input placeholder="Nhập tên..." />
      </FormGroup>
      
      <FormGroup>
        <Label>Loại</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Chọn loại" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      </FormGroup>
      
      <Button type="submit">Submit</Button>
    </FormWrapper>
  );
};
```

### Ví dụ 3: Modal/Dialog với shadcn/ui

```tsx
import styled from 'styled-components';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const ModalWrapper = styled.div`
  /* Styled wrapper nếu cần */
`;

export const MyModal = () => {
  return (
    <ModalWrapper>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Mở modal</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Tiêu đề modal</DialogTitle>
            <DialogDescription>Mô tả modal</DialogDescription>
          </DialogHeader>
          <div>Nội dung modal</div>
          <DialogFooter>
            <Button variant="outline">Hủy</Button>
            <Button>Xác nhận</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </ModalWrapper>
  );
};
```

## Components có sẵn

### Core Components
- `Button` - với variants: default, destructive, outline, secondary, ghost, link
- `Input` - text input
- `Label` - form label
- `Textarea` - textarea input
- `Select` - dropdown select
- `Card` - card container với CardHeader, CardTitle, CardDescription, CardContent, CardFooter
- `Badge` - badge component
- `Skeleton` - loading skeleton

### Dialog & Overlays
- `Dialog` - modal dialog
- `AlertDialog` - confirmation dialog
- `Popover` - popover
- `Tooltip` - tooltip

### Feedback
- `Alert` - alert message
- `Toast` - toast notification (cần thêm Toaster vào root App)

## Dark Mode

Dark mode được tự động apply khi có class `dark` trên root element. ThemeProvider sẽ tự động thêm/xóa class này.

## Import Path

Tất cả components được import từ `@/components/ui/*`:

```tsx
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
// etc.
```

## Lưu ý

- **Không thay thế styled-components**: Giữ nguyên styled-components cho layout wrappers
- **Kết hợp cả hai**: shadcn/ui cho UI elements, styled-components cho layout
- **Theme consistency**: CSS variables đã được map với theme colors hiện tại
- **TypeScript**: Tất cả components đều có TypeScript types đầy đủ
