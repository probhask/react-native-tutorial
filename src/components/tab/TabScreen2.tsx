import { StyleSheet, Text, View } from 'react-native';

const TabScreen2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>⚙️</Text>
        <Text style={styles.title}>Second Tab</Text>
        <Text style={styles.description}>
          Each tab maintains its own navigation stack independently. Users can
          navigate within a tab without affecting other tabs.
        </Text>
        <View style={styles.statCard}>
          <Text style={styles.cardTitle}>Tab State</Text>
          <Text style={styles.cardText}>
            This tab's state is preserved even when you switch tabs.
          </Text>
        </View>
        <Text style={styles.note}>
          📝 Bottom tabs are ideal for 3-5 main sections of your app
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
  statCard: {
    backgroundColor: '#fef3c7',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 16,
    width: '100%',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#92400e',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: '#78350f',
    lineHeight: 20,
  },
  note: {
    fontSize: 14,
    color: '#94a3b8',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default TabScreen2;
