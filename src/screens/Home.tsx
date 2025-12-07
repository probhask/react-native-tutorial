import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../RootNavigator';
import { CategoryCard } from '../components/shared';
import { borderRadius, colors, commonStyles, shadows, spacing, typography } from '../styles/common';
import { CATEGORIES } from '../constants/demos';

type HomeScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProps>();

  return (
    <View style={commonStyles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>React Native Demos</Text>
        <Text style={styles.subtitle}>
          Tap a category to explore demos and examples
        </Text>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={commonStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {CATEGORIES.map(category => (
          <CategoryCard
            key={category.id}
            category={category}
            onPress={() => navigation.navigate(category.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
    paddingBottom: spacing.lg,
    backgroundColor: colors.backgroundSecondary,
    borderBottomLeftRadius: borderRadius.xl + 6,
    borderBottomRightRadius: borderRadius.xl + 6,
    ...shadows.large,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 4,
  },
  subtitle: {
    ...typography.body,
    fontSize: 16,
    color: colors.textTertiary,
  },
  scroll: {
    flex: 1,
  },
});

export default HomeScreen;
