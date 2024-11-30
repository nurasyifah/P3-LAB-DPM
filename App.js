import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProfilePage from './src/pages/profile';

const App = () => {
  return (
    <View style={styles.container}>
      <ProfilePage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;