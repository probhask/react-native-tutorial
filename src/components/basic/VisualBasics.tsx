import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const VisualBasics = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Visual building blocks</Text>
      <Text style={styles.subheading}>
        A quick tour of View, Text, and Image together with a simple counter to
        capture interactions.
      </Text>

      <Text style={styles.label}>View component</Text>
      <View style={styles.boxRow}>
        <View style={[styles.box, styles.redBox]} />
        <View style={[styles.box, styles.blueBox]} />
        <View style={[styles.box, styles.greenBox]} />
      </View>

      <Text style={styles.label}>Text component</Text>
      <Text style={styles.primaryText}>Hi, how are you?</Text>
      <Text style={styles.secondaryText}>
        Text renders inline content; adjust size, weight, color, and alignment
        to create hierarchy.
      </Text>

      <Text style={styles.label}>Image component</Text>
      <View style={styles.imageRow}>
        <Image
          source={{ uri: 'https://picsum.photos/200/140' }}
          style={styles.image}
        />
        <Image
          source={{ uri: 'https://picsum.photos/204/140' }}
          style={styles.image}
        />
        <Image
          source={{ uri: 'https://picsum.photos/210/140' }}
          style={styles.image}
        />
      </View>
      <Text style={styles.secondaryText}>
        Remote and local images can live together; resizeMode keeps aspect
        ratios tidy.
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => setCount(prev => prev + 1)}
        android_ripple={{ color: '#dbeafe' }}
      >
        <Text style={styles.buttonText}>Tap to increment</Text>
      </Pressable>
      <Text style={styles.countText}>Count: {count}</Text>
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
    marginTop: 10,
    marginBottom: 8,
  },
  boxRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  box: {
    flex: 1,
    height: 80,
    borderRadius: 12,
  },
  redBox: { backgroundColor: '#ef4444' },
  blueBox: { backgroundColor: '#3b82f6' },
  greenBox: { backgroundColor: '#22c55e' },
  primaryText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 4,
  },
  secondaryText: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
  },
  imageRow: { flexDirection: 'row', gap: 8, marginTop: 6 },
  image: {
    flex: 1,
    height: 120,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  button: {
    marginTop: 14,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: '#1d4ed8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: { color: '#ffffff', fontSize: 15, fontWeight: '700' },
  countText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#0f172a',
  },
});

export default VisualBasics;
