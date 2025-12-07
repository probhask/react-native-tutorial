import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Button, StyleSheet, Text, View } from 'react-native';
import { DrawerParamList } from './DrawerNavigationDemo';
import React from 'react';

type DrawerScreen2Props = {
  navigation: DrawerNavigationProp<DrawerParamList, 'DrawerScreen2'>;
};

const DrawerScreen2: React.FC<DrawerScreen2Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>🎯</Text>
        <Text style={styles.title}>Second Drawer Screen</Text>
        <Text style={styles.description}>
          Drawer navigation is great for organizing multiple screens without
          cluttering the UI with too many tabs.
        </Text>
        <View style={styles.featureBox}>
          <Text style={styles.featureTitle}>Common Use Cases:</Text>
          <Text style={styles.featureItem}>• Settings and preferences</Text>
          <Text style={styles.featureItem}>• User profile sections</Text>
          <Text style={styles.featureItem}>
            • Navigation to different modules
          </Text>
          <Text style={styles.featureItem}>• Help and support pages</Text>
        </View>
        <Button
          title="Open Drawer Menu"
          onPress={() => navigation.openDrawer()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  emoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
  },
  featureBox: {
    backgroundColor: '#fee2e2',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 24,
    width: '100%',
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#991b1b',
    marginBottom: 12,
  },
  featureItem: {
    fontSize: 14,
    color: '#7f1d1d',
    marginBottom: 6,
    lineHeight: 20,
  },
});

export default DrawerScreen2;
