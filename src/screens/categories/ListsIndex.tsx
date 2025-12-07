import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { ScrollView } from 'react-native';
import { RootStackParamList } from '../../RootNavigator';
import { CategoryHeader, DemoCard } from '../../components/shared';
import { commonStyles } from '../../styles/common';
import { LISTS_DEMOS } from '../../constants/demos';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const ListsIndex = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView
      style={commonStyles.container}
      contentContainerStyle={commonStyles.scrollContent}
    >
      <CategoryHeader
        title="Lists"
        subtitle="Performant scrollable lists for large datasets"
      />

      {LISTS_DEMOS.map(item => (
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

export default ListsIndex;
