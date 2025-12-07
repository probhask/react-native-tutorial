import React, { useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import { CategoryHeader, InfoBox, WarningTip } from '../components/shared';
import {
  borderRadius,
  colors,
  commonStyles,
  shadows,
  spacing,
  typography,
} from '../styles/common';

const INITIAL_DATA = Array.from({ length: 10 }).map((_, i) => ({
  id: `${i}`,
  title: `Item ${i + 1}`,
  timestamp: new Date().toLocaleTimeString(),
}));

const PullToRefresh = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    // Simulate API call
    setTimeout(() => {
      const newData = Array.from({ length: 10 }).map((_, i) => ({
        id: `${Date.now()}-${i}`,
        title: `Updated Item ${i + 1}`,
        timestamp: new Date().toLocaleTimeString(),
      }));
      setData(newData);
      setRefreshing(false);
    }, 1500);
  };

  return (
    <View style={commonStyles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[colors.blue]}
            tintColor={colors.blue}
          />
        }
        ListHeaderComponent={
          <View>
            <CategoryHeader
              title="Pull to Refresh"
              subtitle="Reload content with a simple pull-down gesture"
            />

            <InfoBox
              title="🔄 How it works"
              items={[
                '• Native gesture: Pull down from top to trigger refresh',
                '• Works with ScrollView/FlatList/SectionList',
                '• Loading indicator: Shows spinner while refreshing',
                '• Async pattern: Perfect for fetching latest data',
                '• User-initiated: User controls when to update content',
              ]}
            />

            <WarningTip
              type="tip"
              text="Pull down the list below to see refresh in action. Notice timestamps update."
            />
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemTimestamp}>Updated: {item.timestamp}</Text>
          </View>
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
  itemTimestamp: {
    ...typography.caption,
    color: colors.textTertiary,
  },
});

export default PullToRefresh;
