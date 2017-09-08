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
} from 'react-native';
import comment from '../Event/comment';
import BookingSite from '../Event/BookingSite';

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
  pushToComment() {

    this.props.navigator.push(
         {
             component: comment,//Navigate page
             title: 'comment'
         }
    );
  }
  _renderRow(data){

      return (
        <View style={styles.DetailBox}>
          <Text style={styles.titleText}>
            sender: {data.data.sender}
            score: {data.data.score}
            content：{data.data.content}
          </Text>
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
      {'\n'}* Concession prices available to: Seniors 65+, Students with ID, Equity Members with ID.
      </Text>
      </View>
    </View>

    {/* //重构data structure
    //增加database 到这个js file 并写入
    //更改用户rule to can be use after login success or decteced */}

    <View tabLabel='Review' style={styles.DetailBox}>
    <Text style={styles.titleText}>{'\n'}Rating{'\n'}</Text>
    <StarRatingBar
    score={this.props.data.score}
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
    <ListView
      dataSource={this.state.dataSource}
      renderRow={this._renderRow.bind(this)}
    />
    </View>
  </ScrollableTabView>
  </ScrollView>


      </View>
    )
    }
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
