import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  PanResponder,
  ScrollView,
} from 'react-native';

const GestureAnimation = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: pan.x,
            dy: pan.y,
          },
        ],
        {
          useNativeDriver: false,
        },
      ),
      onPanResponderRelease: () => {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      },
    }),
  ).current;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.card}>
        <Text style={styles.heading}>👆 Gesture animation</Text>
        <Text style={styles.subheading}>
          Capture touch gestures with PanResponder to drive animated position.
          Drag the box anywhere, then watch it spring back to center on release.
        </Text>

        <View style={styles.playgroundCard}>
          <Text style={styles.label}>Interactive demo</Text>
          <View style={styles.dragArea}>
            <Animated.View
              style={[styles.dragBox, pan.getLayout()]}
              {...panResponder.panHandlers}
            >
              <Text style={styles.dragText}>🖐️</Text>
              <Text style={styles.dragLabel}>Drag me</Text>
            </Animated.View>
          </View>
          <Text style={styles.helper}>
            Touch and drag the box in any direction. When you let go, it springs
            back smoothly to the center using Animated.spring.
          </Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>💡 How it works</Text>
          <Text style={styles.infoText}>
            • PanResponder tracks touch movements (dx, dy) across the screen.
          </Text>
          <Text style={styles.infoText}>
            • Animated.ValueXY() holds x and y position in one convenient
            reference.
          </Text>
          <Text style={styles.infoText}>
            • Animated.event() pipes gesture delta directly to the animated
            value.
          </Text>
          <Text style={styles.infoText}>
            • onPanResponderRelease triggers Animated.spring() to bounce back to
            origin.
          </Text>
          <Text style={styles.infoText}>
            • useNativeDriver: false is required for layout properties like
            translateX/translateY.
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
  dragArea: {
    height: 300,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  dragBox: {
    width: 100,
    height: 100,
    backgroundColor: '#8b5cf6',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  dragText: {
    fontSize: 32,
    marginBottom: 4,
  },
  dragLabel: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '700',
  },
  helper: {
    fontSize: 13,
    color: '#475569',
    lineHeight: 19,
  },
  infoBox: {
    backgroundColor: '#f5f3ff',
    borderRadius: 10,
    padding: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#8b5cf6',
  },
  infoLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: '#5b21b6',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 13,
    color: '#5b21b6',
    lineHeight: 18,
    marginBottom: 6,
  },
});

export default GestureAnimation;
