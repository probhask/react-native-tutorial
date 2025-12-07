import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ScrollView } from 'react-native';
import StackScreen1 from './StackScreen1';
import StackScreen2 from './StackScreen2';
import { CategoryHeader, InfoBox, WarningTip } from '../shared';
import { colors, commonStyles } from '../../styles/common';

export type StackParamList = {
  StackScreen1: undefined;
  StackScreen2: {
    itemId: number;
  };
};

const Stack = createStackNavigator<StackParamList>();

const StackInfo = () => (
  <ScrollView
    style={commonStyles.container}
    contentContainerStyle={commonStyles.scrollContent}
  >
    <CategoryHeader
      title="Stack Navigation"
      subtitle="Card-based navigation with back button and transitions"
    />

    <InfoBox
      title="🎯 How Stack Navigation Works"
      items={[
        '• Card stack: Screens stack on top of each other like cards',
        '• Push/pop: Navigate forward (push) or back (pop)',
        '• Back button: Automatically added to navigate back',
        '• Transitions: Slide animations between screens (iOS/Android)',
        '• Params: Pass data between screens via route params',
      ]}
    />

    <InfoBox
      title="💡 When to Use Stack Navigation"
      items={[
        '• Linear flows: Step-by-step processes (checkout, onboarding)',
        '• Detail views: List → Detail → More Details navigation',
        '• Forms: Multi-step forms with back/forward navigation',
        '• Hierarchical: Content with parent-child relationships',
        '• Default choice: Most common navigation pattern in mobile apps',
      ]}
    />

    <WarningTip
      type="tip"
      text="Tap 'Go to Screen 2' to push a new screen. Notice the back button appears automatically."
    />
  </ScrollView>
);

const StackNavigationDemo: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.backgroundSecondary,
        },
        headerTintColor: colors.blue,
        headerTitleStyle: {
          fontWeight: '600',
        },
        cardStyle: {
          backgroundColor: colors.backgroundPrimary,
        },
      }}
    >
      <Stack.Screen
        options={{
          title: '📱 Stack Screen 1',
        }}
        name="StackScreen1"
        component={StackScreen1}
      />
      <Stack.Screen
        options={({ route }) => ({
          title: `📄 Item ${route.params.itemId}`,
        })}
        name="StackScreen2"
        component={StackScreen2}
      />
    </Stack.Navigator>
  );
};

export default StackNavigationDemo;
