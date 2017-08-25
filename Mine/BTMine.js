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
//https://www.youtube.com/watch?v=7lEU1UEw3YI&t=765s storing data in the database
// 改setstate里面的user 值
//
// or 把user 值 代入 到 其他data里面在login 那里
//
// 然后在logout 的时候把其他的state 清 0
//
// 在login的时候把user值设置一下不为空就好了 然后整合一起

/*import external component*/
import Register from './Register';
import Admin from './Admin';

export default class Mine extends Component{
  constructor(props) {
    super(props);
    this.state={
      email:'',
      password:'',
      status:'',
      user: null
    }
    this._login = this._login.bind(this);

  }
  _login(){
    firebaseRef.auth().signInWithEmailAndPassword(this.state.email,this.state.password).catch(function(error){
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        ToastAndroid.show('Wrong password', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
      }
      console.log(error);
    })
  }

  componentDidMount() {
    this._setupGoogleSignin();
  }

  async _setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        webClientId: '624986151461-ghge0s70j54dism65b9v7k2gfpjq411i.apps.googleusercontent.com',
        offlineAccess: false
      });

    const user = await GoogleSignin.currentUserAsync();
      console.log(user);
      this.setState({user});
    }
    catch(err) {
      console.log("Play services error", err.code, err.message);
    }
  }

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

  _signIn() {
    GoogleSignin.signIn().then((user) => {

      const credential = firebase.auth.GoogleAuthProvider.credential(user);
      firebase.auth().signInWithCredential(credential).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      });
        this.setState({user: user});
      })
      .catch((err) => {
        console.log(err);
      })
      .done();
    }
  _fbAuth() {
      LoginManager.logInWithReadPermissions(['public_profile','email']).then(function (result) {
          if (result.isCancelled) {
              ToastAndroid.show('Login cancelled', ToastAndroid.SHORT);
          } else {
            AccessToken.getCurrentAccessToken().then((accessTokenData) => {
              const credential = firebase.auth.FacebookAuthProvider.credential(accessTokenData.accessToken);
              firebase.auth().signInWithCredential(credential).then((result)=>{
                //promise was successful
              },(error)=>{
                //promis was rejected
                console.log(console.error());
              })
            },(error =>{
              console.log('Some erroe occured: '+error);
            }))
          }
      },
          function (error) {
              console.log('An error occured:' + error);
          });
  }
  //Goto Register
  _ToRegister() {
      this.props.navigator.push(
          {
              component: Register,//Navigate page
              title: 'Register with email'
          }
      );
  }

    render() {
      if (!this.state.user) {
        return (
            <View style={styles.container}>
              <Image source={{uri: 'https://basement-theatre.squarespace.com/assets/images/logo-expanded.png'}} style={styles.itemStyle}>
                {/*use View to make username txt box*/}
                <View style={styles.LoginBox}>
                <View style={styles.textInputViewStyle}>
                    <TextInput
                      autoFocus={true}
                        style={styles.textInputStyle}
                        //placeholder
                        placeholder='Please Enter Your Email'
                        textAlign='center'
                        underlineColorAndroid={'transparent'}
                        onChangeText={(text) => this.setState({email: text})}/>
                </View>

                {/*password input box*/}
                <View style={styles.textInputViewStyle}>
                    <TextInput
                      ref="inputLoginPwd"
                      clearTextOnFocus={true}
                      clearButtonMode="while-editing"
                        style={styles.textInputStyle}
                        placeholder='Please Enter Your Password'
                        textAlign='center'
                        //invisibility of password
                        secureTextEntry={true}
                      onChangeText={(text) => this.setState({email: text})}/>
                </View>

                {/*clickable button*/}
                <TouchableOpacity onPress={this._login}>
                    {/*login button*/}
                    <View style={styles.textLoginViewStyle}>
                        <Text style={styles.textLoginStyle}>Login</Text>
                    </View>
                </TouchableOpacity>

                {/*register button*/}
                <TouchableOpacity onPress={() => { this._ToRegister()}}>
                   <View style={styles.textLoginViewStyle}>
                        <Text style={styles.textLoginStyle}>Register</Text>
                    </View>
                </TouchableOpacity>

                {/*Facebook Login button*/}
    <TouchableOpacity style={styles.textfbLoginViewStyle} onPress={() => {this._fbAuth()}}>
      <LoginButton
        publishPermissions={["publish_actions"]}
        onLoginFinished={
          (error, result) => {
            if (error) {
              alert("login has error: " + result.error);
            } else if (result.isCancelled) {
              alert("login is cancelled.");
            } else {
              AccessToken.getCurrentAccessToken().then((data) => {
            let accessToken = data.accessToken
            alert(accessToken.toString())
            const responseInfoCallback = (error, result) => {
              if (error) {
                console.log(error)
                alert('Error fetching data: ' + error.toString());
              } else {
                console.log(result)
                alert('Success fetching data: ' + result.toString());
              }
            }

            const infoRequest = new GraphRequest(
              '/me',
              {
                accessToken: accessToken,
                parameters: {
                  fields: {
                    string: 'email,name,first_name,middle_name,last_name'
                  }
                }
              },
              responseInfoCallback
            );

            // Start the graph request.
            new GraphRequestManager().addRequest(infoRequest).start();
            })
          }
        }
      }
        onLogoutFinished={() => ToastAndroid.show('Logout successful', ToastAndroid.SHORT)}/>

        </TouchableOpacity>
         <GoogleSigninButton style={styles.textgoogleLoginViewStyle} color={GoogleSigninButton.Color.Light}  onPress={() => { this._signIn(); }}/>
         </View>

         </Image>

    </View>

        );
    }
    if (this.state.user) {
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
    LogoutViewStyle:{
      width: 150,
      height: 28,
      backgroundColor: 'rgba(255,0,0,.9)',
      borderRadius: 10,
      marginTop: 15,
      marginBottom: 5,
      alignSelf: 'flex-end',
      justifyContent: 'flex-end',
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
