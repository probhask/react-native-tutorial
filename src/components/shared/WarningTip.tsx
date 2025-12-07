import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WarningTipProps } from '../../types';
import { borderRadius, colors, spacing, typography } from '../../styles/common';

const WarningTip: React.FC<WarningTipProps> = ({ type, text }) => {
  const config = {
    warning: {
      icon: '⚠️',
      backgroundColor: colors.redLight,
      color: colors.red,
    },
    tip: {
      icon: '💡',
      backgroundColor: colors.greenLight,
      color: colors.green,
    },
    note: {
      icon: '📝',
      backgroundColor: colors.blueLight,
      color: colors.blueDark,
    },
  };

  const { icon, backgroundColor, color } = config[type];

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={[styles.text, { color }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: spacing.md,
    borderRadius: borderRadius.sm,
    marginBottom: spacing.md,
    gap: spacing.sm,
  },
  icon: {
    fontSize: 18,
  },
  text: {
    ...typography.caption,
    flex: 1,
    fontWeight: '600',
  },
});

export default WarningTip;
