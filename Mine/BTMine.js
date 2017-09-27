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
//https://medium.com/the-many/adding-login-and-authentication-sections-to-your-react-or-react-native-app-7767fd251bd1
//fblogin
//https://invertase.io/react-native-firebase/#/modules/authentication?id=auth
/*import external component*/
import Register from './Register';
import MyPage from './MinePage';
export default class Mine extends Component{
  constructor(props) {
    super(props);
    this.state={
      email:'',
      password:'',
      user: null
    }
    this._login = this._login.bind(this);
    this._fbAuth=this._fbAuth.bind(this);

  }
  _ResetPassword(){
    firebase.auth().sendPasswordResetEmail(this.state.email)
        .then(function() {
          // Password reset email sent.
          alert('Email Sent, Please Check you mailbox');
        })
        .catch(function(error) {
          var errorMessage = error.message;
          ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
        });
  }
  componentDidMount() {
    this._setupGoogleSignin();

  }
  //email login
  async _login(){
    try{
    await firebaseRef.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(function(user) {
          //Login success
          ToastAndroid.show('Logined', ToastAndroid.SHORT);

      }).catch(function(error){
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/user-not-found') {
            ToastAndroid.show('Email does not registered', ToastAndroid.SHORT);
        }
        if (errorCode === 'auth/invalid-email') {
            ToastAndroid.show('Please enter a valid email', ToastAndroid.SHORT);
        }
        else {
          ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
        }
        console.log(error);
      });
      const user = await firebaseRef.auth().currentUser;
        console.log(user);
        this.setState({user});
      }
      catch(err) {
          console.log("error", err.code, err.message);
        }
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
//google signout
  _signOut() {
    if(GoogleSignin.currentUser().user!=null){
      GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
        firebase.auth().signOut().then(function() {
        // Sign-out successful.
        ToastAndroid.show('Sign-out successful', ToastAndroid.SHORT);
        }, function(error) {
        // An error happened.
        });
      })
      .done();

    }else if (firebase.auth().currentUser!=null){
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        ToastAndroid.show('Sign-out successful', ToastAndroid.SHORT);
        }, function(error) {
        // An error happened.
        });

    }
    this.setState({user: null});


  }
//google login
  _signIn() {
    GoogleSignin.signIn().then((user) => {
      credential = firebase.auth.GoogleAuthProvider.credential(user);
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
    //facebook login
  async _fbAuth() {
    try{
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

          const user =  await AccessToken.getCurrentAccessToken().accessToken;
          console.log(user);
          this.setState({user: user});

    }
    catch(err) {
        console.log("error", err.code, err.message);
      }



  }
  //Goto Register page
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
                      onChangeText={(text) => this.setState({password: text})}/>
                </View>
                <TouchableOpacity onPress={() => {this._ResetPassword(); }}>
                 <View>
                     <Text>Forgot Password?</Text>
                 </View>

               </TouchableOpacity>
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
     if (this.state.status) {
        return (
          <View style={styles.container}>
            <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>Welcome {this.state.email}</Text>
            <Text>Your password is: {this.state.password}</Text>
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
        backgroundColor:'#C0CCD9',
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
