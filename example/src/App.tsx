import React from 'react';
import { StyleSheet, View } from 'react-native';
import TimeAgo from '@andordavoti/react-native-timeago';

const App: React.FC = () => (
  <View style={styles.container}>
    <TimeAgo style={styles.text} dateTo={new Date(1536484369695)} />
    <TimeAgo
      style={styles.text}
      dateFrom={new Date(2007, 0, 27)}
      dateTo={new Date(2020, 0, 27)}
    />
    <TimeAgo
      hideAgo
      style={styles.text}
      dateFrom={new Date(2007, 0, 27)}
      dateTo={new Date(2020, 0, 27)}
    />
    <TimeAgo updateInterval={60000} style={styles.text} dateTo={new Date()} />
  </View>
);

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
