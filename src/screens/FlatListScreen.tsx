import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { CategoryHeader, InfoBox, WarningTip } from '../components/shared';
import { borderRadius, colors, commonStyles, shadows, spacing, typography } from '../styles/common';

const FLAT_DATA = Array.from({ length: 50 }).map((_, index) => ({
  id: index.toString(),
  title: `Item ${index + 1}`,
  subtitle: `Description for item ${index + 1}`,
}));

const FlatListScreen = () => {
  const handleRenderItem = ({
    item,
  }: {
    item: { id: string; title: string; subtitle: string };
  }) => (
    <TouchableOpacity style={styles.itemContainer} activeOpacity={0.8}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={commonStyles.container}>
      <FlatList
        data={FLAT_DATA}
        renderItem={handleRenderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <CategoryHeader
              title="FlatList Demo"
              subtitle="High-performance scrolling list that only renders visible items"
            />

            <InfoBox
              title="💡 Why use FlatList?"
              items={[
                '• Lazy rendering: Only items on screen are rendered',
                '• Memory efficient: Perfect for large datasets (1000s of items)',
                '• Built-in features: Pull-to-refresh, infinite scroll support',
                '• Optimized: Uses native scrolling for 60fps performance',
                '• Flexible: Custom headers, footers, separators, empty states',
              ]}
            />

            <WarningTip
              type="tip"
              text="Use keyExtractor to provide unique keys. Avoid using index as key if items can be reordered."
            />

            <View style={styles.listComponent}>
              <Text style={styles.componentText}>📌 List Header</Text>
            </View>
          </View>
        }
        ListFooterComponent={
          <View style={styles.listComponent}>
            <Text style={styles.componentText}>📌 List Footer</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContent: {
    padding: spacing.lg,
    paddingBottom: spacing.xxxl,
  },
  itemContainer: {
    backgroundColor: colors.backgroundSecondary,
    padding: spacing.lg,
    borderRadius: borderRadius.md,
    marginBottom: spacing.md,
    ...shadows.small,
  },
  itemTitle: {
    ...typography.headingSmall,
    fontSize: 16,
    marginBottom: 4,
  },
  itemSubtitle: {
    ...typography.caption,
    color: colors.textTertiary,
  },
  listComponent: {
    backgroundColor: colors.blueLight,
    padding: spacing.lg,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  componentText: {
    ...typography.label,
    color: colors.blueText,
  },
});

export default FlatListScreen;
