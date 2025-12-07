import React from 'react';
import { ScrollView, StyleSheet, Text, View, Switch } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import {
  CategoryHeader,
  InfoBox,
  InteractivePlayground,
  WarningTip,
} from '../components/shared';
import {
  borderRadius,
  colors,
  commonStyles,
  shadows,
  spacing,
  typography,
} from '../styles/common';

const ThemeScreen = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const themeStyles = {
    background: isDarkMode ? '#1a1a2e' : colors.backgroundPrimary,
    card: isDarkMode ? '#16213e' : colors.backgroundSecondary,
    text: isDarkMode ? '#eaeaea' : colors.textPrimary,
    subtext: isDarkMode ? '#a0a0a0' : colors.textSecondary,
  };

  return (
    <ScrollView
      style={[
        commonStyles.container,
        { backgroundColor: themeStyles.background },
      ]}
      contentContainerStyle={commonStyles.scrollContent}
    >
      <CategoryHeader
        title="Theme Context"
        subtitle="App-wide theme management with React Context"
      />

      <InfoBox
        title="🎨 Context API Pattern"
        items={[
          '• Global state: Share theme across all screens',
          '• React Context: Provider wraps app, consumers access theme',
          '• Persistent storage: Save preference with AsyncStorage',
          '• Dynamic styling: Components update when theme changes',
          '• Performance: Only re-renders consuming components',
        ]}
      />

      <WarningTip
        type="note"
        text="This demo uses ThemeContext from src/context/ThemeContext.tsx. Toggle to see live updates."
      />

      <InteractivePlayground
        title="Theme Toggle"
        helper={`Current mode: ${isDarkMode ? 'Dark 🌙' : 'Light ☀️'}`}
      >
        <View
          style={[
            styles.toggleContainer,
            { backgroundColor: themeStyles.card },
          ]}
        >
          <Text style={[styles.toggleLabel, { color: themeStyles.text }]}>
            {isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleTheme}
            trackColor={{ false: '#ccc', true: colors.blue }}
            thumbColor={isDarkMode ? colors.green : '#f4f3f4'}
          />
        </View>
      </InteractivePlayground>

      <View style={[styles.previewCard, { backgroundColor: themeStyles.card }]}>
        <Text style={[styles.previewTitle, { color: themeStyles.text }]}>
          Preview Card
        </Text>
        <Text style={[styles.previewText, { color: themeStyles.subtext }]}>
          This card demonstrates dynamic theming. Background, text, and accent
          colors all respond to the theme toggle above.
        </Text>
        <View style={styles.colorRow}>
          <View
            style={[styles.colorSwatch, { backgroundColor: colors.blue }]}
          />
          <View
            style={[styles.colorSwatch, { backgroundColor: colors.green }]}
          />
          <View
            style={[styles.colorSwatch, { backgroundColor: colors.purple }]}
          />
          <View
            style={[styles.colorSwatch, { backgroundColor: colors.amber }]}
          />
        </View>
      </View>

      <InfoBox
        title="💡 Implementation Tips"
        items={[
          '• Create context with createContext and Provider',
          '• Use custom hook (useTheme) for easy access',
          '• Store theme in AsyncStorage for persistence',
          '• Define theme tokens (colors, spacing, typography)',
          '• Use spread operator to merge theme and base styles',
        ]}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.lg,
    borderRadius: borderRadius.md,
    ...shadows.small,
  },
  toggleLabel: {
    ...typography.headingSmall,
    fontSize: 16,
  },
  previewCard: {
    padding: spacing.xl,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.lg,
    ...shadows.medium,
  },
  previewTitle: {
    ...typography.headingLarge,
    marginBottom: spacing.sm,
  },
  previewText: {
    ...typography.body,
    lineHeight: 22,
    marginBottom: spacing.lg,
  },
  colorRow: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  colorSwatch: {
    width: 50,
    height: 50,
    borderRadius: borderRadius.sm,
    ...shadows.small,
  },
});

export default ThemeScreen;
