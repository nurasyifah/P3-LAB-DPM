import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NavBarProfile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.navItem}>Home</Text>
      <Text style={styles.navItem}>Profile</Text>
      <Text style={styles.navItem}>Notification</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#87ceeb',
    padding: 10,
  },
  navItem: {
    fontSize: 16,
    fontFamily: 'Lucida Calligraphy',
    fontWeight: 'bold',
    color: '#000',
  },
});

export default NavBarProfile;