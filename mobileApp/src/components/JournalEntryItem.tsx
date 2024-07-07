import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  entry: {
    id: number;
    title: string;
    content: string;
    category: string;
    date: string;
  };
}

const JournalEntryItem: React.FC<Props> = ({ entry }: Props) => { // Explicitly type entry as Props
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{entry.title}</Text>
      <Text style={styles.category}>{entry.category}</Text>
      <Text style={styles.date}>{entry.date}</Text>
      <Text style={styles.content}>{entry.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  category: {
    fontStyle: 'italic',
    marginBottom: 5,
  },
  date: {
    marginBottom: 5,
  },
  content: {
    lineHeight: 20,
  },
});

export default JournalEntryItem;
