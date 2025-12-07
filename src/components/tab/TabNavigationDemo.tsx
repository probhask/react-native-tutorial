import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { ScrollView } from 'react-native';
import TabScreen1 from './TabScreen1';
import TabScreen2 from './TabScreen2';
import { CategoryHeader, InfoBox, WarningTip } from '../shared';
import { colors, commonStyles } from '../../styles/common';

type BottomTabParamList = {
  TabScreen1: undefined;
  TabScreen2: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const TabInfo = () => (
  <ScrollView
    style={commonStyles.container}
    contentContainerStyle={commonStyles.scrollContent}
  >
    <CategoryHeader
      title="Tab Navigation"
      subtitle="Bottom tabs for quick switching between primary sections"
    />

    <InfoBox
      title="🎯 How Tab Navigation Works"
      items={[
        '• Bottom tabs: Fixed navigation bar at screen bottom',
        '• Instant switching: Tap tab to switch between screens',
        '• State preserved: Each tab maintains its own navigation state',
        '• Visual indicators: Active tab highlighted with color/icon',
        '• Badge support: Show notifications or counts on tabs',
      ]}
    />

    <InfoBox
      title="💡 When to Use Tab Navigation"
      items={[
        '• Primary sections: 3-5 main sections users switch frequently',
        '• Social apps: Home, Search, Profile, Notifications',
        '• Content apps: Feed, Explore, Library, Account',
        '• Equal importance: All sections have similar priority',
        '• Avoid for: More than 5 tabs (use drawer) or single-flow apps',
      ]}
    />

    <WarningTip
      type="tip"
      text="Tap the tabs at the bottom to switch between Tab Screen 1 and Tab Screen 2. Notice the instant transition."
    />
  </ScrollView>
);

const TabNavigationDemo = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.blue,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: colors.backgroundSecondary,
          borderTopColor: colors.borderLight,
        },
        headerStyle: {
          backgroundColor: colors.backgroundSecondary,
        },
        headerTintColor: colors.textPrimary,
      }}
    >
      <BottomTab.Screen
        name="TabScreen1"
        component={TabScreen1}
        options={{
          title: '🏠 Home',
          tabBarLabel: 'Home',
        }}
      />
      <BottomTab.Screen
        name="TabScreen2"
        component={TabScreen2}
        options={{
          title: '⚙️ Settings',
          tabBarLabel: 'Settings',
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabNavigationDemo;
