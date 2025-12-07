import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const ScrollViewBasics = () => {
  const tips = [
    'ScrollView renders all children at once; great for short lists.',
    'Use contentContainerStyle to add padding when you do not need flex.',
    'nestedScrollEnabled helps when a ScrollView lives inside another.',
    'Set showsVerticalScrollIndicator to control the scrollbar visibility.',
    'Wrap rows in cards to keep content readable while scrolling.',
  ];

  return (
    <View style={styles.card}>
      <Text style={styles.heading}>ScrollView basics</Text>
      <Text style={styles.subheading}>
        Perfect for a handful of items. For long data sets, switch to FlatList
        or SectionList so items render lazily.
      </Text>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
      >
        {tips.map((tip, index) => (
          <View key={tip} style={styles.tipCard}>
            <Text style={styles.tipIndex}>#{index + 1}</Text>
            <Text style={styles.tipText}>{tip}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 6,
  },
  subheading: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 12,
    lineHeight: 20,
  },
  scroll: {
    maxHeight: 220,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
  },
  scrollContent: {
    padding: 12,
    gap: 10,
  },
  tipCard: {
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  tipIndex: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: '#1d4ed8',
    color: '#ffffff',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '700',
    fontSize: 14,
  },
  tipText: {
    flex: 1,
    fontSize: 14,
    color: '#334155',
    lineHeight: 20,
  },
});

export default ScrollViewBasics;
