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
} from 'react-native';


export default class Visit extends Component {
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
      </View>
      <ScrollView>
        <Image source={require('../images/Visit_Head_Image.png')}
              style={styles.headImage}
        />

        <View style={styles.mapBox}>

        </View>


        <View style={styles.textBox}>
        <Image source={require('../images/Visit_img.png')}
              style={styles.middleImage}
        />
          <Text style={styles.textStyle}>
          {'\n'}
          <Text style={{fontWeight:'bold',fontSize: 21}}>
          PHONE{'\n'}
          </Text>
          09 309 7433   ENQUIRIES{'\n'}
          09 361 1000   BOOKINGS via ITICKET{'\n'}{'\n'}
          <Text style={{fontWeight:'bold',fontSize: 21}}>
          GENERAL ENQUIRIES{'\n'}
          </Text>
          info@basementtheatre.co.nz{'\n'}{'\n'}
          <Text style={{fontWeight:'bold',fontSize: 21}}>
          ADDRESS{'\n'}
          </Text>
          Lower Greys Avenue (by Civic Carpark){'\n'}
          Auckland CBD 1010{'\n'}{'\n'}
          <Text style={{fontWeight:'bold',fontSize: 21}}>
          VENUE HOURS{'\n'}
          </Text>
          Tue-Sat 5pm - late{'\n'}{'\n'}
          <Text style={styles.bigText}>
          ACCESS{'\n'}
          </Text>
          Getting into the Basement if you are in a wheelchair can be a bit tricky. But don’t let it put you off! If you are coming to see a show and need a hand getting in email us at info@basementtheatre.co.nz and we’ll make sure we’re prepared. Please note that at this time Studio shows are not wheelchair accessible.{'\n'}{'\n'}
          <Text style={styles.bigText}>
          PARKING{'\n'}
          </Text>
          “Is parking close?” we hear you say. “Mate we are in the middle of a car park!” we reply. It opens at 6pm and costs $12. The machines take credit cards, debit cards and cash. If you need change for the machine come and see us when you arrive. If that’s full then there is the Civic Car Park right next door, Wilson Parking across the road, plus on street parking on Greys Ave.{'\n'}{'\n'}
          <Text style={styles.bigText}>
          TICKETS AVAILABLE FROM Q THEATRE{'\n'}
          </Text>
          Tickets are now available for over the counter purchase at our mates’ place - Q Theatre! Their box office is open from 10am weekdays, or an hour before their own events on weekends.{'\n'}
          Remember you can always purchase a ticket from our box office between 5.30pm and approximately 8.30pm every Tuesday through Saturday. If there are later shows the box office will be open until 30 minutes after the final start time.{'\n'}
          {'\n'}{'\n'}
          </Text>
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
        backgroundColor: '#C0CCD9',
        alignItems: 'center',
    },
    backButton: {
        height: 35,
        width: 35,
        resizeMode: 'stretch',
    },
    textBox:{
      flexDirection: 'column',
      paddingTop: 40,
      paddingLeft: 30,
      paddingRight: 30,
      backgroundColor: 'white',
    },
    textStyle:{
      fontSize: 16,
      color: 'black',
      lineHeight: 30,
    },
    bigText:{
      fontSize: 24,
      color: 'black',
      lineHeight: 30,
      fontWeight:'bold',
    },
    mapBox:{
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').width-30,
    },
    middleImage:{
      width:Dimensions.get('window').width-60,
      height:373,
      resizeMode: 'stretch',
      paddingLeft:30,
    },
  })
