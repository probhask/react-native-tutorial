import { StyleSheet, Text, View } from 'react-native';

const TabScreen1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>🏠</Text>
        <Text style={styles.title}>First Tab</Text>
        <Text style={styles.description}>
          Tab navigation allows users to quickly switch between different
          screens. Each tab preserves its own navigation state.
        </Text>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            💡 Try switching to the second tab using the bottom navigation bar
          </Text>
        </View>
        <View style={styles.featureList}>
          <Text style={styles.featureItem}>✓ Persistent state per tab</Text>
          <Text style={styles.featureItem}>✓ Easy navigation between tabs</Text>
          <Text style={styles.featureItem}>✓ Great for main app sections</Text>
        </View>
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
    backgroundColor: '#dcfce7',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  infoText: {
    fontSize: 14,
    color: '#166534',
    textAlign: 'center',
  },
  featureList: {
    alignItems: 'flex-start',
  },
  featureItem: {
    fontSize: 16,
    color: '#475569',
    marginBottom: 8,
  },
});

export default TabScreen1;
