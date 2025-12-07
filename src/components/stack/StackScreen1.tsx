import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StackParamList } from './StackNavigationDemo';
import { StackNavigationProp } from '@react-navigation/stack';

type StackScreen1NavigationProps = StackNavigationProp<
  StackParamList,
  'StackScreen1'
>;

const StackScreen1: React.FC = () => {
  const navigation = useNavigation<StackScreen1NavigationProps>();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>📚</Text>
        <Text style={styles.title}>Stack Navigation</Text>
        <Text style={styles.description}>
          Stack navigation works like a stack of cards. New screens are pushed
          on top, and you can pop back to previous screens.
        </Text>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            💡 Tap the button below to navigate to Screen 2 with a parameter
          </Text>
        </View>
        <Button
          title="Go to Screen 2"
          onPress={() =>
            navigation.navigate('StackScreen2', {
              itemId: 1,
            })
          }
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
  infoBox: {
    backgroundColor: '#dbeafe',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  infoText: {
    fontSize: 14,
    color: '#1e40af',
    textAlign: 'center',
  },
});

export default StackScreen1;
