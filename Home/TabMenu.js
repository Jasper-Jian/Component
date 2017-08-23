import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  Navigator,
} from 'react-native';

import defaultTabMenu from '../Home/defaultTabMenu';

export default class TabMenu extends Component{
  render(){
    let defaultName = 'defaultTabMenu';
    let defaultComponent = defaultTabMenu;

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
