import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title]}>Elija</Text>
      <Text style={[styles.title]}>Elija</Text>
      <Text style={[styles.title]}>Elija</Text>
      <Text style={[styles.title]}>Elija</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    backgroundColor: '#acacac',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'red',
    backgroundColor: 'white',
  },

});

export default App;
