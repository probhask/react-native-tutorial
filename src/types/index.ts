import { RootStackParamList } from '../RootNavigator';

export type NavigationRoute = keyof RootStackParamList;

export interface Category {
  title: string;
  description: string;
  id: NavigationRoute;
  icon: string;
  color: string;
}

export interface DemoItem {
  title: string;
  id: NavigationRoute;
  description: string;
  icon?: string;
}

export interface InfoBoxProps {
  title: string;
  items: string[];
  color?: string;
  backgroundColor?: string;
}

export interface WarningTipProps {
  type: 'warning' | 'tip' | 'note';
  text: string;
}

export interface InteractivePlaygroundProps {
  title?: string;
  children: React.ReactNode;
  helper?: string;
}

export interface CategoryHeaderProps {
  title: string;
  subtitle: string;
}

export interface DemoCardProps {
  title: string;
  description: string;
  icon?: string;
  onPress: () => void;
}
