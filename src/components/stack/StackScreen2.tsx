import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StackParamList } from './StackNavigationDemo';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

type StackScreen2NavigationProps = StackNavigationProp<
  StackParamList,
  'StackScreen2'
>;

type StackScreen2RouteProps = RouteProp<StackParamList, 'StackScreen2'>;

const StackScreen2: React.FC = () => {
  const navigation = useNavigation<StackScreen2NavigationProps>();
  const route = useRoute<StackScreen2RouteProps>();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>✨</Text>
        <Text style={styles.title}>Second Screen</Text>
        <Text style={styles.description}>
          This screen was pushed onto the navigation stack. Notice how the
          header automatically includes a back button.
        </Text>
        <View style={styles.paramBox}>
          <Text style={styles.paramLabel}>Received Parameter:</Text>
          <Text style={styles.paramValue}>Item ID: {route.params.itemId}</Text>
        </View>
        <Text style={styles.hint}>
          You can pass data between screens using route params
        </Text>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
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
  paramBox: {
    backgroundColor: '#e0e7ff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 16,
    width: '100%',
    alignItems: 'center',
  },
  paramLabel: {
    fontSize: 14,
    color: '#4338ca',
    fontWeight: '600',
    marginBottom: 4,
  },
  paramValue: {
    fontSize: 20,
    color: '#312e81',
    fontWeight: 'bold',
  },
  hint: {
    fontSize: 14,
    color: '#94a3b8',
    fontStyle: 'italic',
    marginBottom: 24,
    textAlign: 'center',
  },
});

export default StackScreen2;
