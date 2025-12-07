import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { InfoBoxProps } from '../../types';
import { borderRadius, colors, spacing, typography } from '../../styles/common';

const InfoBox: React.FC<InfoBoxProps> = ({
  title,
  items,
  color = colors.blueDark,
  backgroundColor = colors.blueLight,
}) => {
  return (
    <View
      style={[styles.container, { backgroundColor, borderLeftColor: color }]}
    >
      <Text style={[styles.title, { color }]}>{title}</Text>
      {items.map((item, index) => (
        <Text key={index} style={[styles.item, { color }]}>
          {item}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: borderRadius.sm,
    padding: spacing.md,
    borderLeftWidth: 4,
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: spacing.sm,
  },
  item: {
    ...typography.caption,
    marginBottom: 6,
  },
});

export default InfoBox;
