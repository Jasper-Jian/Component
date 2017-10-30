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

import LoversClub from '../More/LoversClub';

export default class SchoolsProgramme extends Component {
  constructor (props) {
  super(props);
}
  clickJump(){
    const{navigator} = this.props;
    if(navigator){
      navigator.pop();
    }
  }
  clickJumpToLoversClub(){
      const{navigator} = this.props;
      if(navigator){
        navigator.push({　　
        name: "LoversClub",
        component: LoversClub
        });
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
      <Text style={styles.headText}>Schools Programme</Text>
      </View>
      <ScrollView>
        <Image source={require('../images/SchoolsProgramme_Head_Image.png')}
              style={styles.headImage}
        />


        <View style={styles.textBox}>

        <Image source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/t/59a5d9acd2b857e772646314/1504041445133/3X1A7343.JPG?format=1500w'}}
              style={styles.middleImage}
        />
        <Text style={{fontFamily:'GT-Haptik-Regular',fontSize:10,color:'black'}}>
        Students seeing an onsite show in Summer 2017.
        </Text>
        <Text style={styles.textStyle}>
        {'\n'}{'\n'}
        <Text style={styles.middleBigText}>
        TE ARA KI ANGITU - THE PATHWAY TO OPPORTUNITY{'\n'}{'\n'}
        </Text>
        The Basement Schools Programme connects grassroots theatre makers with young people across Auckland and provides intimate, professional theatre experiences for students who might not otherwise get the opportunity.
        {'\n'}{'\n'}
        Thanks to generous donations and community trust grants, students in the programme receive: tickets to shows, transport to and from the venue, workshops and Q&A sessions with artists, a touring show visiting their school, and high quality digital resources that allow them to respond to what they have seen within the framework of the New Zealand curriculum, all at no cost to the student or their school.
        {'\n'}{'\n'}
        </Text>

        <View style={{backgroundColor: 'rgb(84,253,88)',width:Dimensions.get('window').width-60, height:Dimensions.get('window').width-150,marginBottom:30,paddingLeft:20}}>
        <Text style={styles.textStyle}>
        <Text style={{fontFamily:'GT-Haptik-Bold',
        fontSize: 17,
        color: 'white',
        lineHeight: 20,}}>
        {'\n'}{'\n'}”
        {'\n'}THESE STUDENTS HAD NEVER BEEN TO THE THEATRE BEFORE AND THEY ARE ADDICTED!
        </Text>
        {'\n'}  —  Sarah Jansen, Drama Teacher, Edgewater College
        </Text>
        </View>

        <Text style={styles.textStyle}>
        <Text style={styles.middleBigText}>
        VIEW PAST EDUCATION PACKS HERE {'\n'}{'\n'}
        </Text>
        {'\n'}·{' '}
        <Text style={{textDecorationLine: 'underline'}} onPress={() => {Linking.openURL('http://afakasi2017.weebly.com/')}}>
        Afakasi (2017)
        </Text>
        {'\n'}
        {'\n'}·{' '}
        <Text style={{textDecorationLine: 'underline'}} onPress={() => {Linking.openURL('http://becauseheismrhyde.weebly.com/')}}>
        Jekyll and Hyde (2017)
        </Text>
        {'\n'}
        {'\n'}·{' '}
        <Text style={{textDecorationLine: 'underline'}} onPress={() => {Linking.openURL('http://likesextheplay.weebly.com/')}}>
        Like Sex (2017)
        </Text>
        {'\n'}
        {'\n'}·{' '}
        <Text style={{textDecorationLine: 'underline'}} onPress={() => {Linking.openURL('http://meatau.weebly.com/')}}>
        Mea Tau (2017)
        </Text>
        {'\n'}
        {'\n'}·{' '}
        <Text style={{textDecorationLine: 'underline'}} onPress={() => {Linking.openURL('http://thomus.weebly.com/')}}>
        Thomus (2016)
        </Text>
        {'\n'}
        {'\n'}·{' '}
        <Text style={{textDecorationLine: 'underline'}} onPress={() => {Linking.openURL('http://orangutantheplay.weebly.com/')}}>
        Orangutan (2016)
        </Text>
        {'\n'}
        {'\n'}·{' '}
        <Text style={{textDecorationLine: 'underline'}} onPress={() => {Linking.openURL('http://didoaeneas.weebly.com/')}}>
        Dido and Aeneas Recomposed (2016)
        </Text>
        {'\n'}
        {'\n'}·{' '}
        <Text style={{textDecorationLine: 'underline'}} onPress={() => {Linking.openURL('http://tamokostudyguide.weebly.com/')}}>
        Ta Moko (2016)
        </Text>
        {'\n'}
        {'\n'}·{' '}
        <Text style={{textDecorationLine: 'underline'}} onPress={() => {Linking.openURL('http://youngandhungry2015.weebly.com/')}}>
        Young and Hungry (2015)
        </Text>
        {'\n'}
        {'\n'}·{' '}
        <Text style={{textDecorationLine: 'underline'}} onPress={() => {Linking.openURL('http://stomachplay.weebly.com/')}}>
        Stomach (2015)
        </Text>
        {'\n'}
        {'\n'}·{' '}
        <Text style={{textDecorationLine: 'underline'}} onPress={() => {Linking.openURL('http://illbefine.weebly.com/')}}>
        I’ll Be Fine (2015)
        </Text>
        {'\n'}{'\n'}
        <Text style={styles.middleBigText}>
        GROWING THE PROGRAMME{'\n'}{'\n'}
        </Text>
        We are really proud of our Schools Programme, and would love to be able to offer a greater number of tickets so that more students can benefit from the experience.
        {'\n'}{'\n'}
        The programme is currently available to students from six low-decile schools in the Auckland region (Edgewater College, James Cook High School, Mount Roskill Grammar School, Onehunga High School, Papakura High School and Selwyn College), and we’d love to extend it out to more schools across the city.
        {'\n'}{'\n'}
        To find out more about our schools programme, email{' '}
        <Text style={{textDecorationLine: 'underline'}}>
        schools@basementtheatre.co.nz
        </Text>
        {'\n'}{'\n'}
        <Text style={{textDecorationLine: 'underline'}} onPress={() => {Linking.openURL('https://givealittle.co.nz/cause/basement4schools')}}>
        Click here to donate to our Schools Programme Give A Little page.
        </Text>
        {'\n'}{'\n'}
        </Text>

        <View style={styles.Divider}>
        </View>

        <Text style={styles.textStyle}>
        {'\n'}
        <Text style={styles.middleBigText}>
        THANK YOU!{'\n'}{'\n'}
        </Text>
        Our Schools Programme would not be possible without the incredible support of the following organisations, as well as the generous donations made through our{' '}
        <Text style={{textDecorationLine: 'underline'}} onPress={() => {this.clickJumpToLoversClub()}}>
        Basement Lovers Club
        </Text>
        {' '}by David Appleby, Pip Duncalf and Mike & Margaret Stanley.{'\n'}{'\n'}
        </Text>
        <Image style={{width:Dimensions.get('window').width-180,
                      height:Dimensions.get('window').width-220,
                      resizeMode: 'stretch',
                      alignSelf: 'center'}}
               source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/t/5907df7abebafb87ca4bda81/1493688188995/Communities+Trust.jpg?format=500w'}}
               />
       <Image style={{width:Dimensions.get('window').width-30,
                     height:Dimensions.get('window').width-220,
                     resizeMode: 'stretch',
                     marginBottom: 30,
                     alignSelf: 'center'}}
              source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/t/599f668cb8a79bcd96f51e94/1503618706887/TST+Logo%233+TST_BW.jpg?format=750w'}}
              />

        </View>


        <View style={{backgroundColor:'#F5F5F5',
                      flexDirection: 'column',
                      paddingTop: 20,
                      paddingLeft: 30,
                      paddingRight: 30,}}>
        <Text style={styles.bigText}>
        Core Parners
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
        backgroundColor: 'white',
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
      paddingLeft: (Dimensions.get('window').width-35)/8,
      color:'rgba(2,0,252,1)',
      fontSize:24,
      textAlign :'center',

    },
    textBox:{
      flexDirection: 'column',
      paddingTop: 20,
      paddingLeft: 30,
      paddingRight: 30,
      backgroundColor: 'white',
    },
    middleImage:{
      width:Dimensions.get('window').width-60,
      height:Dimensions.get('window').width-60,
      resizeMode: 'stretch',
      paddingLeft:30,
      marginBottom: 30,
    },
    textStyle:{
      fontFamily:'GT-Haptik-Regular',
      fontSize: 14,
      color: 'black',
      lineHeight: 20,
    },
    middleBigText:{
      fontFamily:'GT-Haptik-Bold',
      fontSize: 17,
      color: 'black',
      lineHeight: 20,
    },
    bigText:{
      fontFamily:'GT-Haptik-Bold',
      fontSize: 20,
      color: 'black',
      lineHeight: 20,
    },
    imagesBox:{
      width: 748,
      height: 312,
      resizeMode: 'stretch',
    },
    Divider:{
      marginTop: 15,
      marginBottom:15,
      borderStyle:'solid',
      borderBottomWidth:1,
      width: Dimensions.get('window').width-60,
      borderBottomColor : 'rgba(1,165,175,1)',
    },
    faceImage:{
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').width,
      resizeMode: 'stretch',
      marginBottom: 30,
    },
  })
