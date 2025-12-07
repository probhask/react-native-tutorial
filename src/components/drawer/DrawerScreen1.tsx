import { DrawerNavigationProp } from '@react-navigation/drawer';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { DrawerParamList } from './DrawerNavigationDemo';

type DrawerScreen1Props = {
  navigation: DrawerNavigationProp<DrawerParamList, 'DrawerScreen1'>;
};

const DrawerScreen1: React.FC<DrawerScreen1Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>☰</Text>
        <Text style={styles.title}>Drawer Navigation</Text>
        <Text style={styles.description}>
          Drawer navigation provides a side menu that slides in from the edge.
          Perfect for apps with many sections or settings.
        </Text>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            💡 Swipe from the left edge or tap the button below to open the
            drawer
          </Text>
        </View>
        <Button
          title="Open Drawer Menu"
          onPress={() => navigation.openDrawer()}
        />
        <Text style={styles.hint}>
          The hamburger icon in the header also opens the drawer
        </Text>
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
  infoBox: {
    backgroundColor: '#f3e8ff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  infoText: {
    fontSize: 14,
    color: '#6b21a8',
    textAlign: 'center',
  },
  hint: {
    fontSize: 14,
    color: '#94a3b8',
    fontStyle: 'italic',
    marginTop: 16,
    textAlign: 'center',
  },
});

export default DrawerScreen1;
