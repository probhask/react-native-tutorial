import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const TextInputBasics = () => {
  const [value, setValue] = useState('');

  return (
    <View style={styles.card}>
      <Text style={styles.heading}>TextInput basics</Text>
      <Text style={styles.subheading}>
        Capture user input with keyboard types, placeholders, and controlled
        values for validation.
      </Text>

      <Text style={styles.label}>Numeric keypad example</Text>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        keyboardType="numeric"
        placeholder="Enter a number"
        placeholderTextColor="#94a3b8"
      />
      <Text style={styles.helper}>
        keyboardType changes which keypad is shown. Combine with maxLength or
        validation to guide input.
      </Text>

      <View style={styles.previewRow}>
        <Text style={styles.previewLabel}>Current value:</Text>
        <Text style={styles.previewValue}>{value || '—'}</Text>
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
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 8,
  },
  input: {
    height: 52,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#0f172a',
    backgroundColor: '#f8fafc',
  },
  helper: {
    fontSize: 13,
    color: '#475569',
    marginTop: 8,
    lineHeight: 19,
  },
  previewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    gap: 8,
  },
  previewLabel: {
    fontSize: 14,
    color: '#475569',
  },
  previewValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
  },
});

export default TextInputBasics;
