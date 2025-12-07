import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
  View,
} from 'react-native';
import {
  CategoryHeader,
  InfoBox,
  InteractivePlayground,
} from '../components/shared';
import {
  borderRadius,
  colors,
  commonStyles,
  shadows,
  spacing,
  typography,
} from '../styles/common';

const TouchableScreen = () => {
  const [opacityCount, setOpacityCount] = useState(0);
  const [highlightCount, setHighlightCount] = useState(0);
  const [withoutFeedbackCount, setWithoutFeedbackCount] = useState(0);
  const [pressableCount, setPressableCount] = useState(0);

  return (
    <ScrollView
      style={commonStyles.container}
      contentContainerStyle={commonStyles.scrollContent}
    >
      <CategoryHeader
        title="Touchable Components"
        subtitle="Different ways to handle user touches and gestures"
      />

      <InfoBox
        title="🎯 Touch Component Types"
        items={[
          '• TouchableOpacity: Fades on press (0.2 opacity)',
          '• TouchableHighlight: Changes background color on press',
          '• Pressable: Modern API with advanced feedback states',
          '• TouchableWithoutFeedback: No visual feedback (avoid)',
        ]}
      />

      <InteractivePlayground
        title="TouchableOpacity Demo"
        helper="Tap count: 0"
      >
        <TouchableOpacity
          style={[styles.button, styles.opacityButton]}
          activeOpacity={0.7}
          onPress={() => setOpacityCount(opacityCount + 1)}
        >
          <Text style={styles.buttonText}>
            TouchableOpacity ({opacityCount})
          </Text>
        </TouchableOpacity>
      </InteractivePlayground>

      <InteractivePlayground
        title="TouchableHighlight Demo"
        helper="Changes background on press"
      >
        <TouchableHighlight
          style={[styles.button, styles.highlightButton]}
          underlayColor="#0056b3"
          onPress={() => setHighlightCount(highlightCount + 1)}
        >
          <Text style={styles.buttonText}>
            TouchableHighlight ({highlightCount})
          </Text>
        </TouchableHighlight>
      </InteractivePlayground>

      <InteractivePlayground
        title="TouchableWithoutFeedback Demo"
        helper="No visual feedback (rarely used)"
      >
        <TouchableWithoutFeedback
          onPress={() => setWithoutFeedbackCount(withoutFeedbackCount + 1)}
        >
          <View style={[styles.button, styles.withoutFeedbackButton]}>
            <Text style={styles.buttonText}>
              TouchableWithoutFeedback ({withoutFeedbackCount})
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </InteractivePlayground>

      <InteractivePlayground
        title="Pressable Demo (Recommended)"
        helper="Modern API with pressed state styling"
      >
        <Pressable
          style={({ pressed }) => [
            styles.button,
            styles.pressableButton,
            pressed && styles.pressed,
          ]}
          onPress={() => setPressableCount(pressableCount + 1)}
        >
          {({ pressed }) => (
            <Text style={styles.buttonText}>
              Pressable ({pressableCount}) {pressed ? '👆' : ''}
            </Text>
          )}
        </Pressable>
      </InteractivePlayground>

      <InfoBox
        title="💡 When to use each?"
        items={[
          '• Pressable: Default choice for new code (flexible, modern)',
          '• TouchableOpacity: Quick buttons, cards, list items',
          '• TouchableHighlight: Distinct press feedback needed',
          '• TouchableWithoutFeedback: Only when wrapping custom components that handle their own feedback',
          '• Add hitSlop for small touchable areas (easier tapping)',
        ]}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: spacing.lg,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    ...shadows.medium,
  },
  opacityButton: {
    backgroundColor: colors.green,
  },
  highlightButton: {
    backgroundColor: colors.blue,
  },
  withoutFeedbackButton: {
    backgroundColor: colors.cyan,
  },
  pressableButton: {
    backgroundColor: colors.purple,
  },
  pressed: {
    transform: [{ scale: 0.95 }],
    opacity: 0.8,
  },
  buttonText: {
    ...typography.label,
    color: colors.backgroundPrimary,
    fontSize: 16,
  },
});

export default TouchableScreen;
