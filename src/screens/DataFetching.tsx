import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
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

type Post = {
  id: number;
  title: string;
  body: string;
};

const DataFetching = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=10',
      );
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError('Failed to fetch posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <View style={commonStyles.container}>
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <CategoryHeader
              title="Data Fetching"
              subtitle="Fetch and display data from REST APIs"
            />

            <InfoBox
              title="🌐 API Integration Pattern"
              items={[
                '• Fetch API: Built-in method for HTTP requests',
                '• useEffect: Load data when component mounts',
                '• Loading states: Show spinner while fetching',
                '• Error handling: Catch and display network errors',
                '• TypeScript types: Define response data structure',
              ]}
            />

            <WarningTip
              type="note"
              text="Using JSONPlaceholder API for demo. Data fetched on mount and refresh."
            />

            {loading && (
              <View style={styles.centerContainer}>
                <ActivityIndicator size="large" color={colors.blue} />
                <Text style={styles.loadingText}>Loading posts...</Text>
              </View>
            )}

            {error && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>❌ {error}</Text>
                <TouchableOpacity
                  style={styles.retryButton}
                  onPress={fetchPosts}
                >
                  <Text style={styles.retryText}>Retry</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.postCard}>
            <Text style={styles.postTitle} numberOfLines={2}>
              {item.id}. {item.title}
            </Text>
            <Text style={styles.postBody} numberOfLines={3}>
              {item.body}
            </Text>
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
  centerContainer: {
    alignItems: 'center',
    padding: spacing.xl,
  },
  loadingText: {
    ...typography.body,
    color: colors.textSecondary,
    marginTop: spacing.md,
  },
  errorContainer: {
    backgroundColor: colors.redLight,
    padding: spacing.lg,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  errorText: {
    ...typography.body,
    color: colors.red,
    marginBottom: spacing.md,
  },
  retryButton: {
    backgroundColor: colors.amber,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.sm,
  },
  retryText: {
    ...typography.label,
    color: colors.backgroundPrimary,
  },
  postCard: {
    backgroundColor: colors.backgroundSecondary,
    padding: spacing.lg,
    borderRadius: borderRadius.md,
    marginBottom: spacing.md,
    ...shadows.small,
  },
  postTitle: {
    ...typography.headingSmall,
    fontSize: 16,
    marginBottom: spacing.sm,
  },
  postBody: {
    ...typography.body,
    color: colors.textSecondary,
    lineHeight: 20,
  },
});

export default DataFetching;
