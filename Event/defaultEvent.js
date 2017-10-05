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
  ListView,
} from 'react-native';
import Mainstyles from '../StylesSheet';
import EventDetails from '../Event/BTEventDetail';
var {width}=Dimensions.get('window').width;
var query = firebase.database().ref("2017/March");
var query = firebase.database().ref("2017/HomePage");
import {firebaseRef} from '../services/firebase';
import firebase from 'firebase';
export default class defaultEvent extends Component{
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
      query.on('child_added',(snap)=>{
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

  _pressRow(data){
    let _this = this;
      const { navigator } = this.props;
      if(navigator) {
        navigator.push({
          title: data.data.title,
          component: EventDetails,
            params: {
                data: data.data,
            }
          });
      }
  }

  _renderRow(data){
      return (
          <TouchableOpacity onPress={()=>this._pressRow(data)}>
              <View style={styles.EventImageBox}>
              <View>
                <Image source={{uri: data.data.images}} style={styles.EventImageItem}></Image>
              </View>
                <View>
                  <Text style={Mainstyles.TitleText}>
                  {data.data.title}
                  </Text>
                  <View style={styles.Divider}></View>
                  <Text style={styles.EventTimeText}>
                   {data.data.date}, {data.data.time}
                   </Text>
                   <View style={styles.Divider}></View>
                 </View>
               </View>
          </TouchableOpacity>
          );
  }

  clickJumpToDetails(){
      const{navigator} = this.props;
      if(navigator){
        navigator.push({　　
        name: "EventDetails",
        component: EventDetails
        });
      }
  }
  clickJumpToBar(){
      const{navigator} = this.props;
      if(navigator){
        navigator.push({　　
        name: "Bar",
        component: Bar
        });
      }
  }
  clickJumpToSupport(){
      const{navigator} = this.props;
      if(navigator){
        navigator.push({　　
        name: "Support",
        component: Support
        });
      }
  }
  render() {
    if(!this.state.loaded){
      return (
        <View style={styles.container}>
        <View style={styles.headerBarContainer}>
        <Text style={styles.headText}>Event</Text>
        </View>
        <Image source={require('../images/whats_on_head_image.png')}
                style={{resizeMode: 'stretch',
                        width:Dimensions.get('window').width,
                        height:(Dimensions.get('window').width)/2,
                        marginBottom:20}}
          />
          <Text style={styles.titleText}> {'\n'}Loading Detials....{'\n'}</Text>
        </View>
      );
    }else{
      return (
        <View style={styles.container}>
        <View style={styles.headerBarContainer}>
        <Text style={styles.headText}>What‘s On</Text>
        </View>
        <ScrollView>
        <Image source={require('../images/whats_on_head_image.png')}
                style={{resizeMode: 'stretch',
                        width:Dimensions.get('window').width,
                        height:(Dimensions.get('window').width)/2}}
          />
          <Text style={[styles.ComingSoonText,{alignSelf:'center'}]}>
          On This Week
          </Text>

           <ListView
             pageSize={4}
             initialListSize={10}
             dataSource={this.state.dataSource}
             renderRow={this._renderRow.bind(this)}
             style={styles.paddingBottom}
           />
           <Text style={[styles.ComingSoonText,{alignSelf:'center'}]}>
           On This Month
           </Text>
           <Text style={[styles.ComingSoonText,{alignSelf:'center'}]}>
           On This Month
           </Text>
        </ScrollView>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    backgroundColor:'#F5F5F5',
  },
  headerBarContainer: {
      flexDirection: 'column',
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 0,
      height: 48,
      backgroundColor: '#C0CCD9',
  },
  headText: {
    paddingTop: 8,
    color:'black',
    fontSize:24,
    fontWeight:'bold',
    textAlign :'center',

  },
  EventTimeText:{
    color:'black',
    fontSize:18,
    fontWeight:'400',
  },
  EventImageBox:{
    flexDirection:'row',
    margin:3,
    backgroundColor:'white',
  },
  EventImageItem:{
   height:110,
   padding:10,
   marginRight:5,
   resizeMode:'cover',
   width:Dimensions.get('window').width/3,
  },
  Divider:{
    borderStyle:'solid',
    borderBottomWidth:1,
    margin:3,
    borderBottomColor : 'black',
  },
  ComingSoonText:{
    fontSize:20,
    color:'black',
    paddingTop:5,
    paddingBottom:5,
    fontWeight:'800',
    backgroundColor:'transparent',
  },
  paddingBottom:{
    paddingBottom:50,
  }

});
