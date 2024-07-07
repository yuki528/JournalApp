import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

const SettingsScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleUpdate = () => {
    // Implement logic to update username and/or password
    console.log('Updating settings:', { username, password, newPassword });
    // Display success message or handle errors
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Input placeholder="Username" value={username} onChangeText={setUsername} />
      <Input placeholder="Current Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Input placeholder="New Password" value={newPassword} onChangeText={setNewPassword} secureTextEntry />
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

export default SettingsScreen;
