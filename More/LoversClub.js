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
} from 'react-native';

export default class LoversClub extends Component {
  clickJump(){
    const{navigator} = this.props;
    if(navigator){
      navigator.pop();
    }
  }

  render(){
    return(
      <View style={styles.container}>
      <View style={styles.headerBarContainer}>
      <TouchableOpacity onPress = {this.clickJump.bind(this)}>
        <Image source={require('../images/icon_camera_back_normal.png')}
              style={styles.backButton}
        />
      </TouchableOpacity>
      <Text style={styles.headText}>Lovers Club</Text>
      </View>
      <ScrollView>
        <Image source={require('../images/LoversClub_Head_Image.png')}
              style={styles.headImage}
        />
        <View style={styles.textBox}>
          <Text style={styles.textStyle}>
          The Basement Lovers Club, BLC for short, is our ever-growing group of ardent Basement supporters. They are people with a passion for supporting the development of Auckland{"'"}s brightest emerging talent. They believe in offering affordable arts experiences.
          {'\n'}{'\n'}
          They are people like you.
          {'\n'}{'\n'}
          And the ways that they support us are as diverse as they are. Some like to support us for a particular activity (like our Schools Programme), while others prefer to collaborate, giving their time and expertise. Some just hand us a paper bag full of unmarked bills and we don’t ask any questions.
          {'\n'}{'\n'}
          Regardless of how they show us love, we love them all back equally, and we guarantee that if you choose to support the Basement we will love you too. So email us at
          {' '}
          <Text style={{textDecorationLine: 'underline'}}>
          lovers@basementtheatre.co.nz
          </Text>
          {' '}to start something beautiful. You won’t regret it.
          {'\n'}{'\n'}
          Love,{'\n'}
          The Basement xx{'\n'}
          P.S. If you can’t wait or want to keep your love more low key then you can donate now on{' '}
          <Text style={{textDecorationLine: 'underline'}} onPress={() => {Linking.openURL('https://givealittle.co.nz/org/thebasement')}}>
          Give a Little
          </Text>
          .
          {'\n'}{'\n'}
          </Text>

          <Image source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/t/5907f0f29de4bbccbb473ce6/1493692662933/?format=750w'}}
                style={styles.middleImage}
          />
          <View style={styles.Divider}>
          </View>

        </View>
        <View style={{backgroundColor:'#F5F5F5',
                      flexDirection: 'column',
                      paddingTop: 20,
                      paddingLeft: 30,
                      paddingRight: 30,}}>
        <Text style={styles.bigText}>
        Core Parners{'\n'}
        </Text>
        <View style={{flexDirection:'row',alignSelf:'center',marginTop:10}}>
        <TouchableOpacity onPress={ ()=>{ Linking.openURL('http://www.creativenz.govt.nz')}}>
        <Image source={require('../images/creative-nz.jpg')}
                style={[styles.icon, {width: 105, height: 70, marginRight:30}]}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://foundationnorth.org.nz')}}>
        <Image source={require('../images/foundation-north.jpg')}
                style={[styles.icon, {width: 105, height: 70}]}/>
        </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://www.aucklandcouncil.govt.nz')}}>
        <Image source={require('../images/auckland-council.jpg')}
                style={[styles.icon, {width: 105, height: 70,alignSelf:'center'}]}/>
        </TouchableOpacity>
        </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        //set to full screen
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    headImage: {
      width:Dimensions.get('window').width,
      height:200,
      resizeMode: 'stretch'
    },
    headerBarContainer: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 0,
        height: 48,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    backButton: {
        height: 35,
        width: 35,
        resizeMode: 'stretch',
    },
    headText: {
      fontFamily: 'GT-Haptik-Bold',
      paddingTop: 0,
      paddingLeft: (Dimensions.get('window').width-35)/4,
      color:'rgba(2,0,252,1)',
      fontSize:24,
      textAlign :'center',

    },
    textBox:{
      flexDirection: 'column',
      paddingTop: 40,
      paddingLeft: 30,
      paddingRight: 30,
      backgroundColor: 'white',
    },
    textStyle:{
      fontFamily:'GT-Haptik-Regular',
      fontSize: 14,
      color: 'black',
      lineHeight: 20,
    },
    middleImage:{
      width:Dimensions.get('window').width-60,
      height:Dimensions.get('window').width-60,
      resizeMode: 'stretch',
      paddingLeft:30,
      marginBottom: 10,
      marginTop: 60,
    },
    bigText:{
      fontFamily:'GT-Haptik-Bold',
      fontSize: 20,
      color: 'black',
      lineHeight: 20,
    },
    Divider:{
      marginBottom:60,
      borderStyle:'solid',
      borderBottomWidth:1,
      width: Dimensions.get('window').width-60,
      borderBottomColor : 'rgba(1,165,175,1)',
    },
  })
