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
//get screen width and height
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
import Register from './Register';
import FillingForm from './FillingForm'
import FillingEventForm from './FillingEventForm'
import FillingBoxOfficeForm from './FillingBoxOfficeForm'
export default class Mine extends Component{
  constructor(props) {
    super(props);
    this.state={
      email:'',
      password:'',
      user: null,
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
  _SubmitPage(){
        const { navigator } = this.props;
        if(navigator) {
          navigator.push({
            component: FillingForm,
            });
        }
  }
  _SubmitPage2(){
    const { navigator } = this.props;
    if(navigator) {
      navigator.push({
        component: FillingEventForm,
        });
    }
  }
  _SubmitBOFPage(){
        const { navigator } = this.props;
        if(navigator) {
          navigator.push({
            component: FillingBoxOfficeForm,
            });
        }
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
//Google Signin Setup
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
      LoginManager.logOut();
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
      await      LoginManager.logInWithReadPermissions(['public_profile','email']).then(function (user) {
          if (user.isCancelled) {
              ToastAndroid.show('Login cancelled', ToastAndroid.SHORT);
          } else {
            AccessToken.getCurrentAccessToken().then((accessTokenData) => {
              const credential = firebase.auth.FacebookAuthProvider.credential(accessTokenData.accessToken);
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
                console.log(user);
                // ToastAndroid.show('Logined', ToastAndroid.SHORT);
              })
              .catch((err) => {
                console.log(err);
              })
              .done();
          }
      });
      ;
    }

    catch(err) {
        console.log("error", err.code, err.message);
      }
      const user = await firebaseRef.auth().currentUser;
      this.setState({user})
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
              <Image source={require('../images/Basement Theatre Logo - Black.jpg')} style={styles.itemStyle}>

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
                {/*Reset the password via Email*/}
                <TouchableOpacity onPress={() => {this._ResetPassword(); }}>
                 <View>
                     <Text style={{fontFamily:'GT-Haptik-Regular',
                                    alignSelf: 'center',
                                    marginLeft:-30,
                                    marginTop:5}}>
                      Forgot Password?</Text>
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
        onLoginFinished={() =>{this._login();}}
        />
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
           <Text style={{fontSize: 24, fontFamily:'GT-Haptik-Bold', marginBottom: 20,alignSelf:'center', marginTop:20}}>Welcome {this.state.user.name}</Text>
           <Text style={{fontFamily:'GT-Haptik-Regular',alignSelf:'center'}}>Your email is: {this.state.user.email}</Text>

           <TouchableOpacity onPress={() =>{this._SubmitPage();}}>
               {/*Submission Form*/}
               <View style={[styles.textLoginViewStyle,{marginRight:0}]}>
                   <Text style={styles.textLoginStyle}>Submission Form</Text>
               </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={() =>{this._SubmitPage2();}}>
               {/*Submission Form*/}
               <View style={[styles.textLoginViewStyle,{marginRight:0}]}>
                   <Text style={styles.textLoginStyle}>Submission Form v2.0</Text>
               </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={() =>{this._SubmitBOFPage();}}>
               {/*Box Office Form*/}
               <View style={[styles.textLoginViewStyle,{marginRight:0}]}>
                   <Text style={styles.textLoginStyle}>Box Office Form</Text>
               </View>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => {this._signOut(); }}>
             <View style={[styles.LogoutViewStyle,{marginRight:0}]}>
               <Text style={styles.textLoginStyle}>Log out</Text>
             </View>
           </TouchableOpacity>
         </View>
       );
     }
  }
}

const styles = StyleSheet.create({
    container: {
        //set to full screen
        flex: 1,
        backgroundColor:'white',
    },LoginBox:{
      paddingTop:70,
    },
    textInputViewStyle: {
        width: width - 90,
        height: 45,
        borderColor: 'black',
        borderWidth: 2,
        marginTop:10,
        alignSelf: 'flex-start',
    },
    //txt box style
    textInputStyle: {
        fontFamily:'GT-Haptik-Regular',
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
        backgroundColor: 'black',
        marginTop: 20,
        marginRight:60,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textgoogleLoginViewStyle: {
        width: 190,
        height: 45,
        marginTop: 20,
        marginRight:60,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textfbLoginViewStyle: {
        width: 250,
        height: 45,
        marginTop: 25,
        marginRight:60,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    LogoutViewStyle:{
      width: 200,
      height: 45,
      backgroundColor: 'black',
      marginTop: 20,
      marginRight:60,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    //"Login" style
    textLoginStyle: {
        fontFamily:'GT-Haptik-Regular',
        fontSize: 18,
        color: 'white',
    },
    itemStyle:{
      position:'absolute',
      left:10,
      height:350,
      margin:10,
      marginRight:20,
      width:width-30,
      resizeMode: 'stretch'
    }
});
