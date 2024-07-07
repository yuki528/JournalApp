import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

type JournalDetailRouteProp = {
  JournalDetail: {
    itemId: number;
  };
};

const JournalDetailScreen: React.FC = () => {
  const route = useRoute<RouteProp<JournalDetailRouteProp, 'JournalDetail'>>();
  const { itemId } = route.params;

  // Fetch journal entry details based on itemId
  const journalEntry = { id: itemId, title: 'Entry 1', content: 'Lorem ipsum dolor sit amet...', category: 'Personal', date: '2024-07-01' };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{journalEntry.title}</Text>
      <Text style={styles.category}>{journalEntry.category}</Text>
      <Text style={styles.content}>{journalEntry.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  category: {
    fontStyle: 'italic',
    marginBottom: 16,
  },
  content: {
    lineHeight: 22,
  },
});

export default JournalDetailScreen;
