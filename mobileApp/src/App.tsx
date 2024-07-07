import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './context/AuthContext';
import AddJournalScreen from './screens/journal/AddJournalScreen';
import JournalDetailScreen from './screens/journal/JournalDetailScreen';
import JournalEditScreen, { JournalEditScreenProps } from './screens/journal/JournalEditScreen';
import JournalListScreen from './screens/journal/JournalListScreen';
import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';
import SettingsScreen from './screens/settings/SettingsScreen';
import SummaryScreen from './screens/summary/SummaryScreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="JournalList" component={JournalListScreen} />
          <Stack.Screen name="JournalDetail" component={JournalDetailScreen} />
          <Stack.Screen name="JournalEdit" component={JournalEditScreen} />
          <Stack.Screen name="AddJournal" component={AddJournalScreen} />
          <Stack.Screen name="Summary" component={SummaryScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
