import { useRef } from 'react';
import {
  Animated,
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
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
  typography,
} from '../../styles/common';

const Interpolation = () => {
  const animationValue = useRef(new Animated.Value(0)).current;

  const handleStartAnimation = () => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false, // Required for color and size properties
    }).start(() => {
      animationValue.setValue(0);
    });
  };

  const backgroundColor = animationValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['#e81212', '#10b981', '#f59e0b'],
  });

  const rotate = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const borderRadiusAnim = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [8, 100],
  });

  const size = animationValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [200, 300, 200],
  });

  return (
    <ScrollView
      style={commonStyles.container}
      contentContainerStyle={commonStyles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <CategoryHeader
        title="Interpolation"
        subtitle="Map animation progress to multiple output properties"
      />

      <InfoBox
        title="🎯 What is interpolate()?"
        items={[
          '• Maps values: Converts one range (0→1) to any other range',
          '• Input range: The animated value range (e.g., 0 to 1)',
          '• Output range: The resulting value range (e.g., colors, degrees, sizes)',
          '• Multiple outputs: One animated value can drive many properties',
          '• Non-linear: Can create curves with more than 2 values in ranges',
        ]}
      />

      <InfoBox
        title="🔧 Why use interpolate()?"
        items={[
          '• Single source: One Animated.Value controls multiple properties',
          '• Complex animations: Color + size + rotation from same progress',
          '• Unit conversion: Transform numbers to degrees, percentages, colors',
          '• Performance: More efficient than multiple separate animations',
          '• Synchronization: All interpolated values stay perfectly in sync',
        ]}
      />

      <WarningTip
        type="note"
        text="This demo uses useNativeDriver:false because color and layout properties can't run on native thread. Transform properties (rotate) can use native driver."
      />

      <InteractivePlayground
        title="Multi-Property Animation"
        helper="Watch color, size, rotation, and corners change together"
      >
        <View style={styles.demoContainer}>
          <Animated.View
            style={[
              styles.box,
              {
                backgroundColor,
                transform: [{ rotate }],
                borderRadius: borderRadiusAnim,
                width: size,
                height: size,
              },
            ]}
          >
            <Text style={styles.boxLabel}>Interpolate!</Text>
          </Animated.View>
        </View>
      </InteractivePlayground>

      <InfoBox
        title="📊 Animation Breakdown"
        items={[
          '• Color: inputRange [0, 0.5, 1] → outputRange [red, green, amber]',
          '• Rotation: inputRange [0, 1] → outputRange [0deg, 360deg]',
          '• Size: inputRange [0, 0.5, 1] → outputRange [200, 300, 200]',
          '• Corners: inputRange [0, 1] → outputRange [8, 100] (square → circle)',
          '• Progress: All driven by single animationValue (0→1)',
        ]}
      />

      <InteractivePlayground
        title="Visual Progress Bar"
        helper="Shows animation progress from 0% to 100%"
      >
        <View style={styles.barTrack}>
          <Animated.View
            style={[
              styles.barFill,
              {
                width: animationValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0%', '100%'],
                }),
                backgroundColor,
              },
            ]}
          />
        </View>
      </InteractivePlayground>

      <View style={styles.ctaRow}>
        <Button
          title="Start Animation"
          onPress={handleStartAnimation}
          color={colors.blue}
        />
      </View>

      <InfoBox
        title="💡 Key Concepts"
        items={[
          '• inputRange & outputRange must have same number of values',
          '• Extrapolation: Values outside inputRange can extend/clamp/wrap',
          '• Color interpolation: Works with hex, rgb, rgba, hsl color formats',
          '• String interpolation: Supports units like deg, %, px automatically',
          '• Multiple interpolations: Same Animated.Value can have unlimited interpolations',
        ]}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  demoContainer: {
    alignItems: 'center',
    paddingVertical: spacing.xl,
  },
  box: {
    width: 200,
    height: 200,
    padding: spacing.lg,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.large,
  },
  boxLabel: {
    ...typography.label,
    fontSize: 18,
    color: colors.backgroundPrimary,
  },
  barTrack: {
    height: 16,
    backgroundColor: colors.backgroundTertiary,
    borderRadius: borderRadius.full,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  barFill: {
    height: '100%',
    borderRadius: borderRadius.full,
  },
  ctaRow: {
    alignItems: 'center',
    marginTop: spacing.md,
  },
});

export default Interpolation;
