import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Navigator,
  ListView
} from 'react-native';
import Mainstyles from '../StylesSheet';
import EventDetails from '../Event/BTEventDetail';
import defaultEvent from '../Event/defaultEvent';
var {width}=Dimensions.get('window').width;
export default class Event extends Component{
  render(){
    let defaultName = 'defaultEvent';
    let defaultComponent = defaultEvent;

    return(
      <Navigator
          initialRoute = {{name: defaultName, component: defaultComponent}}
          configureScene = {(route) => {
            return Navigator.SceneConfigs.FloatFromRight;}}
          renderScene = {(route, navigator) =>{
            let Component = route.component;
            return <Component{...route.params} navigator = {navigator} />}}
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    backgroundColor: '#F5FCFF',
  },
  headImage: {
    width:Dimensions.get('window').width,
    height:200,
    resizeMode: 'stretch'
  },
});
