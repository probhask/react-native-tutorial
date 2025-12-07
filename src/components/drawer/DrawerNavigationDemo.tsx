import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import DrawerScreen1 from './DrawerScreen1';
import DrawerScreen2 from './DrawerScreen2';
import { CategoryHeader, InfoBox, WarningTip } from '../shared';
import { colors, commonStyles, spacing } from '../../styles/common';

export type DrawerParamList = {
  DrawerScreen1: undefined;
  DrawerScreen2: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerInfo = () => (
  <ScrollView
    style={commonStyles.container}
    contentContainerStyle={commonStyles.scrollContent}
  >
    <CategoryHeader
      title="Drawer Navigation"
      subtitle="Side menu for easy navigation between major sections"
    />

    <InfoBox
      title="🎯 How Drawer Navigation Works"
      items={[
        '• Side menu: Slides in from left (or right) edge of screen',
        '• Hamburger icon: Tap menu icon or swipe from edge to open',
        '• Navigation tree: Drawer contains stack/tab navigators',
        '• Gesture-based: Natural swipe-to-open/close interaction',
        '• Customizable: Custom drawer content, icons, styling',
      ]}
    />

    <InfoBox
      title="💡 When to Use Drawer Navigation"
      items={[
        '• Many sections: 5+ main sections or categories',
        "• Infrequent switching: Users don't switch sections constantly",
        '• Settings/profile: Quick access to account settings',
        '• Admin panels: Dashboard apps with multiple modules',
        '• Avoid for: Core features users access frequently (use tabs instead)',
      ]}
    />

    <WarningTip
      type="tip"
      text="Try swiping from the left edge or tapping the menu icon to open the drawer. Navigate between Screen 1 and Screen 2."
    />
  </ScrollView>
);

const DrawerNavigationDemo = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: colors.backgroundSecondary,
          width: 280,
        },
        drawerActiveTintColor: colors.blue,
        drawerInactiveTintColor: colors.textSecondary,
        headerStyle: {
          backgroundColor: colors.backgroundSecondary,
        },
        headerTintColor: colors.textPrimary,
      }}
    >
      <Drawer.Screen
        name="DrawerScreen1"
        component={DrawerScreen1}
        options={{ title: '📱 Screen 1' }}
      />
      <Drawer.Screen
        name="DrawerScreen2"
        component={DrawerScreen2}
        options={{ title: '🎨 Screen 2' }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigationDemo;
