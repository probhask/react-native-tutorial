import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { InteractivePlaygroundProps } from '../../types';
import { borderRadius, colors, spacing, typography } from '../../styles/common';

const InteractivePlayground: React.FC<InteractivePlaygroundProps> = ({
  title = 'Interactive demo',
  children,
  helper,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>
      <View style={styles.playground}>{children}</View>
      {helper && <Text style={styles.helper}>{helper}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundTertiary,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  label: {
    ...typography.label,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
  playground: {
    backgroundColor: colors.backgroundSecondary,
    borderRadius: borderRadius.sm,
    borderWidth: 1,
    borderColor: colors.borderMedium,
    padding: spacing.lg,
    marginBottom: spacing.sm,
  },
  helper: {
    ...typography.caption,
  },
});

export default InteractivePlayground;
