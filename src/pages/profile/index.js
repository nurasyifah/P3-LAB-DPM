import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import HeaderProfile from '../../components/headerProfile';
import NavBarProfile from '../../components/navBarProfile';

// Impor gambar dari folder assets\images
import sneakersImage from '../../assets/images/sneakers.jpg';
import backpackImage from '../../assets/images/backpack.jpg';
import smartwatchImage from '../../assets/images/smartwatch.jpg';


const ProfilePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulasi data produk
    const fetchProducts = () => {
      setProducts([
        { id: '1', name: 'Sneakers', price: 'Rp1.650.000', image: sneakersImage },
        { id: '2', name: 'Backpack', price: 'Rp649.000', image: backpackImage },
        { id: '3', name: 'Smartwatch', price: 'Rp2.785.000', image: smartwatchImage },
      ]);
    };

    fetchProducts();
  }, []);

  return (
    <View style={styles.container}>
      <HeaderProfile />
      <Text style={styles.heading}>Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.productList}
      />
      <NavBarProfile />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 22,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  productList: {
    paddingHorizontal: 10,
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  productPrice: {
    fontSize: 16,
    color: '#555',
    marginVertical: 5,
    flexWrap: 'wrap', 
    textAlign: 'center',
  },
  buyButton: {
    backgroundColor: '#87ceeb',
    padding: 10,
    borderRadius: 5,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ProfilePage;