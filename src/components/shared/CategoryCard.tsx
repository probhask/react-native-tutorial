import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Category } from '../../types';
import {
  borderRadius,
  colors,
  shadows,
  spacing,
  typography,
} from '../../styles/common';

interface CategoryCardProps {
  category: Category;
  onPress: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.content}>
        <Text style={styles.icon}>{category.icon}</Text>
        <Text style={styles.title}>{category.title}</Text>
        <Text style={styles.description}>{category.description}</Text>
      </View>
      <View style={[styles.colorBar, { backgroundColor: category.color }]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.backgroundSecondary,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    marginBottom: spacing.lg,
    ...shadows.medium,
  },
  content: {
    padding: spacing.xl,
  },
  icon: {
    fontSize: 40,
    marginBottom: spacing.md,
  },
  title: {
    ...typography.headingMedium,
    fontSize: 22,
    marginBottom: 6,
  },
  description: {
    ...typography.bodySmall,
    color: colors.textTertiary,
  },
  colorBar: {
    height: 6,
    width: '100%',
  },
});

export default CategoryCard;
