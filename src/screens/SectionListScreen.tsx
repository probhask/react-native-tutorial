import React from 'react';
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { CategoryHeader, InfoBox, WarningTip } from '../components/shared';
import {
  borderRadius,
  colors,
  commonStyles,
  shadows,
  spacing,
  typography,
} from '../styles/common';

const SECTIONS = [
  {
    title: 'Fruits',
    data: ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'],
  },
  {
    title: 'Vegetables',
    data: ['Carrot', 'Tomato', 'Cucumber', 'Lettuce', 'Pepper'],
  },
  {
    title: 'Beverages',
    data: ['Coffee', 'Tea', 'Juice', 'Water', 'Soda'],
  },
];

const SectionListScreen = () => {
  return (
    <View style={commonStyles.container}>
      <SectionList
        sections={SECTIONS}
        keyExtractor={(item, index) => item + index}
        stickySectionHeadersEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View>
            <CategoryHeader
              title="SectionList Demo"
              subtitle="Organized list with sticky section headers"
            />

            <InfoBox
              title="🗂️ When to use SectionList?"
              items={[
                '• Grouped data: Contact lists, settings pages, categorized items',
                '• Sticky headers: Section titles remain visible while scrolling',
                '• Section metadata: Custom headers/footers per section',
                '• Built on FlatList: Same performance benefits with grouping',
                '• Real-world use: App stores, music libraries, address books',
              ]}
            />

            <WarningTip
              type="note"
              text="Each section needs a unique 'title' or 'key'. Section headers stick to top by default."
            />
          </View>
        }
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer} activeOpacity={0.8}>
            <Text style={styles.itemText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContent: {
    padding: spacing.lg,
    paddingBottom: spacing.xxxl,
  },
  sectionHeader: {
    backgroundColor: colors.blue,
    padding: spacing.md,
    borderRadius: borderRadius.sm,
    marginTop: spacing.md,
    marginBottom: spacing.sm,

    ...shadows.small,
  },
  sectionTitle: {
    ...typography.headingSmall,
    fontSize: 16,
    color: colors.backgroundPrimary,
  },
  itemContainer: {
    backgroundColor: colors.backgroundSecondary,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    marginBottom: spacing.sm,
    ...shadows.small,
  },
  itemText: {
    ...typography.body,
    color: colors.textPrimary,
  },
});

export default SectionListScreen;
