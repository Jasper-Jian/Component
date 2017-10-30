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
import review from '../Event/review';
var {width}=Dimensions.get('window').width;
export default class EventDetails extends Component{
  constructor(props){
    super(props);
    console.log(this.props.data);
    console.log(this.props.data.title);
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
    backgroundColor:'rgba(2,0,252,1)',
    flex:1,
  },
  titleText: {
    fontFamily:'GT-Haptik-Bold',
    color:'black',
    fontSize: 24,
    lineHeight: 30,
  },
  headerBarContainer: {
      flexDirection: 'row',
      paddingLeft: 10,
      paddingRight: 50,
      paddingTop: 0,
      backgroundColor: 'white',
      alignItems: 'center',
      height: 48,
  },
  headText: {
    fontFamily:'GT-Haptik-Bold',
    paddingTop: 0,
    paddingLeft: 15,
    color:'rgba(2,0,252,1)',
    fontSize:24,
    textAlign :'center',

  },
  EventTimeText:{
    fontFamily:'GT-Haptik-Regular',
    color:'white',
    fontSize:18,
  },
  EventImageBox:{
      flexDirection:'row',
      backgroundColor:'rgba(2,0,252,1)'
  },
  DetailBox:{
    justifyContent:'flex-start',
    alignSelf:'flex-start',
    alignItems:'flex-start',
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor:'rgba(2,0,252,1)',
  },
  Divider:{
    borderStyle:'solid',
    borderBottomWidth:3,
    borderBottomColor : 'white',
  },
  MoreInfoText:{
    color:'white',
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
    fontFamily:'GT-Haptik-Regular',
    marginTop:2,
    color:'white',
    fontSize: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  space:{
    height: 80,
    backgroundColor: 'rgba(2,0,252,1)',
  },
  backButton: {
      height: 35,
      width: 35,
      resizeMode: 'stretch',
  },
});
