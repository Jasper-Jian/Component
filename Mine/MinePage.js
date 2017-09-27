import React, { Component } from 'react';
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
  WebView,
  ToastAndroid
} from 'react-native';
import {LoginManager, LoginButton, AccessToken,FBAccessToken} from 'react-native-fbsdk';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import {firebaseRef} from '../services/firebase';
import firebase from 'firebase';
//get screen info
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

import {Actions} from "react-native-router-flux";

export default class MinePage extends Component{
//google signout
  _signOut() {
    GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
      firebase.auth().signOut().then(function() {
      // Sign-out successful.
      ToastAndroid.show('Sign-out successful', ToastAndroid.SHORT);
      }, function(error) {
      // An error happened.
      });
      this.setState({user: null});
    })
    .done();
  }
  render() {
      return (
        <View style={styles.container}>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>Welcome {this.state.user.name}</Text>
          <Text>Your email is: {this.state.user.email}</Text>
          <TouchableOpacity onPress={() => {this._signOut(); }}>
            <View style={styles.LogoutViewStyle}>
              <Text style={styles.textLoginStyle}>Log out</Text>
            </View>
          </TouchableOpacity>
          <WebView
            startInLoadingState={true}
            contentInset={{top:20,left:10,right:10}}
            scalesPageToFit ={false}
            source={{uri: 'https://docs.google.com/forms/d/1QypBHmk8ktWXmobJ1HTF3JyiduykRsMVmm96kqVT_O0/viewform?edit_requested=true'}}
          />
        </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        //set to full screen
        flex: 1,
        backgroundColor:'rgba(250,227,98,1)',
    },
    LoginBox:{
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
