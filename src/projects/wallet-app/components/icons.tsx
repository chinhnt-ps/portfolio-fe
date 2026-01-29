/**
 * Icon Components
 * 
 * Centralized icon components using Lucide React
 * All icons are outlined style, minimalist, consistent
 * 
 * === CÁCH SỬ DỤNG ICON ===
 * 
 * 1. Sử dụng icon đã có trong Icons object (khuyến nghị):
 *    <Icon icon="Bone" size={20} />
 *    const IconComponent = getIconByName('Bone');
 * 
 * 2. Sử dụng icon từ lucide-react mà không cần import trước:
 *    const IconComponent = getIconByName('Coffee'); // Tự động load từ lucide-react
 *    if (IconComponent) {
 *      return <IconComponent size={20} />
 *    }
 * 
 * 3. Thêm icon mới vào Icons object (để có type safety và tối ưu bundle):
 *    import { Coffee } from 'lucide-react';
 *    registerIcon('Coffee', Coffee);
 *    // Sau đó có thể dùng: <Icon icon="Coffee" />
 * 
 * === LƯU Ý ===
 * - Tên icon trong lucide-react thường là PascalCase (ví dụ: "Bone", "ShoppingBag")
 * - getIconByName() tự động convert tên icon sang PascalCase nếu cần
 * - Import * as LucideIcons sẽ làm tăng bundle size, nhưng cho phép sử dụng bất kỳ icon nào
 * - Để tối ưu bundle size, nên thêm các icon thường dùng vào Icons object bằng registerIcon()
 */
import * as LucideIcons from 'lucide-react';
import {
  LayoutDashboard,
  Receipt,
  Wallet as WalletIcon,
  FolderOpen,
  PiggyBank,
  ArrowUpRight,
  ArrowDownLeft,
  Home,
  Settings,
  Menu,
  Plus,
  LogOut,
  User,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Edit,
  Trash2,
  X,
  Check,
  CheckCircle,
  AlertCircle,
  Loader2,
  Sparkles,
  Sun,
  Moon,
  Utensils,
  Car,
  ShoppingBag,
  Film,
  Heart,
  Book,
  FileText,
  MoreHorizontal,
  DollarSign,
  Gift,
  TrendingUp,
  PlusCircle,
  Search,
  RefreshCw,
  Inbox,
  Bone,
  LucideIcon,
} from 'lucide-react';

export const Icons = {
  Dashboard: LayoutDashboard,
  Transactions: Receipt,
  Accounts: WalletIcon,
  Categories: FolderOpen,
  Budgets: PiggyBank,
  Receivables: ArrowUpRight,
  Liabilities: ArrowDownLeft,
  Assets: Home,
  Settings: Settings,
  Menu: Menu,
  Add: Plus,
  Logout: LogOut,
  User: User,
  Back: ChevronLeft,
  ChevronLeft: ChevronLeft,
  ChevronRight: ChevronRight,
  ChevronUp: ChevronUp,
  ChevronDown: ChevronDown,
  Edit: Edit,
  Delete: Trash2,
  Close: X,
  Check: Check,
  CheckCircle: CheckCircle,
  Alert: AlertCircle,
  Loading: Loader2,
  Loader: Loader2,
  Sparkles: Sparkles,
  Wallet: WalletIcon, // Alias for logo
  Home: Home, // Home icon for back to portfolio
  Sun: Sun,
  Moon: Moon,
  Search: Search,
  // Category icons
  Utensils: Utensils,
  Car: Car,
  ShoppingBag: ShoppingBag,
  Film: Film,
  Heart: Heart,
  Book: Book,
  FileText: FileText,
  MoreHorizontal: MoreHorizontal,
  DollarSign: DollarSign,
  Gift: Gift,
  TrendingUp: TrendingUp,
  PlusCircle: PlusCircle,
  Plus: Plus,
  RefreshCw: RefreshCw,
  Inbox: Inbox,
  AlertCircle: AlertCircle,
  Bone: Bone,
};

// Export IconName type for type-safe icon usage
export type IconName = keyof typeof Icons;

/**
 * Icon cache để tránh lookup nhiều lần
 */
const iconCache = new Map<string, LucideIcon>();

