import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const loader = (isLoading) => {
  return (
    isLoading ?
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#aaa" />
      </View> : null
  );
};

export default loader;

const styles = StyleSheet.create({
  loader: {
    marginVertical: 5,
    alignItems: "center",
  },
})