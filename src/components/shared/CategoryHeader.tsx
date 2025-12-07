import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CategoryHeaderProps } from '../../types';
import {
  borderRadius,
  colors,
  shadows,
  spacing,
  typography,
} from '../../styles/common';

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ title, subtitle }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.backgroundSecondary,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    ...shadows.medium,
  },
  title: {
    ...typography.headingLarge,
    marginBottom: 6,
  },
  subtitle: {
    ...typography.body,
  },
});

export default CategoryHeader;
