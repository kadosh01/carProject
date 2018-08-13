import React from 'react';
import { StyleSheet, Text, View,TouchableHighlight,Image,Button,TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Header, Icon } from 'react-native-elements';
import HomeScreen from './screens/HomeScreen'
import BluetoothScreen from './screens/BluetoothScreen'

export  default class App extends React.Component {

  render() {
    return (
        <AppStackNavigator/>
    );
  }
}

const  AppStackNavigator= createStackNavigator({
    Home: HomeScreen,
    Bluetooth : BluetoothScreen

});
const styles = StyleSheet.create({
    title:{
        fontSize:60,
        marginTop:20,

    },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    height:80,
    backgroundColor:'#4BBBEC',
      marginLeft:10,
      width:80,
      //alignSelf:'stretch',
      justifyContent:'center',
      borderRadius:100,
      marginTop:40,
  },
    buttonText:{
  fontSize:18,
  color:'white',
  alignSelf:'center',
  },
});
