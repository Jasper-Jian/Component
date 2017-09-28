import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Navigator,
  TextInput,
  Linking,
  ToastAndroid
} from 'react-native';
import {firebaseRef} from '../services/firebase';
import firebase from 'firebase';
import Support from '../More/Support';

export default class defaultContactUs extends Component{
  constructor (props) {
  super(props);
  this.state = {
    email: '',
    firstName: '',
    lastName:'',
    message:''
  }
}

  clickJumpToSupport(){
      const{navigator} = this.props;
      if(navigator){
        navigator.push({　　
        name: "Support",
        component: Support
        });
      }
  }
  submit(){
    var path = "2017/ContactUs/";
    var query = firebase.database().ref(path);
    var user = firebaseRef.auth().currentUser;
    if(this.state.firstName!=""){
      if(this.state.lastName!=""){
        if(this.state.email!="" ){
          if(this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
            var data = {
              firstName: this.state.firstName,
              lastName: this.state.lastName,
              email: this.state.email,
              message: this.state.message
            }
          query.push(data);
          ToastAndroid.show('Submit successful', ToastAndroid.SHORT);
          }else{
            ToastAndroid.show('Email is badly formated', ToastAndroid.SHORT);
          }
        }else{
            ToastAndroid.show('Please enter the Email', ToastAndroid.SHORT);
        }
      }else{
        ToastAndroid.show('Please enter the Last Name', ToastAndroid.SHORT);
      }
    }else{
      ToastAndroid.show('Please enter the First Name', ToastAndroid.SHORT);
    }

  }
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.headerBarContainer}>
      <Text style={styles.headText}>Contact Us</Text>
      </View>
      <ScrollView>
      <View style={styles.space}>
      </View>



      <View style={styles.messageBox}>

      <View style={{flexDirection:'row'}}>
      <Image source={require('../images/phone_icon.png')}
              style={styles.icon}/>
      <Text style={styles.bigText}>
      PHONE
      </Text>
      </View>

      <Text style={[styles.textStyle,{marginLeft:6}]}>
      09 309 7433   ENQUIRIES{'\n'}
      09 361 1000   BOOKINGS via ITICKET
      </Text>

      <View style={styles.Divider}>
      </View>

      <View style={{flexDirection:'row'}}>
      <Image source={require('../images/email_icon.png')}
              style={styles.icon}/>
      <Text style={styles.bigText}>
      GENERAL ENQUIRIES
      </Text>
      </View>

      <Text style={[styles.textStyle,{marginLeft:6}]}>
      info@basementtheatre.co.nz
      </Text>

      </View>

      <View style={[styles.Divider,{marginLeft:30}]}>
      </View>

      <View style={styles.messageBox}>

      <Text style={styles.bigText}>
      FIND US ON SOCIAL MEDIA
      </Text>

      <View style={{flexDirection:'row',alignSelf:'center',marginTop:10}}>
      <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://www.facebook.com/wearethebasement')}}>
      <Image source={require('../images/facebook.png')}
              style={[styles.icon, {width: 35, height: 35, marginRight:30}]}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://twitter.com/Basementspace')}}>
      <Image source={require('../images/twitter.png')}
              style={[styles.icon, {width: 35, height: 35, marginRight:30}]}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://www.instagram.com/basementspace/')}}>
      <Image source={require('../images/instagram.png')}
              style={[styles.icon, {width: 35, height: 35}]}/>
      </TouchableOpacity>
      </View>

      </View>

      <View style={[styles.Divider,{marginLeft:30}]}>
      </View>

      <Text style={[styles.bigText, {alignSelf: 'center'}]}>
      GET IN TOUCH
      </Text>
      <View style={styles.messageBox}>

      <Text style={styles.textStyle}>
      Name *
      </Text>

      <View style={styles.inputBox}>
      <TextInput
          style={styles.inputText}
          keyboardType='web-search'
          placeholder='First Name'
          underlineColorAndroid={'transparent'}
          onChangeText={(text) => this.setState({firstName: text})}
      />
      </View>

      <View style={styles.inputBox}>
      <TextInput
          style={styles.inputText}
          keyboardType='web-search'
          placeholder='Last Name'
          underlineColorAndroid={'transparent'}
          onChangeText={(text) => this.setState({lastName: text})}
      />
      </View>

      <Text style={styles.textStyle}>
      Email Address *
      </Text>

      <View style={styles.inputBox}>
      <TextInput
          style={styles.inputText}
          keyboardType='web-search'
          placeholder='Email Address'
          underlineColorAndroid={'transparent'}
          onChangeText={(text) => this.setState({email: text})}
      />
      </View>

      <Text style={styles.textStyle}>
      Message
      </Text>

      <View style={[styles.inputBox,{height:100}]}>
      <TextInput
          style={styles.inputText}
          keyboardType='web-search'
          placeholder='Enter your message here'
          underlineColorAndroid={'transparent'}
          onChangeText={(text) => this.setState({message: text})}
      />
      </View>

      <TouchableOpacity onPress={() => {this.submit();}}>
        <View style={styles.buttonStyle}>
            <Text style={styles.ButtonText}>Submit</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.Divider}>
      </View>

      <Text style={styles.bigText}>
      SUPPORT{'\n'}
      BASEMENT THEATRE{'\n'}
      </Text>

      <Text style={styles.textStyle}>
      Basement Lovers Club{'\n'}{'\n'}
      Keen Auckland arts lover? Support The Basement!{'\n'}{'\n'}
      We take the risk out of staging shows and give artists a foot in the door of the performing arts industry. From mentoring producers to writers workshops, curatorial internships, and youth empowering initiatives (like our new Schools Programme!) We’re a hub for up and coming young talent and it’s our business to safeguard a collaborative, creative culture in our city.
      {'\n'}
      </Text>

      <TouchableOpacity onPress = {this.clickJumpToSupport.bind(this)}>
        <View style={styles.buttonStyle}>
            <Text style={styles.ButtonText}>Donate</Text>
        </View>
      </TouchableOpacity>

      </View>
      <View style={styles.space}>
      </View>
      <View style={styles.space}>
      </View>
      <View style={styles.space}>
      </View>

      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    backgroundColor: '#F5F5F5',
  },
  headerBarContainer: {
      flexDirection: 'column',
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 0,
      height: 48,
      backgroundColor: '#C0CCD9',
      alignItems: 'center',

  },
  headText: {
    paddingTop: 8,
    color:'black',
    fontSize:24,
    fontWeight:'bold',
    textAlign :'center',

  },
  headImage: {
    width:Dimensions.get('window').width-30,
    height:200,
    resizeMode: 'stretch',
    alignSelf: 'center',
    paddingTop: 10,
    borderRadius: 20,
  },
  space:{
    height: 10,
    backgroundColor: 'transparent',
  },
  bigText:{
    fontSize: 24,
    color: 'black',
    lineHeight: 30,
    fontWeight:'bold',

  },
  icon: {
      marginTop: 3,
      marginLeft: 6,
      marginRight: 6,
      width: 24,
      height: 24,
      resizeMode: 'stretch'
  },
  messageBox:{
    flexDirection:'column',
    paddingLeft:30,
    paddingRight:30,
  },
  textStyle:{
    fontSize: 16,
    color: 'black',
    lineHeight: 30,
  },
  inputBox: {
      height: 30,
      flexDirection: 'row',
      backgroundColor: 'white',
      borderColor: 'black',
      borderWidth: 1,
      flex: 1,
      alignItems: 'center',
      marginTop:10,
  },
  inputText: {
      flex: 1,
      backgroundColor: 'transparent',
      fontSize: 14,
      marginTop: -6.65,
      marginBottom: -6.65,

  },
  buttonStyle: {
      width: 150,
      height: 35,
      marginTop:10,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignSelf: 'center',
  },
  ButtonText:{
    color:'white',
    fontSize: 20,
    fontWeight:'300',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Divider:{
    marginTop: 15,
    marginBottom:15,
    borderStyle:'solid',
    borderBottomWidth:1,
    width: Dimensions.get('window').width-60,
    borderBottomColor : 'rgba(1,165,175,1)',
  },
  textStyle:{
    fontSize: 16,
    color: 'black',
    lineHeight: 30,
  },
});
