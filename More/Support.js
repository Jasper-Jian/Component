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

import SchoolsProgramme from '../More/SchoolsProgramme';

export default class Support extends Component {
  static defaultProps = {
    title: 'Support'
  };

  clickJump(){
    const{navigator} = this.props;
    if(navigator){
      navigator.pop();
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
      <Text style={styles.headText}>Support</Text>
      </View>
      <ScrollView>
        <Image source={require('../images/Support_Head_Image.png')}
              style={styles.headImage}
        />

        <View style={styles.textBox}>
          <Text style={styles.textStyle}>
          The Basement is where the ideas, artists and arts leaders of tomorrow are being formed. We are hell bent on supporting artists to develop their craft and build sustainable careers, and we need your help to make it happen.
          {'\n'}{'\n'}
          Money raised from donations will go directly towards our development programmes, like:{'\n'}
          {'\n'}·{' '}
          <Text style={{textDecorationLine: 'underline'}} onPress={() => {this.clickJumpToSchoolsProgramme()}}>
          The Schools Programme
          </Text>
          (Te Ara ki Angitu - The pathway to opportunity) which provides access to Basement shows, workshops with artists and education packs for kids who would otherwise miss out{'\n'}
          {'\n'}· Playscience! workshops that support the development of new plays and new artistic voices
          {'\n'}{'\n'}
          Investment in The Basement is an investment in the evolving culture of Aotearoa, in the way that we tell stories about this place we call home.
          {'\n'}{'\n'}So make us a part of your story, donate now, and let’s make the future happen together.
          {'\n'}{'\n'}Huge thanks to long-time Basement supporter Jonty Crane, and to Auckland Council, whose kind contributions made this website possible and to Studio Alexander for our award-winning design.
          {'\n'}{'\n'}
          </Text>
          <View style={styles.Divider}></View>
          <Text style={styles.bigText}>
          {'\n'}GET INVOLVED!{'\n'}{'\n'}
          </Text>
          <Text style={styles.textStyle}>
          Click here to donate to The Basement Theatre’s{' '}
          <Text style={{textDecorationLine: 'underline'}} onPress={() => {Linking.URl('https://givealittle.co.nz/donate/Organisation/thebasement')}}>
          Give a Little page
          </Text>
          {'\n'}{'\n'}Click here to donate to The Basement Theatre’s Schools Programme{' '}
          <Text style={{textDecorationLine: 'underline'}} onPress={() => {Linking.URl('https://givealittle.co.nz/cause/basement4schools')}}>
          Give a Little page
          </Text>
          {'\n'}{'\n'}
          If your business is interested in supporting The Basement, or one of our programmes, please contact:{'\n'}{'\n'}
          Sam Snedden{'\n'}
          Business and Industry Development Manager{'\n'}
          Phone +64 9 302 2960{'\n'}
          sam@basementtheatre.co.nz{'\n'}{'\n'}
          </Text>
          <View style={styles.Divider}></View>
          <Text style={styles.bigText}>
          {'\n'}HUGE LOVE TO THESE ORGANISATIONS FOR THEIR ONGOING SUPPORT
          </Text>

          </View>

          <View style={{backgroundColor:'white',
                        flexDirection: 'column',
                        paddingTop: 20,
                        paddingLeft: 10,
                        paddingRight: 10,}}>

          <View style={{flexDirection:'row',alignSelf:'center',marginTop:10}}>
          <TouchableOpacity onPress={ ()=>{ Linking.openURL('http://www.ttcfltd.org.nz/')}}>
          <Image source={{uri:'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/5913c9896b8f5b7357110653/5913c98aa5790aa52820b077/1494469428511/Communities+Trust.jpg?format=500w'}}
                  style={[styles.icon, {width: 42, height: 28, marginRight:10}]}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={ ()=>{ Linking.openURL('http://www.fourwindsfoundation.co.nz/')}}>
          <Image source={{uri:'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/5913c9896b8f5b7357110653/5913c98a3a041182fc0cb149/1494469460949/Four+Winds.jpg?format=500w'}}
                  style={[styles.icon, {width: 42, height: 28, marginRight:10}]}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://www.iticket.co.nz/?_ga=2.243377164.862857183.1509339131-1179601090.1490050868')}}>
          <Image source={{uri:'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/5913c9896b8f5b7357110653/5913c98a440243174bc0d24f/1494469490309/iTicket.jpg?format=500w'}}
                  style={[styles.icon, {width: 42, height: 28, marginRight:10}]}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={ ()=>{ Linking.openURL('http://www.lionfoundation.org.nz/')}}>
          <Image source={{uri:'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/5913c9896b8f5b7357110653/5913c98a20099e44758e6793/1494469524007/Lion+Foundation.jpg?format=500w'}}
                  style={[styles.icon, {width: 42, height: 28, marginRight:10}]}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={ ()=>{ Linking.openURL('http://www.omnigraphics.co.nz/#/home')}}>
          <Image source={{uri:'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/5913c9896b8f5b7357110653/5913c98b2994ca3a9fc482e2/1494469562021/Omnigraphics.jpg?format=500w'}}
                  style={[styles.icon, {width: 42, height: 28, marginRight:10}]}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={ ()=>{ Linking.openURL('http://www.pubcharitylimited.org.nz/')}}>
          <Image source={{uri:'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/5913c9896b8f5b7357110653/5913c98b03596e07853e9b8b/1494469591141/Pub+Charity.jpg?format=500w'}}
                  style={[styles.icon, {width: 42, height: 28}]}/>
          </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row',alignSelf:'center',marginTop:20,marginBottom:50}}>
          <TouchableOpacity onPress={ ()=>{ Linking.openURL('http://www.jlcampbell.co.nz/')}}>
          <Image source={{uri:'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/5913c9896b8f5b7357110653/5913c98c1b10e3b63db38e9f/1494469640780/SJLCE.jpg?format=500w'}}
                  style={[styles.icon, {width: 42, height: 28, marginRight:10}]}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={ ()=>{ Linking.openURL('http://www.soarprint.co.nz/')}}>
          <Image source={{uri:'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/5913c9896b8f5b7357110653/5913c98c3a041182fc0cb14e/1494469696374/Soar.jpg?format=500w'}}
                  style={[styles.icon, {width: 42, height: 28, marginRight:10}]}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={ ()=>{ Linking.openURL('http://www.studioalexander.co.nz/')}}>
          <Image source={{uri:'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/5913c9896b8f5b7357110653/5913c98c59cc6871b7950a48/1494469726542/Studio+Alexander.jpg?format=500w'}}
                  style={[styles.icon, {width: 42, height: 28, marginRight:10}]}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={ ()=>{ Linking.openURL('http://wallaceartstrust.org.nz/wallace-foundation/')}}>
          <Image source={{uri:'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/5913c9896b8f5b7357110653/5913c98cff7c509585000c19/1494469756769/Wallace+Foundation.jpg?format=500w'}}
                  style={[styles.icon, {width: 42, height: 28, marginRight:10}]}/>
          </TouchableOpacity>

          <Image source={{uri:'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/5913c9896b8f5b7357110653/5966e75429687fd301531a8f/1499916248400/Waitemata+Local+Board.jpg?format=500w'}}
                  style={[styles.icon, {width: 42, height: 28, marginRight:10}]}/>

          <Image source={{uri:'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/5913c9896b8f5b7357110653/599a0efc8419c215258c15d7/1503268609731/TST+Logo%233+TST_BW.jpg?format=500w'}}
                  style={[styles.icon, {width: 42, height: 28,resizeMode: 'stretch',}]}/>

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
    Divider:{
      borderStyle:'solid',
      borderBottomWidth:1,
      borderBottomColor : '#C0CCD9',
    },
    bigText:{
      fontFamily:'GT-Haptik-Bold',
      fontSize: 20,
      color: 'black',
      lineHeight: 20,
    }
  })
