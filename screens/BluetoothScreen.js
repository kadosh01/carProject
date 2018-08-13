import React from 'react';
import { StyleSheet, Text, View,TouchableHighlight,Image,Button,TouchableOpacity} from 'react-native';


class BluetoothScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Button title = "Go the Home screen"
                onPress={()=>this.props.navigation.navigate("Home")}/>
                <Text style={styles.title}>Bluetooth</Text>
            </View>

        );
    }
}

export default BluetoothScreen;

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
