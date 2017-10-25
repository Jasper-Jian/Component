import React, { Component } from 'react';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
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
import EventDetails from '../Event/BTEventDetail';
var {width}=Dimensions.get('window').width;
var monthly = firebase.database().ref("2017/October");
var query = firebase.database().ref("2017/HomePage");
import styles from '../StylesSheet';
import {firebaseRef} from '../services/firebase';
import firebase from 'firebase';
import BookingSite from '../Event/BookingSite';
export default class defaultEvent extends Component{
  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var ds2 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    items=[];
    monthlyItems=[];
    this.state = {
        dataSource: ds,
        loaded:false,
        dataSource2: ds2,
      };

  }
  componentWillMount() {
      query.once('value',(snap)=>{
        snap.forEach((data)=>{
          items.push({
            key:data.key,
            data:data.val(),
          });
        });
          this.setState({
            dataSource:this.state.dataSource.cloneWithRows(items),

        });
      })
      monthly.once('value',(snap)=>{
        snap.forEach((data)=>{
          monthlyItems.push({
            key:data.key,
            data:data.val(),
          });
        });
          this.setState({
            dataSource2:this.state.dataSource.cloneWithRows(monthlyItems),
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
  pushToBooking(data){
    let _this = this;
      const { navigator } = this.props;
      if(navigator) {
        console.log(data.data.title);
        navigator.push({
          title: data.data.title,
          component: BookingSite,
            params: {
                data: data.data,
            }
          });
      }
  }
  _renderRow(data){
      return (
            <View style={styles.ImageBox}>
                <Image source={{uri: data.data.images}}style={styles.TitleitemStyle}/>
                <Text style={styles.DetailText}>{data.data.title}</Text>
                <View style={styles.Divider}></View>
                <Text style={styles.TimeText}>{data.data.date},   {data.data.time}</Text>
                <View style={styles.Divider}></View>
                <View style={styles.InfoBTStyle}>
                <TouchableOpacity onPress={()=>this._pressRow(data)}>
                    {/*Info button*/}
                    <View style={styles.InfoViewStyle}>
                        <Text style={styles.MoreInfoText}>More Info</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.pushToBooking(data)}>
                    {/*Info button*/}
                    <View style={styles.BookNowViewStyle}>
                        <Text style={styles.BookNowText}>Book Now</Text>
                    </View>
                </TouchableOpacity>
                </View>
            </View>

          );
  }

  _renderMonthlyRow(data){
      return (
          <TouchableOpacity onPress={()=>this._pressRow(data)}>
              <View style={Eventstyles.EventImageBox}>
              <View>
                <Image source={{uri: data.data.images}} style={Eventstyles.EventImageItem}></Image>
              </View>
                <View>
                  <Text style={Eventstyles.ComingSoonText}>
                  {data.data.title}
                  </Text>
                  <View style={Eventstyles.Divider}></View>
                  <Text style={Eventstyles.EventTimeText}>
                   {data.data.date}, {data.data.time}
                   </Text>
                   <View style={Eventstyles.Divider}></View>
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
        <View style={Eventstyles.container}>
        <View style={Eventstyles.headerBarContainer}>
        <Text style={Eventstyles.headText}>Event</Text>
        </View>
        <Image source={require('../images/whats_on_head_image.png')}
                style={{resizeMode: 'stretch',
                        width:Dimensions.get('window').width,
                        height:(Dimensions.get('window').width)/2,
                        marginBottom:20}}
          />
          <Text style={Eventstyles.titleText}> {'\n'}Loading Detials....{'\n'}</Text>
        </View>
      );
    }else{
      return (
        <View style={styles.container}>
        <View style={Eventstyles.headerBarContainer}>
        <Text style={Eventstyles.headText}>What’s On</Text>
        </View>
        <ScrollView>
        <Image source={require('../images/whats_on_head_image.png')}
                style={{resizeMode: 'stretch',
                        width:Dimensions.get('window').width,
                        height:(Dimensions.get('window').width)/2}}
          />
          <ScrollableTabView
          style={{marginTop: 10}}
          renderTabBar={() => <DefaultTabBar />}
          tabBarTextStyle={{fontSize: 18}}
          tabBarUnderlineColor='white'
          tabBarBackgroundColor='rgba(2,0,252,1)'
          tabBarActiveTextColor='white'
          tabBarInactiveTextColor='white'

          >

        <View tabLabel='On This Week'
              style={{alignSelf: 'center'}}
        >
           <ListView
             pageSize={4}
             initialListSize={10}
             dataSource={this.state.dataSource}
             renderRow={this._renderRow.bind(this)}
             style={Eventstyles.paddingBottom}
           />

           </View>
           <View tabLabel='On This Month'>

            <ListView
              pageSize={4}
              initialListSize={10}
              dataSource={this.state.dataSource2}
              renderRow={this._renderMonthlyRow.bind(this)}
              style={Eventstyles.paddingBottom}
            />
            </View>
          </ScrollableTabView>
           </ScrollView>
        </View>
      );
    }
  }
}

const Eventstyles = StyleSheet.create({
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
      backgroundColor: 'white',
  },
  headText: {
    fontFamily:'GT-Haptik-Bold',
    paddingTop: 8,
    color:'rgba(2,0,252,1)',
    fontSize:24,
    textAlign :'center',

  },
  EventTimeText:{
    fontFamily:'GT-Haptik-Regular',
    color:'black',
    fontSize:18,
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
    fontFamily:'GT-Haptik-Regular',
    fontSize:20,
    color:'black',
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:'transparent',
    color:'black',
    marginRight:130,
  },
  paddingBottom:{
    paddingBottom:50,
  }

});
