/**
 * Icon Components
 * 
 * Centralized icon components using Lucide React
 * All icons are outlined style, minimalist, consistent
 */
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
};

// Export IconName type for type-safe icon usage
export type IconName = keyof typeof Icons;

/**
 * Get icon component by name (for dynamic icon loading)
 */
export const getIconByName = (iconName: string): LucideIcon | null => {
  const iconKey = iconName as keyof typeof Icons;
  return Icons[iconKey] || null;
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
