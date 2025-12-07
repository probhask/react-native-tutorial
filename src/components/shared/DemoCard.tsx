import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DemoCardProps } from '../../types';
import {
  borderRadius,
  colors,
  shadows,
  spacing,
  typography,
} from '../../styles/common';

const DemoCard: React.FC<DemoCardProps> = ({
  title,
  description,
  icon,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      {icon && <Text style={styles.icon}>{icon}</Text>}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.backgroundSecondary,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    marginBottom: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    ...shadows.small,
  },
  icon: {
    fontSize: 32,
    marginRight: spacing.md,
  },
  content: {
    flex: 1,
  },
  title: {
    ...typography.headingSmall,
    marginBottom: 4,
  },
  description: {
    ...typography.bodySmall,
    color: colors.textTertiary,
  },
  arrow: {
    fontSize: 28,
    color: colors.borderDark,
    fontWeight: '300',
    marginLeft: spacing.md,
  },
});

export default DemoCard;
