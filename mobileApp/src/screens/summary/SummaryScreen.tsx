import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Button from '../../components/common/Button';

const SummaryScreen: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<string>('daily'); // Default period

  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period);
    // Implement logic to fetch summary data for selected period
  };

  const renderSummary = () => {
    // Placeholder logic to display summary based on selectedPeriod
    return (
      <View>
        <Text>Summary for {selectedPeriod}</Text>
        <Text>Number of entries: 5</Text>
        <Text>Average word count: 150</Text>
        {/* Add more summary data as needed */}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary</Text>
      <Picker
        selectedValue={selectedPeriod}
        onValueChange={(itemValue: string) => handlePeriodChange(itemValue)}>
        <Picker.Item label="Daily" value="daily" />
        <Picker.Item label="Weekly" value="weekly" />
        <Picker.Item label="Monthly" value="monthly" />
      </Picker>
      {renderSummary()}
      <Button title="View Details" onPress={() => {}} />
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

export default SummaryScreen;
