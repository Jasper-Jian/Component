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
  TextInput,
  WebView
} from 'react-native';

export default class FillingBoxOfficeForm extends Component {
  clickJump(){
    const{navigator} = this.props;
    if(navigator){
      navigator.pop();
    }
  }

  render(){
    return(
      <View style={styles.container}>
      <View style={styles.headerBarContainer}>
      <TouchableOpacity onPress = {this.clickJump.bind(this)}>
        <Image source={require('../images/icon_camera_back_normal.png')}
              style={styles.backButton}
        />
      </TouchableOpacity>
      <Text style={styles.headText}>Submit Box Office Form</Text>
      </View>
      <WebView
        startInLoadingState={true}
        contentInset={{top:20,left:10,right:10}}
        scalesPageToFit ={false}
        source={{uri: 'https://docs.google.com/forms/d/1appmdvTW2P5u_mjX3_RWwqPGnebQqwduzgJt25pgl7g/viewform?edit_requested=true'}}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        //set to full screen
        flex: 1,
        backgroundColor: 'white',
    },
    headImage: {
      width:Dimensions.get('window').width,
      height:200,
      resizeMode: 'stretch'
    },
    headText: {
      paddingTop: 0,
      paddingLeft: 15,
      color:'rgb(2,0,252)',
      fontSize:24,
      fontFamily:'GT-Haptik-Bold',
      textAlign :'center',

    },
    headerBarContainer: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 0,
        height: 48,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    backButton: {
        height: 35,
        width: 35,
        resizeMode: 'stretch',
    },
  })
