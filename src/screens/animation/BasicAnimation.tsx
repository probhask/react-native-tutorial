import { useRef } from 'react';
import {
  Animated,
  Button,
  Easing,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {
  CategoryHeader,
  InfoBox,
  InteractivePlayground,
  WarningTip,
} from '../../components/shared';
import {
  borderRadius,
  colors,
  commonStyles,
  shadows,
  spacing,
} from '../../styles/common';

const BasicAnimation = () => {
  const fadeAni = useRef(new Animated.Value(0)).current;
  const translateAni = useRef(new Animated.Value(0)).current;
  const scaleAni = useRef(new Animated.Value(1)).current;
  const rotateAni = useRef(new Animated.Value(0)).current;
  const springAni = useRef(new Animated.Value(0)).current;
  const bounceAni = useRef(new Animated.Value(0)).current;

  const handleFadeIn = () => {
    Animated.timing(fadeAni, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const handleFadeOut = () => {
    Animated.timing(fadeAni, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const handleTranslate = () => {
    Animated.timing(translateAni, {
      toValue: 100,
      duration: 1000,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      useNativeDriver: true,
    }).start();
  };

  const handleScale = () => {
    Animated.sequence([
      Animated.timing(scaleAni, {
        toValue: 1.3,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAni, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleRotate = () => {
    Animated.timing(rotateAni, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      rotateAni.setValue(0);
    });
  };

  const spin = rotateAni.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const handleSpring = () => {
    Animated.spring(springAni, {
      toValue: 100,
      friction: 5,
      tension: 100,
      useNativeDriver: true,
    }).start(() => springAni.setValue(0));
  };

  const handleBounce = () => {
    Animated.sequence([
      Animated.spring(bounceAni, {
        toValue: -20,
        useNativeDriver: true,
      }),
      Animated.spring(bounceAni, {
        toValue: 0,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <ScrollView
      style={commonStyles.container}
      contentContainerStyle={commonStyles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <CategoryHeader
        title="Basic Animations"
        subtitle="Fundamental animation types using React Native's Animated API"
      />

      <InfoBox
        title="🎬 Understanding Animated API"
        items={[
          '• Animated.Value: Holds the animated value that drives the animation',
          '• Animated.timing(): Linear interpolation over time with easing',
          '• Animated.spring(): Physics-based animation with bounce effect',
          '• Animated.sequence(): Run multiple animations one after another',
          '• useNativeDriver: Offloads animation to native thread for 60fps',
        ]}
      />

      <InfoBox
        title="🔧 Why useRef for Animations?"
        items={[
          '• Persists value: useRef maintains value across re-renders',
          "• No re-renders: Changing .current doesn't trigger component update",
          '• Reference stability: Same object instance throughout lifecycle',
          '• Direct access: Animated.Value needs stable reference for updates',
          '• Performance: Avoids recreating Animated.Value on every render',
        ]}
      />

      <WarningTip
        type="tip"
        text="Try each animation below. Notice how useNativeDriver:true enables smooth 60fps animations by running on the native thread."
      />

      <InteractivePlayground
        title="Fade Animation"
        helper="Opacity: 0 → 1 (fade in) or 1 → 0 (fade out)"
      >
        <View style={styles.demoContainer}>
          <Animated.View
            style={[
              styles.box,
              styles.fadeBox,
              {
                opacity: fadeAni,
              },
            ]}
          />
          <View style={styles.btnContainer}>
            <View style={styles.button}>
              <Button
                title="Fade In"
                onPress={handleFadeIn}
                color={colors.green}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Fade Out"
                onPress={handleFadeOut}
                color={colors.red}
              />
            </View>
          </View>
        </View>
      </InteractivePlayground>

      <InteractivePlayground
        title="Translate Animation"
        helper="TranslateX: Moves element horizontally with custom easing"
      >
        <View style={styles.demoContainer}>
          <Animated.View
            style={[
              styles.box,
              styles.translateBox,
              {
                transform: [{ translateX: translateAni }],
              },
            ]}
          />
          <View style={styles.btnContainer}>
            <View style={styles.button}>
              <Button
                title="Move"
                onPress={handleTranslate}
                color={colors.blue}
              />
            </View>
          </View>
        </View>
      </InteractivePlayground>

      <InteractivePlayground
        title="Scale Animation"
        helper="Scale: 1 → 1.3 → 1 using Animated.sequence()"
      >
        <View style={styles.demoContainer}>
          <Animated.View
            style={[
              styles.box,
              styles.scaleBox,
              {
                transform: [{ scale: scaleAni }],
              },
            ]}
          />
          <View style={styles.btnContainer}>
            <View style={styles.button}>
              <Button
                title="Scale"
                onPress={handleScale}
                color={colors.amber}
              />
            </View>
          </View>
        </View>
      </InteractivePlayground>

      <InteractivePlayground
        title="Rotate Animation"
        helper="Rotate: Uses interpolate() to map 0→1 to 0deg→360deg"
      >
        <View style={styles.demoContainer}>
          <Animated.View
            style={[
              styles.box,
              styles.rotateBox,
              {
                transform: [{ rotate: spin }],
              },
            ]}
          />
          <View style={styles.btnContainer}>
            <View style={styles.button}>
              <Button
                title="Rotate"
                onPress={handleRotate}
                color={colors.purple}
              />
            </View>
          </View>
        </View>
      </InteractivePlayground>

      <InteractivePlayground
        title="Spring Animation"
        helper="Physics-based: friction=5, tension=100 for bouncy effect"
      >
        <View style={styles.demoContainer}>
          <Animated.View
            style={[
              styles.box,
              styles.springBox,
              {
                transform: [{ translateX: springAni }],
              },
            ]}
          />
          <View style={styles.btnContainer}>
            <View style={styles.button}>
              <Button
                title="Spring"
                onPress={handleSpring}
                color={colors.cyan}
              />
            </View>
          </View>
        </View>
      </InteractivePlayground>

      <InteractivePlayground
        title="Bounce Animation"
        helper="Sequence: Spring up (-20) then spring back to 0"
      >
        <View style={styles.demoContainer}>
          <Animated.View
            style={[
              styles.box,
              styles.bounceBox,
              {
                transform: [{ translateY: bounceAni }],
              },
            ]}
          />
          <View style={styles.btnContainer}>
            <View style={styles.button}>
              <Button
                title="Bounce"
                onPress={handleBounce}
                color={colors.pink}
              />
            </View>
          </View>
        </View>
      </InteractivePlayground>

      <InfoBox
        title="💡 Key Concepts"
        items={[
          '• timing() vs spring(): timing is time-based, spring is physics-based',
          '• Easing functions: Control acceleration curve (ease-in, ease-out, bezier)',
          '• Transform properties: translateX/Y, scale, rotate work with useNativeDriver',
          '• Layout properties: width, height, color require useNativeDriver:false',
          '• Callbacks: .start() accepts callback for chaining or resetting animations',
        ]}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  demoContainer: {
    alignItems: 'center',
    width: '100%',
    paddingVertical: spacing.md,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.md,
    marginTop: spacing.lg,
    width: '100%',
    flexWrap: 'wrap',
  },
  button: {
    minWidth: 120,
    borderRadius: borderRadius.sm,
    overflow: 'hidden',
  },
  box: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: borderRadius.md,
    ...shadows.medium,
  },
  fadeBox: {
    backgroundColor: colors.green,
  },
  translateBox: {
    backgroundColor: colors.blue,
  },
  scaleBox: {
    backgroundColor: colors.amber,
  },
  rotateBox: {
    backgroundColor: colors.purple,
  },
  springBox: {
    backgroundColor: colors.cyan,
  },
  bounceBox: {
    backgroundColor: colors.pink,
  },
});

export default BasicAnimation;
