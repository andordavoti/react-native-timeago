import React from 'react';
import { StyleSheet, View } from 'react-native';
import RNTimeago from 'rn-timeago';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <RNTimeago
        style={styles.text}
        dateTo={new Date()}
        dateFrom={new Date()}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'purple',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
