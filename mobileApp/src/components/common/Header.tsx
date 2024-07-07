import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Journal App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#6200ee',
    padding: 15,
    alignItems: 'center',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 20,
  },
});

export default Header;
