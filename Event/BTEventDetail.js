import React, { Component } from 'react';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import StarRatingBar from 'react-native-star-rating-view/StarRatingBar';
import {
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  BackAndroid,
  Linking,
  Navigator,
} from 'react-native';

import Mainstyles from '../StylesSheet';
import Event from '../Event/BTEventDetail';
import review from '../Event/review';
var {width}=Dimensions.get('window').width;
var DEFAULT_URL = 'https://www.iticket.co.nz/events/2017/may/the-faustus-project';
export default class EventDetails extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){


  }
  clickJump(){
    const{navigator} = this.props;
    if(navigator){
      navigator.pop();
    }
  }

  render() {
    let defaultName = 'review';
    let defaultComponent = review;
    return (
      <View style={styles.container}>
        <View style={styles.headerBarContainer}>
        <TouchableOpacity onPress = {this.clickJump.bind(this)}>
          <Image source={require('../images/icon_camera_back_normal.png')}
                style={styles.backButton}
          />
        </TouchableOpacity>
        <Text style={styles.headText}>{this.props.data.title}</Text>
        </View>
        <Image key={1} source={{uri:this.props.data.images}} style={Mainstyles.itemStyle}/>
      <Navigator
          initialRoute = {{
            name: defaultName,
            component: defaultComponent,
            params: {
                data: this.props.data,
            }
          }}
          configureScene = {(route) => {
            return Navigator.SceneConfigs.FloatFromRight;}}
          renderScene = {(route, navigator) =>{
            let Component = route.component;
            return <Component{...route.params} navigator = {navigator} />}}
      />
      </View>

    );
  }
};
const styles = StyleSheet.create({
  container:{
    flexDirection:'column',
    backgroundColor:'#C0CCD9',
    flex:1,
  },
  titleText: {
    color:'black',
    fontWeight:'bold',
    fontSize: 24,
    lineHeight: 30,
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
  headText: {
    paddingTop: 0,
    paddingLeft: 85,
    color:'black',
    fontSize:24,
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
