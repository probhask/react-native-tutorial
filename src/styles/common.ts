import { StyleSheet } from 'react-native';

export const colors = {
  // Background
  backgroundPrimary: '#f0f2f5',
  backgroundSecondary: '#ffffff',
  backgroundTertiary: '#f8fafc',

  // Text
  textPrimary: '#0f172a',
  textSecondary: '#475569',
  textTertiary: '#64748b',

  // Borders
  borderLight: '#e2e8f0',
  borderMedium: '#cbd5e1',
  borderDark: '#94a3b8',

  // Theme colors
  blue: '#3b82f6',
  blueLight: '#dbeafe',
  blueDark: '#1d4ed8',
  blueText: '#075985',

  purple: '#8b5cf6',
  purpleLight: '#f5f3ff',
  purpleDark: '#5b21b6',

  green: '#10b981',
  greenLight: '#d1fae5',

  red: '#dc2626',
  redLight: '#fecaca',

  amber: '#f59e0b',
  pink: '#ec4899',
  cyan: '#06b6d4',

  // Accents
  rose: '#f472b6',
  indigo: '#6366f1',
  emerald: '#34d399',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

export const typography = {
  headingLarge: {
    fontSize: 28,
    fontWeight: '800' as const,
    color: colors.textPrimary,
  },
  headingMedium: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: colors.textPrimary,
  },
  headingSmall: {
    fontSize: 17,
    fontWeight: '700' as const,
    color: colors.textPrimary,
  },
  label: {
    fontSize: 15,
    fontWeight: '600' as const,
    color: colors.textSecondary,
  },
  body: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  bodySmall: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  caption: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 19,
  },
};

export const shadows = {
  small: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  large: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 5,
  },
};

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 18,
  full: 999,
};

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
  },
  card: {
    backgroundColor: colors.backgroundSecondary,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    ...shadows.medium,
  },
  playgroundCard: {
    backgroundColor: colors.backgroundTertiary,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  scrollContent: {
    padding: spacing.lg,
    paddingBottom: spacing.xxxl,
  },
});
