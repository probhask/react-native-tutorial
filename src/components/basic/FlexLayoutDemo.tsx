import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FlexLayoutDemo = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Flex layout</Text>
      <Text style={styles.subheading}>
        Flex helps you distribute and align space on both the main and cross
        axes. Row vs column only flips which axis is primary.
      </Text>

      <View style={styles.section}>
        <Text style={styles.label}>Row (main axis: horizontal)</Text>
        <View style={styles.rowContainer}>
          <View style={[styles.box, styles.roseBox]} />
          <View style={[styles.box, styles.indigoBox]} />
          <View style={[styles.box, styles.emeraldBox]} />
        </View>
        <Text style={styles.helper}>
          justifyContent distributes along the main axis; alignItems targets the
          cross axis.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Column (main axis: vertical)</Text>
        <View style={styles.columnContainer}>
          <View style={[styles.tallBox, styles.indigoBox]} />
          <View style={[styles.tallBox, styles.roseBox]} />
          <View style={[styles.tallBox, styles.emeraldBox]} />
        </View>
        <Text style={styles.helper}>
          When direction is column, justifyContent stacks vertically while
          alignItems controls horizontal placement.
        </Text>
      </View>
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
  section: { marginBottom: 12 },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 8,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  box: {
    flex: 1,
    height: 70,
    borderRadius: 10,
  },
  columnContainer: {
    flexDirection: 'column',
    gap: 10,
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    alignItems: 'stretch',
  },
  tallBox: {
    height: 60,
    borderRadius: 10,
  },
  roseBox: { backgroundColor: '#f472b6' },
  indigoBox: { backgroundColor: '#6366f1' },
  emeraldBox: { backgroundColor: '#34d399' },
  helper: {
    marginTop: 8,
    fontSize: 13,
    color: '#475569',
    lineHeight: 19,
  },
});

export default FlexLayoutDemo;
