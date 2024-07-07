import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

export interface JournalEditScreenProps {
  route: {
    params: {
      itemId: number; // Assuming itemId is passed as a parameter
    };
  };
}

const JournalEditScreen: React.FC<JournalEditScreenProps> = ({ route }) => {
  const { itemId } = route.params;

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  // Mock journal entry details based on itemId
  const journalEntry = {
    id: itemId,
    title: 'Entry 1',
    content: 'Lorem ipsum dolor sit amet...',
    category: 'Personal',
    date: '2024-07-01',
  };

  useEffect(() => {
    // Populate state with existing data when component mounts
    setTitle(journalEntry.title);
    setContent(journalEntry.content);
    setCategory(journalEntry.category);
  }, [journalEntry]);

  const handleUpdate = () => {
    // Implement logic to update the journal entry
    console.log('Updating journal entry:', { id: itemId, title, content, category });
    // Navigate back to journal list or perform other actions
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Journal Entry</Text>
      <Input placeholder="Title" value={title} onChangeText={setTitle} />
      <Input placeholder="Content" value={content} onChangeText={setContent} multiline />
      <Input placeholder="Category" value={category} onChangeText={setCategory} />
      <Button title="Update" onPress={handleUpdate} />
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
    marginBottom: 16,
  },
});

export default JournalEditScreen;
