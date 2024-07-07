import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

const AddJournalScreen: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  const handleSave = () => {
    // Implement logic to save the journal entry
    console.log('Saving journal entry:', { title, content, category });
    // Navigate back to journal list or perform other actions
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Journal Entry</Text>
      <Input placeholder="Title" value={title} onChangeText={setTitle} />
      <Input placeholder="Content" value={content} onChangeText={setContent} multiline />
      <Input placeholder="Category" value={category} onChangeText={setCategory} />
      <Button title="Save" onPress={handleSave} />
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

export default AddJournalScreen;
