import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigationDemo from './components/drawer/DrawerNavigationDemo';
import StackNavigationDemo from './components/stack/StackNavigationDemo';
import TabNavigationDemo from './components/tab/TabNavigationDemo';
import DataFetching from './screens/DataFetching';
import FlatListScreen from './screens/FlatListScreen';
import HomeScreen from './screens/Home';
import ModalScreen from './screens/ModalScreen';
import PullToRefresh from './screens/PullToRefresh';
import SectionListScreen from './screens/SectionListScreen';
import TouchableScreen from './screens/TouchableScreen';
import ThemeScreen from './screens/ThemeScreen';
import BasicAnimation from './screens/animation/BasicAnimation';
import Interpolation from './screens/animation/Interpolation';
import Basic from './screens/Basic';
import CombinedAnimation from './components/animation/CombinedAnimation';
import GestureAnimation from './components/animation/GestureAnimation';
import BasicsIndex from './screens/categories/BasicsIndex';
import ListsIndex from './screens/categories/ListsIndex';
import AnimationIndex from './screens/categories/AnimationIndex';
import InteractionsIndex from './screens/categories/InteractionsIndex';
import OtherIndex from './screens/categories/OtherIndex';
import NavigationIndex from './screens/categories/NavigationIndex';

export type RootStackParamList = {
  Home: undefined;
  BasicsIndex: undefined;
  ListsIndex: undefined;
  AnimationIndex: undefined;
  InteractionsIndex: undefined;
  OtherIndex: undefined;
  NavigationIndex: undefined;
  StackDemo: undefined;
  TabDemo: undefined;
  DrawerDemo: undefined;
  FlatListDemo: undefined;
  SectionListDemo: undefined;
  TouchableDemo: undefined;
  ModalDemo: undefined;
  PullToRefresh: undefined;
  AxiosDemo: undefined;
  ThemeDemo: undefined;
  BasicDemo: undefined;
  BasicAnimationDemo: undefined;
  InterpolationDemo: undefined;
  CombinedAnimationDemo: undefined;
  GestureAnimationDemo: undefined;
};

//create stack navigator
const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />

      {/* Category Index Screens */}
      <Stack.Screen
        name="BasicsIndex"
        component={BasicsIndex}
        options={{ title: 'Basics' }}
      />
      <Stack.Screen
        name="ListsIndex"
        component={ListsIndex}
        options={{ title: 'Lists' }}
      />
      <Stack.Screen
        name="AnimationIndex"
        component={AnimationIndex}
        options={{ title: 'Animation' }}
      />
      <Stack.Screen
        name="InteractionsIndex"
        component={InteractionsIndex}
        options={{ title: 'Interactions' }}
      />
      <Stack.Screen
        name="OtherIndex"
        component={OtherIndex}
        options={{ title: 'Other' }}
      />
      <Stack.Screen
        name="NavigationIndex"
        component={NavigationIndex}
        options={{ title: 'Navigation' }}
      />

      {/* Navigation Demos */}
      <Stack.Screen name="StackDemo" component={StackNavigationDemo} />
      <Stack.Screen name="TabDemo" component={TabNavigationDemo} />
      <Stack.Screen name="DrawerDemo" component={DrawerNavigationDemo} />

      {/* List Demos */}
      <Stack.Screen name="FlatListDemo" component={FlatListScreen} />
      <Stack.Screen name="SectionListDemo" component={SectionListScreen} />

      {/* Interaction Demos */}
      <Stack.Screen name="TouchableDemo" component={TouchableScreen} />

      {/* Other Demos */}
      <Stack.Screen name="ModalDemo" component={ModalScreen} />
      <Stack.Screen name="PullToRefresh" component={PullToRefresh} />
      <Stack.Screen name="AxiosDemo" component={DataFetching} />
      <Stack.Screen name="ThemeDemo" component={ThemeScreen} />

      {/* Basic Components */}
      <Stack.Screen name="BasicDemo" component={Basic} />

      {/* Animation Demos */}
      <Stack.Screen name="BasicAnimationDemo" component={BasicAnimation} />
      <Stack.Screen name="InterpolationDemo" component={Interpolation} />
      <Stack.Screen
        name="CombinedAnimationDemo"
        component={CombinedAnimation}
      />
      <Stack.Screen name="GestureAnimationDemo" component={GestureAnimation} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
