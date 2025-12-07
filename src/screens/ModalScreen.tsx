import React, { useState } from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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

const ModalScreen = () => {
  const [slideVisible, setSlideVisible] = useState(false);
  const [fadeVisible, setFadeVisible] = useState(false);

  return (
    <ScrollView
      style={commonStyles.container}
      contentContainerStyle={commonStyles.scrollContent}
    >
      <CategoryHeader
        title="Modal Component"
        subtitle="Overlay content above the main screen"
      />

      <InfoBox
        title="🪟 Modal Overview"
        items={[
          '• Full-screen overlay: Covers entire screen until dismissed',
          '• Animation types: slide, fade, none',
          '• Modal vs Sheet: Use Modal for dialogs, Sheet for bottom panels',
          '• Blocking: Prevents interaction with content below',
          '• Platform differences: iOS transparent by default, Android not',
        ]}
      />

      <WarningTip
        type="warning"
        text="On Android, use 'transparent' prop with custom background for styled modals."
      />

      <InteractivePlayground
        title="Slide Animation Modal"
        helper="Slides up from bottom"
      >
        <TouchableOpacity
          style={[styles.button, styles.slideButton]}
          onPress={() => setSlideVisible(true)}
        >
          <Text style={styles.buttonText}>Open Slide Modal</Text>
        </TouchableOpacity>
      </InteractivePlayground>

      <InteractivePlayground
        title="Fade Animation Modal"
        helper="Fades in smoothly"
      >
        <TouchableOpacity
          style={[styles.button, styles.fadeButton]}
          onPress={() => setFadeVisible(true)}
        >
          <Text style={styles.buttonText}>Open Fade Modal</Text>
        </TouchableOpacity>
      </InteractivePlayground>

      {/* Slide Modal */}
      <Modal
        visible={slideVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setSlideVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Slide Modal</Text>
            <Text style={styles.modalDescription}>
              This modal slides up from the bottom. Perfect for forms or action
              sheets.
            </Text>
            <TouchableOpacity
              style={[styles.button, styles.closeButton]}
              onPress={() => setSlideVisible(false)}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Fade Modal */}
      <Modal
        visible={fadeVisible}
        animationType="fade"
        transparent
        onRequestClose={() => setFadeVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Fade Modal</Text>
            <Text style={styles.modalDescription}>
              This modal fades in smoothly. Great for alerts and confirmations.
            </Text>
            <TouchableOpacity
              style={[styles.button, styles.closeButton]}
              onPress={() => setFadeVisible(false)}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  slideButton: {
    backgroundColor: colors.blue,
  },
  fadeButton: {
    backgroundColor: colors.purple,
  },
  closeButton: {
    backgroundColor: colors.amber,
    marginTop: spacing.md,
  },
  buttonText: {
    ...typography.label,
    color: colors.backgroundPrimary,
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },
  modalContent: {
    backgroundColor: colors.backgroundPrimary,
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    width: '100%',
    maxWidth: 400,
    ...shadows.large,
  },
  modalTitle: {
    ...typography.headingLarge,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  modalDescription: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default ModalScreen;
