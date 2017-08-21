import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Platform,
  TouchableOpacity,
  Navigator,
  Dimensions
} from 'react-native';
var width = Dimensions.get('window').width;
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
export default class MinePage extends Component{
  render() {
      return (
      <View style={styles.container}>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>Welcome {this.state.user.name}</Text>
        <Text>Your email is: {this.state.user.email}</Text>

        <TouchableOpacity onPress={() => {this._signOut(); }}>
          <View style={{marginTop: 50}}>
            <Text>Log out</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        //set to full screen
        flex: 1,
        backgroundColor:'rgba(250,227,98,1)',
    },LoginBox:{
      paddingTop:70,
    },
    textInputViewStyle: {
        width: width - 90,
        height: 45,
        borderRadius: 10,
        borderColor: 'rgba(114,83,52,1)',
        borderWidth: 2,
        marginTop:10,
        alignSelf: 'flex-start',
    },
    //txt box style
    textInputStyle: {
        width: width - 30,
        height: 35,
        backgroundColor: '#00000000',
        alignSelf: 'center',
        marginTop: Platform.OS === 'ios' ? 4 : 8,
    },

    //login button style
    textLoginViewStyle: {
        width: 200,
        height: 45,
        backgroundColor: 'rgba(69,137,148,.9)',
        borderRadius: 10,
        marginTop: 20,
        marginRight:60,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textgoogleLoginViewStyle: {
        width: 190,
        height: 45,
        borderRadius: 10,
        marginTop: 20,
        marginRight:60,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textfbLoginViewStyle: {
        width: 250,
        height: 45,
        borderRadius: 10,
        marginTop: 25,
        marginRight:60,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    //"Login" style
    textLoginStyle: {
        fontSize: 18,
        color: 'white',
    },itemStyle:{
      position:'absolute',
      left:10,
      height:350,
      margin:10,
      marginRight:20,
      width:width-30,
      resizeMode: 'stretch'
    }
});
