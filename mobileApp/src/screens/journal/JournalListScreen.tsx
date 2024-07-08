import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Button from '../../components/common/Button';

// Define the type for your navigation parameters
type RootStackParamList = {
  JournalDetail: { itemId: number };
  AddJournal: undefined;
};

// Define the type for your data items
interface JournalEntry {
  id: number;
  title: string;
  category: string;
  date: string;
}

const JournalListScreen: React.FC = () => {
  // Use the defined type for navigation
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const navigateToDetail = (itemId: number) => {
    navigation.navigate('JournalDetail', { itemId });
  };

  const navigateToAdd = () => {
    navigation.navigate('AddJournal');
  };

  const data: JournalEntry[] = [
    { id: 1, title: 'Entry 1', category: 'Personal', date: '2024-07-01' },
    { id: 2, title: 'Entry 2', category: 'Work', date: '2024-07-02' },
  ];

  const renderItem = ({ item }: { item: JournalEntry }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.category}>{item.category}</Text>
      <Button title="View Details" onPress={() => navigateToDetail(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item: JournalEntry) => item.id.toString()} // Explicitly define item type
        ListEmptyComponent={<Text>No journal entries yet.</Text>}
      />
      <Button title="Add Journal Entry" onPress={navigateToAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  category: {
    fontStyle: 'italic',
  },
});

export default JournalListScreen;
