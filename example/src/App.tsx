import React from 'react';
import { StyleSheet, View } from 'react-native';
import RNTimeago from 'rn-timeago';

export default function App() {
  return (
    <View style={styles.container}>
      <RNTimeago />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
