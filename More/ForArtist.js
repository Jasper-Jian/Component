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

import FillingForm from '../Mine/FillingForm';


export default class ForArtist extends Component {
  clickJump(){
    const{navigator} = this.props;
    if(navigator){
      navigator.pop();
    }
  }

  _SubmitPage(){
        const { navigator } = this.props;
        if(navigator) {
          navigator.push({
            component: FillingForm,
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
      <Text style={styles.headText}>For Artist</Text>
      </View>
      <ScrollView>
        <Image source={require('../images/ForArtist_Head_Image.png')}
              style={styles.headImage}
        />


        <View style={styles.textBox}>

          <Text style={styles.textStyle}>
          The Basement is a Risk Share Venue meaning that we don’t charge a venue hire for the use of our space. Instead, we take 20% + GST out of your box office at the end of your season. In addition to this we also have a small nightly charge for a Venue Technician (about the cost of the sale of two tickets).
          {'\n'}{'\n'}
          The 20% +GST from the box office, a ticketing fee of $2.65 per ticket sold* and nightly VT charge are typically THE ONLY CHARGES for the use of The Basement’s spaces and equipment.
          {'\n'}{'\n'}
          We don’t charge for the use of our technical inventory, pack in, pack out or dark days (days when your show isn’t on).
          {'\n'}{'\n'}
          We also have accounts with people like Soar Printing, Phantom Billstickers, as well as deals with photographers and graphic designers. This means that you can get things like posters and publicity images on account the cost of which then comes out of your box office at the end of the season.
          {'\n'}{'\n'}
          This means that you can put on a show at The Basement with NO UPFRONT CHARGES for venue and marketing. None. Zip. Nada. Bupkis. Zero.
          {'\n'}{'\n'}
          Yep. It’s pretty great.
          {'\n'}{'\n'}
          *There is no charge for allocated complementaries.
          {'\n'}{'\n'}{'\n'}
          <Text style={styles.bigText}>
          VENUES
          </Text>
          </Text>

          <View style={styles.Divider}>
          </View>

          <Image source={require('../images/theatre.jpg')}
                style={{resizeMode: 'stretch',
                        width:Dimensions.get('window').width-60,
                        height:Dimensions.get('window').width-60-100,
                        marginBottom:20}}
          />

          <Text style={styles.textStyle}>
          <Text style={styles.middleBigText}>
          THEATRE{'\n'}
          </Text>
          Seats 100. 15.1m long x 8.6m wide x 2.5m elevation{'\n'}
          </Text>


        <TouchableOpacity onPress={() => {Linking.openURL('https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/t/58bc7d6886e6c0c5a70e36bf/1488747881370/The+Basement+Main+Space+performance+space..pdf')}}>
          <View style={styles.buttonStyle}>
              <Text style={styles.ButtonText}>VIEW FLOOR PLAN</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.textStyle}>
        {'\n'}
        </Text>

        <Image source={require('../images/studio.jpg')}
              style={{resizeMode: 'stretch',
                      width:Dimensions.get('window').width-60,
                      height:Dimensions.get('window').width-60-100,
                      marginBottom:20}}
        />

        <Text style={styles.textStyle}>
        <Text style={styles.middleBigText}>
        STUDIO{'\n'}
        </Text>
        Seats 65. 13m long x 6.1m wide x 3.1m elevation
        </Text>

        <TouchableOpacity onPress={() => {Linking.openURL('https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/t/58bc7d832994ca1d92657959/1488747908442/The+Basement+Studio+blank+space.pdf')}}>
          <View style={styles.buttonStyle}>
              <Text style={styles.ButtonText}>VIEW FLOOR PLAN</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.Divider}>
        </View>

        <Text style={styles.textStyle}>
        <Text style={styles.bigText}>
        PITCH US YOUR SHOW{'\n'}{'\n'}
        </Text>
        The Basement programmes seasonally, Summer (Jan-Apr), Winter (May-Aug) and Spring (Sep - Dec), and accepts submissions up to one year in advance of a potential season. Download our submission form below, along with our artist info pack for everything you need to know about putting on a show at Basement.
        {'\n'}{'\n'}
        </Text>
        <TouchableOpacity onPress={() =>{this._SubmitPage();}}>
            {/*Submission Form*/}
            <View style={[styles.buttonStyle,{marginRight:0}]}>
                <Text style={styles.ButtonText}>SUBMISSION FORM</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>{Linking.openURL('https://basementtheatre.co.nz/s/Artist-Handbook-Spring-17.pdf')}}>
            {/*Submission Form*/}
            <View style={[styles.buttonStyle,{marginRight:0}]}>
                <Text style={styles.ButtonText}>ARTIST INFO PACK</Text>
            </View>
        </TouchableOpacity>

        <Text style={styles.textStyle}>
        {'\n'}
        Here are some things to help you out when you are thinking about submitting:
        {'\n'}{'\n'}
        <Text style={styles.middleBigText}>
        WE VALUE NEW{'\n'}
        </Text>
        {'\n'}
        We want to celebrate new artists, new work, and new practice. We want to help artists get a foot in the door of the professional performing arts and help them to forge careers. We want to host the best new talent and work. We want to encourage senior practitioners to try new things, like an established actor directing their first play.
        {'\n'}{'\n'}
        <Text style={styles.middleBigText}>
        WE VALUE INNOVATION{'\n'}
        </Text>
        {'\n'}
        We want to support artists who are at the forefront of changing the way we tell stories who are experimenting with genre, design, performance styles and languages.
        {'\n'}{'\n'}
        <Text style={styles.middleBigText}>
        WE VALUE PASSION{'\n'}
        </Text>
        {'\n'}
        We want to know why now is the time to tell this story. We want to know what makes it vital and interesting, what about it fires you up? Tell us all about it—because that’s what will also inspire our audiences.
        {'\n'}{'\n'}
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
    buttonStyle: {
        width: 250,
        height: 50,
        marginTop:20,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    ButtonText:{
      fontFamily:'GT-Haptik-Regular',
      color:'white',
      fontSize: 17,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
