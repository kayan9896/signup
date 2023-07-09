import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Starting from './screens/starting';

export default function App() {
  return (
    <View style={{flex:1, justifyContent:'center',paddingTop:10}}>
      <Text style={{justifyContent:'space-evenly'}}>Sign up</Text>
      <Starting></Starting>
    </View>
    
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
