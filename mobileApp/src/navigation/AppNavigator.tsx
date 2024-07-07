import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../context/AuthContext';

// Screens
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import JournalListScreen from '../screens/journal/JournalListScreen';
import JournalDetailScreen from '../screens/journal/JournalDetailScreen';
import AddJournalScreen from '../screens/journal/AddJournalScreen';
import SummaryScreen from '../screens/summary/SummaryScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isAuthenticated ? "JournalList" : "Login"}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        {isAuthenticated && (
          <>
            <Stack.Screen name="JournalList" component={JournalListScreen} />
            <Stack.Screen name="JournalDetail" component={JournalDetailScreen} />
            <Stack.Screen name="AddJournal" component={AddJournalScreen} />
            <Stack.Screen name="Summary" component={SummaryScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
