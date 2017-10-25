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

export default class FillingForm extends Component {
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
      <Text style={styles.headText}>Submission Form for Artist</Text>
      </View>
      <WebView
        startInLoadingState={true}
        contentInset={{top:20,left:10,right:10}}
        scalesPageToFit ={false}
        source={{uri: 'https://docs.google.com/forms/d/1QypBHmk8ktWXmobJ1HTF3JyiduykRsMVmm96kqVT_O0/viewform?edit_requested=true'}}
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
      fontFamily: 'GT-Haptik-Bold',
      paddingTop: 0,
      paddingLeft: 15,
      color:'rgba(2,0,252,1)',
      fontSize:24,
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
