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

import ForArtist from '../More/ForArtist';
import SchoolsProgramme from '../More/SchoolsProgramme';

export default class OurStory extends Component {
  constructor (props) {
  super(props);
}
  clickJump(){
    const{navigator} = this.props;
    if(navigator){
      navigator.pop();
    }
  }

  clickJumpToForArtist(){
      const{navigator} = this.props;
      if(navigator){
        navigator.push({　　
        name: "ForArtist",
        component: ForArtist
        });
      }
  }
  clickJumpToSchoolsProgramme(){
      const{navigator} = this.props;
      if(navigator){
        navigator.push({　　
        name: "SchoolsProgramme",
        component: SchoolsProgramme
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
      <Text style={styles.headText}>Our Story</Text>
      </View>
      <ScrollView>
        <Image source={require('../images/OurStory_Head_Image.png')}
              style={styles.headImage}
        />


        <View style={styles.textBox}>

        <Image source={require('../images/OurStory_img_01.jpg')}
              style={styles.middleImage}
        />

        <Text style={styles.textStyle}>
        The Basement is Auckland’s culture-defining powerhouse - home to an artistic mixtape of theatre makers, dancers, visual artists, poets, musicians, comedians and everyone in between. We are chocka-block full of original local content - world premieres make up over half of our programme- and we proudly showcase the best new voices and fresh perspectives.
        {'\n'}{'\n'}
        </Text>

        <View style={{backgroundColor: 'rgb(84,253,88)',width:Dimensions.get('window').width-60, height:Dimensions.get('window').width-180,marginBottom:30,paddingLeft: 20}}>
        <Text style={styles.textStyle}>
        <Text style={{fontFamily:'GT-Haptik-Bold',
        fontSize: 17,
        color: 'white',
        lineHeight: 20,}}>
        {'\n'}{'\n'}”
        {'\n'}THE BEATING HEARTOF AUCKLAND THEATRE
        </Text>
        {'\n'}—Winner of best Theatre, Metro Magazine (2014)
        </Text>
        </View>

        <Text style={styles.textStyle}>
        Smack-bang in the middle of a car park in the central city - coming to The Basement is always an experience no matter what’s on.  All tickets are under 25 bucks, so bring a date, because you can shout like a high-roller (and whether you love the show or not, it’ll be a great icebreaker). Come watch sweat drip and spit fly as some of the brightest new talent earn their chops at our place.
        {'\n'}{'\n'}
        You can’t download theatre - come get something live.
        {'\n'}{'\n'}

        <Text style={styles.middleBigText}>
        OUR VALUES:
        </Text>
        {'\n'}· We believe arts are vital for life!
        {'\n'}· Between bangin' art and bangin' profit, we’ll choose art every time.
        {'\n'}· We are game changers, and we urge others to change it up too.
        {'\n'}· We go hard out for our artists, our audiences, and our community.
        {'\n'}· Our powers combined — collaboration smashes competition.
        {'\n'}· We want everyone to feel at home at the Basement.
        {'\n'}{'\n'}
        <Text style={styles.middleBigText}>
        BY THE NUMBERS
        </Text>
        {'\n'}· From when we opened the doors in 2008 the Basement has played host to over 600 productions and thousands of artists both onstage and off.
        {'\n'}· Since 2013, we have paid out almost $800K to artists through the Risk Share Model and hosted over 100,000 audience members.
        {'\n'}· In 2016, 90% of our content was New Zealand work, and 80% of the works were world premieres.
        {'\n'}
        </Text>

        <View style={styles.Divider}>
        </View>

        <Image source={require('../images/OurStory_img_02.jpg')}
              style={[styles.middleImage],{width:Dimensions.get('window').width-60,height:Dimensions.get('window').width-180,marginBottom:30}}
        />

        <Text style={styles.textStyle}>
        <Text style={styles.bigText}>
        PUT ON A SHOW AT BASEMENT{'\n'}
        </Text>
        Want to put on a show at ours? Mean. Check out our Artists page for everything you need to know.
        {'\n'}{'\n'}
        <Text style={styles.bigText}>
        OUR PROGRAMMES{'\n'}
        </Text>
        <Text style={styles.middleBigText}>
        {'\n'}RISK SHARE{'\n'}
        </Text>
        At the Basement we take 20%+GST of box office in place of the usual upfront venue hire fee.{'\n'}
        <Text style={styles.middleBigText}>
        {'\n'}BASEMENT AND BREAKFAST{'\n'}
        </Text>
        Early morning play readings of works in development, with feedback exchanged for free coffee and croissants.{'\n'}
        <Text style={styles.middleBigText}>
        {'\n'}THE PRODUCERS DEVELOPMENT INITIATIVE{'\n'}
        </Text>
        A year-long paid residency for the best up and coming industry connectors.{'\n'}

        </Text>
        <TouchableOpacity onPress={() => {this.clickJumpToSchoolsProgramme()}}>
        <Text style={styles.middleBigText}>
          <Text style={{textDecorationLine: 'underline'}}>
          {'\n'}THE BASEMENT SCHOOLS PROGRAMME{'\n'}
          </Text>
        </Text>
        </TouchableOpacity>

        <Text style={styles.textStyle}>
        A programme that offers more than 500 free tickets to theatre each year for our partner schools as well as transport to and from the venue, education packs and Q & A sessions with the artists.
        {'\n'}
        <Text style={styles.middleBigText}>
        {'\n'}PLAYSCIENCE!{'\n'}
        </Text>
        Fully paid workshops for 6 new works programmed in our space per year.
        {'\n'}
        <Text style={styles.middleBigText}>
        {'\n'}INTERNSHIPS{'\n'}
        </Text>
        Opportunities to work alongside The Basement team and be part of the “beating heart of Auckland theatre.”
        {'\n'}
        {'\n'}For more information about any of our programmes, sign up to our artist’s newsletter{' '}
        <Text style={{textDecorationLine: 'underline'}} onPress={() => {this.clickJumpToForArtist()}}>
        here
        </Text>
        .{'\n'}{'\n'}

        </Text>

        <View style={styles.Divider}>
        </View>

        <Text style={styles.textStyle}>
        <Text style={styles.bigText}>
        OUR TEAM{'\n'}
        </Text>
        </Text>
        </View>
        <Image source={require('../images/Elise.jpg')}
              style={styles.faceImage}
        />
        <View style={styles.textBox}>
        <Text style={styles.textStyle}>
        <Text style={styles.middleBigText}>
        Elise
        </Text>
        {' '}- General Manager
        </Text>
        <View style={styles.Divider}>
        </View>
        </View>

        <Image source={require('../images/Sam.jpg')}
              style={styles.faceImage}
        />
        <View style={styles.textBox}>
        <Text style={styles.textStyle}>
        <Text style={styles.middleBigText}>
        Sam
        </Text>
        {' '}- Business & Industry Development Manager
        </Text>

        <View style={styles.Divider}>
        </View>
        </View>

        <Image source={require('../images/Gabrielle.jpg')}
              style={styles.faceImage}
        />
        <View style={styles.textBox}>
        <Text style={styles.textStyle}>
        <Text style={styles.middleBigText}>
        Gabrielle
        </Text>
        {' '}- Programme and Artist Development Manager
        </Text>
        <View style={styles.Divider}>
        </View>
        </View>

        <Image source={require('../images/Ronnie.jpg')}
              style={styles.faceImage}
        />
        <View style={styles.textBox}>
        <Text style={styles.textStyle}>
        <Text style={styles.middleBigText}>
        Ronnie
        </Text>
        {' '}- Technical Manager
        </Text>
        <View style={styles.Divider}>
        </View>
        </View>

        <Image source={require('../images/Faith.jpg')}
              style={styles.faceImage}
        />
        <View style={styles.textBox}>
        <Text style={styles.textStyle}>
        <Text style={styles.middleBigText}>
        Faith
        </Text>
        {' '}- Bar Manager
        </Text>
        <View style={styles.Divider}>
        </View>
        </View>

        <Image source={require('../images/Sara.jpg')}
              style={styles.faceImage}
        />
        <View style={styles.textBox}>
        <Text style={styles.textStyle}>
        <Text style={styles.middleBigText}>
        Sara
        </Text>
        {' '}- Producer in Residence
        </Text>
        <View style={styles.Divider}>
        </View>
        </View>

        <Image source={require('../images/Deanna.jpg')}
              style={styles.faceImage}
        />
        <View style={styles.textBox}>
        <Text style={styles.textStyle}>
        <Text style={styles.middleBigText}>
        Deanna
        </Text>
        {' '}- Schools Programme Co-ordinator & Lovers Liaison
        </Text>
        <View style={styles.Divider}>
        </View>
        </View>

        <Image source={require('../images/Ahi.jpg')}
              style={styles.faceImage}
        />
        <View style={styles.textBox}>
        <Text style={styles.textStyle}>
        <Text style={styles.middleBigText}>
        Ahi
        </Text>
        {' '}- Programming Assistant
        </Text>
        <View style={styles.Divider}>
        </View>
        </View>

        <Image source={require('../images/Kate.jpg')}
              style={styles.faceImage}
        />
        <View style={styles.textBox}>
        <Text style={styles.textStyle}>
        <Text style={styles.middleBigText}>
        Kate
        </Text>
        {' '}- Marketing Manager
        </Text>
        <View style={styles.Divider}>
        </View>
        </View>

        <Image source={require('../images/Ali.jpg')}
              style={styles.faceImage}
        />
        <View style={styles.textBox}>
        <Text style={styles.textStyle}>
        <Text style={styles.middleBigText}>
        Ali
        </Text>
        {' '}- Box Office Manager{'\n'}{'\n'}{'\n'}{'\n'}
        </Text>
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
      paddingLeft: (Dimensions.get('window').width-35)/4,
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
