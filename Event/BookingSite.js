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

export default class BookingSite extends Component {
  constructor(props){
    super(props);
    console.log(this.props.data);
    console.log(this.props.data.title);
  }
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
      <Text style={styles.headText}>{this.props.data.title}</Text>
      </View>
      <WebView
        startInLoadingState={true}
        contentInset={{top:20,left:10,right:10}}
        scalesPageToFit ={false}
        source={{uri:this.props.data.link}}
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
      color:'black',
      fontSize:24,
      fontWeight:'bold',
      textAlign :'center',

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
    backButton: {
        height: 35,
        width: 35,
        resizeMode: 'stretch',
    },
  })
