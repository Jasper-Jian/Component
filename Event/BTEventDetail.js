import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  BackAndroid,
  Linking
} from 'react-native';

import Mainstyles from '../StylesSheet';
import Event from '../Event/BTEventDetail';
var {width}=Dimensions.get('window').width;
var DEFAULT_URL = 'https://www.iticket.co.nz/events/2017/may/the-faustus-project';
export default class EventDetails extends Component{
  clickJump(){
    const{navigator} = this.props;
    if(navigator){
      navigator.pop();
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerBarContainer}>
        <TouchableOpacity onPress = {this.clickJump.bind(this)}>
          <Image source={require('../images/icon_camera_back_normal.png')}
                style={styles.backButton}
          />
        </TouchableOpacity>
        </View>
        <ScrollView>
        <Image key={1} source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/55a85f73e4b0a37bc13840e6/58b52eade4fcb5991e72c16e/1488268974401/TASSEL1200.JPG'}} style={Mainstyles.itemStyle}/>
        <View>
          <View style={styles.DetailBox}>
            <Text style={Mainstyles.TitleText}>
              Tassel Me This
            </Text>
            <Text style={styles.MoreInfoText}>Shani Dickins & Jessie McCall hunt amongst glittering personal baggage for a Spectassular to call their own.
            </Text>
            <Text style={styles.MoreInfoText}>
            A dance theatre romp for anyone who has clung (for dear life) to a certain special moment.Winner of Best of Fringe 2015 at the Dunedin Fringe.
            </Text>
            <Text style={styles.MoreInfoText}>
            A brilliant visual masterpiece - Theatreview.
            </Text>
            <Text style={styles.MoreInfoText}>
            DATE: 11 APR - 15 APR
            </Text>
            <Text style={styles.MoreInfoText}>
            TIME: 8:00 PM
            </Text>
            <Text style={styles.MoreInfoText}>
            RUNTIME: 50 MINUTES
            </Text>
            <Text style={styles.MoreInfoText}>
            VENUE: THEATRE
            </Text>
            <Text style={styles.MoreInfoText}>
            PRICE: $16 - $20
            </Text>
          </View>
            <TouchableOpacity onPress={() => {Linking.openURL(DEFAULT_URL)}}>
              <View style={styles.textLoginViewStyle}>
                  <Text style={styles.ButtonText}>Book Now</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.MoreInfoText}>
            * Concession prices available to: Seniors 65+, Students with ID, Equity Members with ID.
            </Text>
        </View>
      </ScrollView>
      </View>
    );
  }
  _Back(){
      this.props.navigator.pop(Event); // 返回上一页
  }
};
const styles = StyleSheet.create({
  container:{
    flexDirection:'column',
    backgroundColor:'rgba(133,175,164,1)',
    flex:1,
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
  EventTimeText:{
    color:'white',
    fontSize:18,
    fontWeight:'400',
  },
  EventImageBox:{
      flexDirection:'row',
  },
  DetailBox:{
    margin: 15,
    justifyContent:'flex-start',
    alignSelf:'flex-start',
    alignItems:'flex-start'
  },
  Divider:{
    borderStyle:'solid',
    borderBottomWidth:3,
    borderBottomColor : 'white',
  },
  MoreInfoText:{
    marginTop:8,
    color:'black',
    fontWeight:'400',
    fontSize: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLoginViewStyle: {
      width: 400,
      height: 45,
      backgroundColor: 'rgba(206,60,100,1)',
      borderRadius: 20,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
  },
  ButtonText:{
    marginTop:2,
    color:'white',
    fontSize: 20,
    fontWeight:'600',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
