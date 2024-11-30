import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderProfile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ShopEasy By @nurasyifah</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#87ceeb', // Warna tema cipa pilih skyblue
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Lucida Calligraphy',
    fontWeight: 'bold',
    color: '#000',
  },
});

export default HeaderProfile;