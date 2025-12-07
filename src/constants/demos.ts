import { Category, DemoItem, NavigationRoute } from '../types';
import { colors } from '../styles/common';

export const CATEGORIES: Category[] = [
  {
    title: 'Basics',
    description: 'Core building blocks',
    id: 'BasicsIndex' as NavigationRoute,
    icon: '🧩',
    color: colors.blue,
  },
  {
    title: 'Lists',
    description: 'Scrollable data views',
    id: 'ListsIndex' as NavigationRoute,
    icon: '📋',
    color: colors.purple,
  },
  {
    title: 'Animation',
    description: 'Smooth transitions',
    id: 'AnimationIndex' as NavigationRoute,
    icon: '✨',
    color: colors.pink,
  },
  {
    title: 'Interactions',
    description: 'Touch & gestures',
    id: 'InteractionsIndex' as NavigationRoute,
    icon: '👆',
    color: colors.green,
  },
  {
    title: 'Other',
    description: 'Modals, themes & more',
    id: 'OtherIndex' as NavigationRoute,
    icon: '⚡',
    color: colors.amber,
  },
  {
    title: 'Navigation',
    description: 'Stack, Tab & Drawer',
    id: 'NavigationIndex' as NavigationRoute,
    icon: '🧭',
    color: colors.cyan,
  },
];

export const BASICS_DEMOS: DemoItem[] = [
  {
    title: 'Core Components',
    id: 'BasicDemo' as NavigationRoute,
    description: 'View, Text, Image, TextInput, ScrollView basics',
  },
];

export const LISTS_DEMOS: DemoItem[] = [
  {
    title: 'FlatList',
    id: 'FlatListDemo' as NavigationRoute,
    description: 'Efficient scrolling list with lazy rendering',
  },
  {
    title: 'SectionList',
    id: 'SectionListDemo' as NavigationRoute,
    description: 'Grouped lists with section headers',
  },
];

export const ANIMATION_DEMOS: DemoItem[] = [
  {
    title: 'Basic Animation',
    id: 'BasicAnimationDemo' as NavigationRoute,
    description: 'Fade, scale, and translate effects',
  },
  {
    title: 'Interpolation',
    id: 'InterpolationDemo' as NavigationRoute,
    description: 'Map values to colors, rotation, size',
  },
  {
    title: 'Combined Animation',
    id: 'CombinedAnimationDemo' as NavigationRoute,
    description: 'Layer multiple animations together',
  },
  {
    title: 'Gesture Animation',
    id: 'GestureAnimationDemo' as NavigationRoute,
    description: 'Drag and spring with PanResponder',
  },
];

export const INTERACTIONS_DEMOS: DemoItem[] = [
  {
    title: 'Touchable Components',
    id: 'TouchableDemo' as NavigationRoute,
    description: 'Buttons, pressables, and touch feedback',
  },
];

export const OTHER_DEMOS: DemoItem[] = [
  {
    title: 'Modal',
    id: 'ModalDemo' as NavigationRoute,
    description: 'Overlay screens and dialogs',
  },
  {
    title: 'Pull To Refresh',
    id: 'PullToRefresh' as NavigationRoute,
    description: 'Refresh content with pull gesture',
  },
  {
    title: 'Data Fetching',
    id: 'AxiosDemo' as NavigationRoute,
    description: 'Fetch data with Axios',
  },
  {
    title: 'Theme',
    id: 'ThemeDemo' as NavigationRoute,
    description: 'Light and dark mode switching',
  },
];

export const NAVIGATION_DEMOS: DemoItem[] = [
  {
    title: 'Stack Navigation',
    id: 'StackDemo' as NavigationRoute,
    description: 'Push and pop screens in a stack',
    icon: '📚',
  },
  {
    title: 'Tab Navigation',
    id: 'TabDemo' as NavigationRoute,
    description: 'Bottom tabs for app sections',
    icon: '📑',
  },
  {
    title: 'Drawer Navigation',
    id: 'DrawerDemo' as NavigationRoute,
    description: 'Side menu for navigation',
    icon: '☰',
  },
];
