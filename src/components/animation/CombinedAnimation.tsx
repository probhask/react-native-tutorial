import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Pressable,
  ScrollView,
} from 'react-native';

const CombinedAnimation = () => {
  const moveAndRotateAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  const combinedAnimation = () => {
    moveAndRotateAnim.setValue(0);
    Animated.timing(moveAndRotateAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => moveAndRotateAnim.setValue(0));
  };

  const pulseAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.3,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  const moveX = moveAndRotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 150],
  });

  const moveY = moveAndRotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 150],
  });

  const rotate = moveAndRotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const backgroundColor = moveAndRotateAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['#3b82f6', '#10b981', '#f59e0b'],
  });

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.card}>
        <Text style={styles.heading}>🎬 Combined animation</Text>
        <Text style={styles.subheading}>
          Layer multiple animations together: translate, rotate, scale, and
          color shifts in sync. Chain them with sequences or run in parallel.
        </Text>

        <View style={styles.playgroundCard}>
          <Text style={styles.label}>Interactive demo</Text>
          <View style={styles.stagingArea}>
            <Animated.View
              style={[
                styles.animBox,
                {
                  transform: [
                    { translateX: moveX },
                    { translateY: moveY },
                    { rotate },
                    { scale: pulseAnim },
                  ],
                  backgroundColor,
                },
              ]}
            />
          </View>
          <Text style={styles.helper}>
            Press "Move & Rotate" to start a timed sequence combining position,
            rotation, and color. Press "Pulse" to scale up and down on loop.
          </Text>

          <View style={styles.buttonRow}>
            <Pressable
              style={[styles.button, styles.primaryButton]}
              onPress={combinedAnimation}
              android_ripple={{ color: '#dbeafe' }}
            >
              <Text style={styles.buttonText}>Move & Rotate</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.secondaryButton]}
              onPress={pulseAnimation}
              android_ripple={{ color: '#fecaca' }}
            >
              <Text style={styles.buttonText}>Pulse</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>💡 How it works</Text>
          <Text style={styles.infoText}>
            • Use useRef to hold Animated.Value instances that drive the
            timeline.
          </Text>
          <Text style={styles.infoText}>
            • interpolate() maps one range to multiple outputs (position, color,
            scale).
          </Text>
          <Text style={styles.infoText}>
            • Animated.sequence() runs animations one after another.
          </Text>
          <Text style={styles.infoText}>
            • Animated.loop() repeats forever until stopped.
          </Text>
          <Text style={styles.infoText}>
            • useNativeDriver: true offloads to native thread for smooth 60fps.
          </Text>
        </View>
      </View>
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
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
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
  playgroundCard: {
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 10,
  },
  stagingArea: {
    height: 220,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  animBox: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  helper: {
    fontSize: 13,
    color: '#475569',
    marginBottom: 10,
    lineHeight: 19,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: '#1d4ed8',
  },
  secondaryButton: {
    backgroundColor: '#dc2626',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
  },
  infoBox: {
    backgroundColor: '#eff6ff',
    borderRadius: 10,
    padding: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#1d4ed8',
  },
  infoLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0c3a75',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 13,
    color: '#0c3a75',
    lineHeight: 18,
    marginBottom: 6,
  },
});

export default CombinedAnimation;
