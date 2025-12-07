import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { ScrollView } from 'react-native';
import { RootStackParamList } from '../../RootNavigator';
import { CategoryHeader, DemoCard } from '../../components/shared';
import { commonStyles } from '../../styles/common';
import { ANIMATION_DEMOS } from '../../constants/demos';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const AnimationIndex = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView style={commonStyles.container} contentContainerStyle={commonStyles.scrollContent}>
      <CategoryHeader
        title="Animation"
        subtitle="Smooth transitions and gesture-driven interactions"
      />

      {ANIMATION_DEMOS.map(item => (
        <DemoCard
          key={item.id}
          title={item.title}
          description={item.description}
          icon={item.icon}
          onPress={() => navigation.navigate(item.id)}
        />
      ))}
    </ScrollView>
  );
};

export default AnimationIndex;
