import React, { Component } from 'react';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import StarRatingBar from 'react-native-star-rating-view/StarRatingBar';
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
import comment from '../Event/comment';
export default class review extends Component{
  pushToComment() {
    this.props.navigator.push(
         {
             component: comment,//Navigate page
             title: 'comment'
         }
    );
 }

  render(){
    return(
      <View style={styles.container}>
      <ScrollView>
      <ScrollableTabView
      style={{marginTop: 10, }}
      renderTabBar={() => <DefaultTabBar />}
      tabBarUnderlineColor='black'
      tabBarBackgroundColor='#C0CCD9'
      tabBarActiveTextColor='black'
      tabBarInactiveTextColor='black'
      tabBarTextStyle={{fontSize: 18}}
      >

    <View tabLabel='Description'>
    <View style={styles.DetailBox}>
      <Text style={styles.titleText}>
        {'\n'}Tassel Me This{'\n'}
      </Text>
      <Text style={styles.MoreInfoText}>Shani Dickins & Jessie McCall hunt amongst glittering personal baggage for a Spectassular to call their own.
      </Text>
      <Text style={styles.MoreInfoText}>
      A dance theatre romp for anyone who has clung (for dear life) to a certain special moment. Winner of Best of Fringe 2015 at the Dunedin Fringe.
      </Text>
      <Text style={styles.MoreInfoText}>
      A brilliant visual masterpiece - Theatreview.{'\n'}
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
      PRICE: $16 - $20{'\n'}{'\n'}
      </Text>
      </View>
      <TouchableOpacity onPress={() => {Linking.openURL(DEFAULT_URL)}}>
        <View style={styles.textLoginViewStyle}>
            <Text style={styles.ButtonText}>Book Now</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.DetailBox}>
      <Text style={styles.MoreInfoText}>
      {'\n'}* Concession prices available to: Seniors 65+, Students with ID, Equity Members with ID.
      </Text>
      </View>
    </View>


    <View tabLabel='Review' style={styles.DetailBox}>
    <Text style={styles.titleText}>{'\n'}Rating{'\n'}</Text>
    <StarRatingBar
    score={2.3}
    allowsHalfStars={true}
    accurateHalfStars={true}
    />
    <View style={styles.space}>
    </View>
    <TouchableOpacity onPress={() => {this.pushToComment()}}>
      <View style={styles.textLoginViewStyle}>
          <Text style={styles.ButtonText}>Write Comment</Text>
      </View>
    </TouchableOpacity>

    </View>
  </ScrollableTabView>
  </ScrollView>


      </View>
    )
  }


}
const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    backgroundColor: '#C0CCD9',
  },
  titleText: {
    color:'black',
    fontWeight:'bold',
    fontSize: 24,
    lineHeight: 30,
  },
  headText: {
    paddingTop: 0,
    paddingLeft: 85,
    color:'black',
    fontSize:28,
    fontWeight:'bold',
    textAlign :'center',

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
    justifyContent:'flex-start',
    alignSelf:'flex-start',
    alignItems:'flex-start',
    paddingLeft: 50,
    paddingRight: 50,
  },
  Divider:{
    borderStyle:'solid',
    borderBottomWidth:3,
    borderBottomColor : 'white',
  },
  MoreInfoText:{
    color:'black',
    fontWeight:'400',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    lineHeight: 30,
  },
  textLoginViewStyle: {
      width: 200,
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
  },
  space:{
    height: 80,
    backgroundColor: 'transparent',
  },
});
