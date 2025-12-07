import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import FlexLayoutDemo from '../components/basic/FlexLayoutDemo';
import ScrollViewBasics from '../components/basic/ScrollViewBasics';
import TextInputBasics from '../components/basic/TextInputBasics';
import VisualBasics from '../components/basic/VisualBasics';

const Basic = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.hero}>
        <Text style={styles.title}>React Native basics</Text>
        <Text style={styles.subtitle}>
          A quick pass through the core primitives: View, Text, Image,
          TextInput, ScrollView, and how flexbox arranges them.
        </Text>
        <View style={styles.pillsRow}>
          <View style={styles.pill}>
            <Text style={styles.pillText}>Primitives</Text>
          </View>
          <View style={styles.pill}>
            <Text style={styles.pillText}>Layout</Text>
          </View>
          <View style={styles.pill}>
            <Text style={styles.pillText}>Input</Text>
          </View>
        </View>
      </View>

      <VisualBasics />
      <FlexLayoutDemo />
      <ScrollViewBasics />
      <TextInputBasics />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  hero: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: '#475569',
    lineHeight: 22,
    marginBottom: 12,
  },
  pillsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  pill: {
    backgroundColor: '#e0f2fe',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
  },
  pillText: {
    color: '#075985',
    fontSize: 13,
    fontWeight: '700',
  },
});

export default Basic;
