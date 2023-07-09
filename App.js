import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Starting from './screens/starting';
import Confirm from './screens/confirm';

export default function App() {
  const m = "1@.com";
  const p = "1234567890";
  return (
    <View style={{flex:1, justifyContent:'center',paddingTop:10}}>
      <Text style={{justifyContent:'space-evenly'}}>Sign up</Text>
      <Starting></Starting>
      <Confirm mail={m} phone={p}></Confirm>
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
