import React, { useState, useEffect } from 'react';
import { View, Button, Image, StyleSheet, Alert, FlatList, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [imageUri, setImageUri] = useState(null);
  const [viewList, setViewList] = useState(false);
  const [editedImages, setEditedImages] = useState([]);

  // Chọn hình ảnh
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
  
    // Check cả 2 trường hợp
    if ((result.canceled === false || result.cancelled === false) && result.assets?.length > 0) {
      setImageUri(result.assets[0].uri);
      setViewList(false);
    }
  };
  
  

  // Chỉnh sửa hình ảnh (xoay 90 độ)
  const editImage = async () => {
    if (!imageUri) return;
    const edited = await ImageManipulator.manipulateAsync(
      imageUri,
      [{ rotate: 90 }],
      { compress: 1, format: ImageManipulator.SaveFormat.PNG }
    );
    setImageUri(edited.uri);
  };

  // Lưu hình ảnh vào AsyncStorage
  const saveImage = async () => {
    if (!imageUri) return;
    try {
      const existing = await AsyncStorage.getItem('editedImages');
      const list = existing ? JSON.parse(existing) : [];
      list.push(imageUri);
      await AsyncStorage.setItem('editedImages', JSON.stringify(list));
      Alert.alert('Saved', 'Hình ảnh đã được lưu!');
    } catch (error) {
      console.log(error);
    }
  };

  // Load danh sách hình ảnh đã chỉnh sửa
  const loadImages = async () => {
    try {
      const data = await AsyncStorage.getItem('editedImages');
      const list = data ? JSON.parse(data) : [];
      // loại bỏ undefined / null
      const filtered = list.filter(uri => uri);
      setEditedImages(filtered);
    } catch (error) {
      console.log(error);
      setEditedImages([]);
    }
  };
  

  // Hiển thị danh sách hình ảnh
  const showList = async () => {
    await loadImages();
    const all = await AsyncStorage.getItem('editedImages');
    console.log('Danh sách hình ảnh đã lưu:', all);
    setViewList(true);
  };
  

  const renderItem = ({ item }) => (
    <Image source={{ uri: item }} style={styles.listImage} />
  );

  return (
    <SafeAreaView style={styles.container}>
      {!viewList ? (
        <View style={styles.inner}>
          <Button title="Chọn hình ảnh" onPress={pickImage} />
          {imageUri && (
            <>
              <Image source={{ uri: imageUri }} style={styles.image} />
              <Button title="Chỉnh sửa hình ảnh" onPress={editImage} />
              <Button title="Lưu hình ảnh" onPress={saveImage} />
            </>
          )}
          <Button title="Xem danh sách hình ảnh đã chỉnh sửa" onPress={showList} />
        </View>
      ) : (
        <View style={styles.inner}>
          <Text style={styles.title}>Danh sách hình ảnh đã chỉnh sửa</Text>
          {editedImages.length === 0 ? (
            <Text>Chưa có hình ảnh nào.</Text>
          ) : (
            <FlatList
              data={editedImages}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
            />
          )}
          <TouchableOpacity style={styles.backButton} onPress={() => setViewList(false)}>
            <Text style={styles.backText}>Quay lại</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  inner: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: 300, height: 300, marginVertical: 20, borderRadius: 10 },
  listImage: { width: '100%', height: 200, marginBottom: 10, borderRadius: 10 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  backButton: { marginTop: 20, padding: 10, backgroundColor: '#007bff', borderRadius: 5 },
  backText: { color: '#fff', fontWeight: 'bold' },
});
