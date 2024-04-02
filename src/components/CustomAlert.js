import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomAlert = ({ message }) => {
  const [isVisible, setIsVisible] = useState(!!message); // Sử dụng !! để chuyển đổi message thành boolean

  useEffect(() => {
    setIsVisible(!!message); // Cập nhật isVisible mỗi khi message thay đổi
  }, [message]);

  const hideAlert = () => {
    setIsVisible(false);
  };

  return (
    <View style={[styles.container, isVisible ? styles.visible : styles.hidden]}>
      <Text style={styles.message}>{message}</Text>
      <TouchableOpacity onPress={hideAlert}>
        <Text style={styles.closeButton}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  visible: {
    display: 'flex',
  },
  hidden: {
    display: 'none',
  },
  message: {
    flex: 1,
    marginRight: 10,
  },
  closeButton: {
    color: 'blue',
  },
});

export default CustomAlert;
