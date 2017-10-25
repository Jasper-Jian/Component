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
  ListView,
  TextInput,
  RefreshControl,
  ActivityIndicator
} from 'react-native';
import comment from '../Event/comment';
import BookingSite from '../Event/BookingSite';
import Mainstyles from '../StylesSheet';

import {firebaseRef} from '../services/firebase';
import firebase from 'firebase';

export default class review extends Component{
  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    items=[];
    this.state = {
        dataSource: ds,
        loaded:false,
        evaluateText: null,
        score: 3.7,
      };
  }
  componentWillMount() {
    var path = "2017/Comment/"+this.props.data.title;
    var query = firebase.database().ref(path);
      query.on('value',(snap)=>{
        snap.forEach((data)=>{
          items.push({
            key:data.key,
            data:data.val(),
          });
        });
          this.setState({
            dataSource:this.state.dataSource.cloneWithRows(items),
            loaded:true
        });
      })

  }
  pushToComment(data) {
    let _this = this;
      const { navigator } = this.props;
      if(navigator) {
        console.log(this.props.data.title);
        navigator.push({
          title: comment,
          component: comment,
            params: {
                data: this.props.data,
            }
          });
      }
  }

  _renderRow(data){
      return (
        <View>
          <View style={styles.comment}>
          <Text style={styles.MoreInfoText}>
            {data.data.content}
          </Text>

              <StarRatingBar
                score={data.data.score}
                allowsHalfStars={false}
                accurateHalfStars={false}
              />
          <Text>
            sender: {data.data.sender}
            {'\n'}
          </Text>
          </View>
          <View style={styles.Divider}></View>
         </View>

        );
  }

 pushToBooking(data){
   let _this = this;
     const { navigator } = this.props;
     if(navigator) {
       console.log(this.props.data.title);
       navigator.push({
         title: this.props.data.title,
         component: BookingSite,
           params: {
               data: this.props.data,
           }
         });
     }
 }


  render(){
    if(!this.state.loaded){
      return (
        <View style={styles.DetailBox}>
          <Text style={styles.titleText}>
            {'\n'}Loading Detials...{'\n'}
          </Text>
         </View>
      );
    }else{
    return(

      <ScrollView style={styles.container}>
      <Image key={1} source={{uri:this.props.data.images}} style={Mainstyles.itemStyle}/>
      <ScrollableTabView
      style={{marginTop: 10}}
      renderTabBar={() => <DefaultTabBar />}
      tabBarUnderlineColor='black'
      tabBarBackgroundColor='rgba(2,0,252,1)'
      tabBarActiveTextColor='white'
      tabBarInactiveTextColor='white'
      tabBarTextStyle={{fontSize: 18}}
      >

    <View tabLabel='Description'>
    <View style={styles.DetailBox}>
      <Text style={styles.titleText}>
        {'\n'}{this.props.data.title}{'\n'}
      </Text>
      <Text style={styles.MoreInfoText}>
        {this.props.data.content}
      </Text>
      <Text style={styles.MoreInfoText}>
      DATE: {this.props.data.date}
      </Text>
      <Text style={styles.MoreInfoText}>
      TIME: {this.props.data.time}
      </Text>
      <Text style={styles.MoreInfoText}>
      RUNTIME: {this.props.data.runtime}
      </Text>
      <Text style={styles.MoreInfoText}>
      VENUE: {this.props.data.venue}
      </Text>
      <Text style={styles.MoreInfoText}>
      PRICE: {this.props.data.price}{'\n'}{'\n'}
      </Text>
      </View>
      <TouchableOpacity onPress={()=>this.pushToBooking(this.props.data)}>
        <View style={styles.textLoginViewStyle}>
            <Text style={styles.ButtonText}>Book Now</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.DetailBox}>
      <Text style={styles.MoreInfoText}>
      {'\n'}* Concession prices available to: Seniors 65+, Students with ID, Equity Members with ID.{'\n'}{'\n'}
      </Text>
      </View>
    </View>

    <View tabLabel='Review'>
    <View style={styles.DetailBox}>
    <Text style={styles.titleText}>{'\n'}Overall Rating{'\n'}</Text>
    <StarRatingBar
    score={this.props.data.score}
    allowsHalfStars={true}
    accurateHalfStars={true}
    />
    <View style={styles.space}>
    </View>
    </View>
    <TouchableOpacity onPress={() => {this.pushToComment(this.props.data)}}>
      <View style={styles.textLoginViewStyle}>
          <Text style={styles.ButtonText}>Write Comment</Text>
      </View>
    </TouchableOpacity>
    <View style={styles.DetailBox}>
    <Text style={styles.titleText}>{'\n'}User Reviews{'\n'}</Text>
    <View style={styles.Divider}></View>
    <ListView
      dataSource={this.state.dataSource}
      renderRow={this._renderRow.bind(this)}
    />
    </View>
    </View>
  </ScrollableTabView>
  </ScrollView>

    )
    }
  }


}
const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    backgroundColor: 'rgba(2,0,252,1)',
  },
  titleText: {
    fontFamily:'GT-Haptik-Bold',
    color:'white',
    fontSize: 24,
    lineHeight: 30,
  },
  headText: {
    fontFamily:'GT-Haptik-Bold',
    paddingTop: 0,
    paddingLeft: 85,
    color:'black',
    fontSize:28,
    textAlign :'center',

  },
  EventTimeText:{
    fontFamily:'GT-Haptik-Regular',
    color:'white',
    fontSize:18,
  },
  EventImageBox:{
      flexDirection:'row',
  },
  DetailBox:{
    justifyContent:'flex-start',
    alignSelf:'flex-start',
    alignItems:'flex-start',
    paddingLeft: 30,
    paddingRight: 30,
  },
  Divider:{
    borderStyle:'solid',
    borderBottomWidth:1,
    width: Dimensions.get('window').width-60,
    borderBottomColor : 'rgba(1,165,175,1)',
  },
  MoreInfoText:{
    fontFamily:'GT-Haptik-Regular',
    color:'white',
    fontSize: 16,
    lineHeight: 30,
  },
  textLoginViewStyle: {
      width: 300,
      height: 45,
      backgroundColor: 'rgba(0,250,0,1)',
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
  },
  comment:{
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  ButtonText:{
    fontFamily:'GT-Haptik-Regular',
    marginTop:2,
    color:'black',
    fontSize: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  space:{
    height: 40,
    backgroundColor: 'transparent',
  },
});
