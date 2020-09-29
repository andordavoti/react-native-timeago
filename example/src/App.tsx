import React from 'react';
import { StyleSheet, View } from 'react-native';
import RNTimeago from 'rn-timeago';

const App: React.FC = () => {
  console.log(new Date(1536484369695));
  return (
    <View style={styles.container}>
      <RNTimeago style={styles.text} dateTo={new Date(1536484369695)} />
      <RNTimeago
        style={styles.text}
        dateFrom={new Date(2007, 0, 27)}
        dateTo={new Date(2020, 0, 27)}
      />
      <RNTimeago
        hideAgo
        style={styles.text}
        dateFrom={new Date(2007, 0, 27)}
        dateTo={new Date(2020, 0, 27)}
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
