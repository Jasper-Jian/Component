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
  //http://www.jianshu.com/p/22de6734d858?utm_campaign=maleskine&utm_content=note&utm_medium=pc_all_hots&utm_source=recommendation
  //
  //data reading firebase
  //https://invertase.io/react-native-firebase/#/modules/database?id=reading-data

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
                   {data.data.date},   {data.data.time}
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
          <Text style={styles.ComingSoonText}>
          Coming Soon Event
          </Text>
          <Text style={styles.titleText}> {'\n'}Loading Detials....{'\n'}</Text>
        </View>
      );
    }else{
      return (
        <View style={styles.container}>
        <View style={styles.headerBarContainer}>
        <Text style={styles.headText}>Event</Text>
        </View>
          <Text style={styles.ComingSoonText}>
          Coming Soon Event
          </Text>

           <ListView
             dataSource={this.state.dataSource}
             renderRow={this._renderRow.bind(this)}
           />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    backgroundColor:'#C0CCD9',
    paddingBottom:100
  },
  headerBarContainer: {
      flexDirection: 'column',
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 0,
      height: 48,
      backgroundColor: '#C0CCD9',
      alignItems: 'center',

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
    margin:5,
    backgroundColor:'#C0CCD9',
  },
  EventImageItem:{
   height:110,
   margin:2,
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
    fontSize:26,
    color:'white',
    paddingTop:5,
    paddingBottom:5,
    fontWeight:'800',
    backgroundColor:'rgba(0,0,0,.6)',
  },

});