/**
 * Helper function để thêm icon mới vào Icons object
 * 
 * Sử dụng khi bạn muốn thêm icon mới vào Icons object để:
 * - Có type safety tốt hơn
 * - Tối ưu bundle size (chỉ import icon khi cần)
 * - Dễ dàng sử dụng với Icon component
 * 
 * @example
 * // 1. Import icon từ lucide-react
 * import { Coffee, Music } from 'lucide-react';
 * 
 * // 2. Thêm vào Icons object
 * registerIcon('Coffee', Coffee);
 * registerIcon('Music', Music);
 * 
 * // 3. Sử dụng
 * <Icon icon="Coffee" size={20} />
 * getIconByName('Coffee')
 * 
 * @param name - Tên icon (sẽ là key trong Icons object)
 * @param iconComponent - Icon component từ lucide-react
 */
export const registerIcon = (name: string, iconComponent: LucideIcon): void => {
  (Icons as Record<string, LucideIcon>)[name] = iconComponent;
  // Clear cache để icon mới được nhận diện
  iconCache.delete(name);
};

/**
 * Convert icon name sang PascalCase để match với lucide-react exports
 * Ví dụ: "bone" -> "Bone", "shopping-bag" -> "ShoppingBag"
 */
const toPascalCase = (str: string): string => {
  return str
    .split(/[-_\s]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
};

/**
 * Get icon component by name (for dynamic icon loading)
 * 
 * Hỗ trợ 2 cách:
 * 1. Tìm trong Icons object (các icon đã được import sẵn - ưu tiên)
 * 2. Fallback: Tự động load từ lucide-react nếu không tìm thấy
 * 
 * @param iconName - Tên icon (có thể là key trong Icons hoặc tên icon từ lucide-react)
 * @returns Icon component hoặc null nếu không tìm thấy
 * 
 * @example
 * getIconByName('Bone') // Tìm trong Icons trước, nếu không có thì load từ lucide-react
 * getIconByName('bone') // Tự động convert sang 'Bone' và load từ lucide-react
 * getIconByName('ShoppingBag') // Tìm trong Icons
 */
export const getIconByName = (iconName: string): LucideIcon | null => {
  if (!iconName) return null;

  // 1. Kiểm tra cache trước
  if (iconCache.has(iconName)) {
    return iconCache.get(iconName) || null;
  }

  // 2. Tìm trong Icons object (các icon đã được import sẵn - ưu tiên)
  const iconKey = iconName as keyof typeof Icons;
  if (Icons[iconKey]) {
    iconCache.set(iconName, Icons[iconKey]);
    return Icons[iconKey];
  }

  // 3. Fallback: Tự động load từ lucide-react
  // Lưu ý: import * sẽ làm tăng bundle size, nhưng cho phép sử dụng bất kỳ icon nào
  const lucideIconsMap = LucideIcons as unknown as Record<string, LucideIcon | undefined>;
  
  // Thử với tên gốc trước
  let IconComponent = lucideIconsMap[iconName];
  
  // Nếu không tìm thấy, thử convert sang PascalCase
  if (!IconComponent) {
    const pascalCaseName = toPascalCase(iconName);
    IconComponent = lucideIconsMap[pascalCaseName];
  }

  // Nếu vẫn không tìm thấy, thử với các biến thể khác
  if (!IconComponent) {
    const variations = [
      iconName.charAt(0).toUpperCase() + iconName.slice(1), // Capitalize first letter
      iconName.toUpperCase(), // UPPERCASE
      iconName.toLowerCase(), // lowercase
    ];

    for (const variation of variations) {
      const candidate = lucideIconsMap[variation];
      if (candidate && typeof candidate === 'function') {
        IconComponent = candidate;
        break;
      }
    }
  }

  // Cache kết quả (kể cả khi null để tránh lookup lại)
  if (IconComponent && typeof IconComponent === 'function') {
    iconCache.set(iconName, IconComponent);
    return IconComponent;
  }

  // Cache null để tránh lookup lại các icon không tồn tại
  iconCache.set(iconName, null as unknown as LucideIcon);
  return null;
};

/**
 * Icon wrapper component với consistent styling
 * Hỗ trợ cả `icon` và `name` prop để backward compatible
 */
interface IconProps {
  icon?: IconName;
  name?: IconName;
  size?: number;
  className?: string;
  color?: string;
}

export const Icon = ({ icon, name, size = 20, className = '', color }: IconProps) => {
  const iconKey = name || icon;
  if (!iconKey) return null;
  
  const IconComponent = Icons[iconKey];
  if (!IconComponent) return null;

  return (
    <IconComponent
      size={size}
      className={className}
      color={color}
      strokeWidth={2}
    />
  );
};
