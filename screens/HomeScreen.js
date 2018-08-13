import React from 'react';
import { StyleSheet, Text, View,TouchableHighlight,Image,Button,TouchableOpacity} from 'react-native';
import { Header, Icon } from 'react-native-elements';

class HomeScreen extends React.Component {
    _onPressButton=()=>{
        this.props.navigation.navigate("Bluetooth")}

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>CMIYC</Text>
                <View style = {styles.container} >
                    <TouchableOpacity
                        onPress={()=>{this.props.navigation.navigate("Bluetooth")}} style={styles.button}>
                        <Icon
                            name="search"
                            color='#000'
                            underlayColor={'#64b5f6'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._onPressButton} style={styles.button}>
                        <Icon
                            name="settings"
                            color='#000'
                            underlayColor={'#64b5f6'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._onPressButton} style={styles.button}>
                        <Icon
                            name="users"
                            color='#000'
                            type="entypo"
                            underlayColor={'#64b5f6'}
                        />
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

export default HomeScreen;

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
