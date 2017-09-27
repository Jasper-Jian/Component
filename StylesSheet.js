'use restict'
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';
const StylesSheet = StyleSheet.create({
  container:{
    flexDirection:'column',
  },
  itemStyle: {
      width:Dimensions.get('window').width,
      height:200,
      resizeMode: 'stretch'
  },
  indicatorStyle:{
    width:Dimensions.get('window').width,
    height:25,
    backgroundColor: 'rgba(0,0,0,0.4)',
    bottom:25,
    justifyContent:'flex-end',
    flexDirection:'row',
    alignItems:'center',
    margin:0,
    padding:0,
  },
  TitleStyle:{
    bottom:25,
    width: Dimensions.get('window').width,
    backgroundColor: '#C0CCD9',
    alignItems:'center',
    paddingBottom:50,
  },
  TitleText:{
    fontSize:30,
    color:'black',
    fontWeight:'500',
    marginRight:120,
  },
  MoreInfoText:{
    marginTop:5,
    color:'white',
    fontWeight:'300',
    fontSize: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TitleitemStyle:{
    margin:10,
    marginBottom:0,
    marginTop:10,
    height: 180,
    resizeMode: 'cover'
  },
  ImageBox:{
    margin:5,
    height:300,
    backgroundColor:'rgba(255,255,255,1)',
    width: Dimensions.get('window').width-30,
  },
  DetailText:{
    color:'rgba(1,165,175,1)',
    fontSize:20,
    justifyContent:'flex-start',
    marginLeft:15,
    fontWeight:'800',
  },
  Divider:{
    marginLeft:15,
    borderStyle:'solid',
    borderBottomWidth:1,
    width: Dimensions.get('window').width-60,
    borderBottomColor : 'rgba(1,165,175,1)',
  },
  TimeText:{
    marginLeft:15,
    color:'rgba(1,165,175,1)',
    fontWeight:'400',
  },
  InfoBTStyle:{
    flexDirection:'row',
  },
  InfoViewStyle:{
    marginLeft:15,
    width: (Dimensions.get('window').width-60)/2,
    height: 35,
    backgroundColor: 'rgba(1,165,175,1)',
    marginTop: 10,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  BookNowViewStyle:{
    width: (Dimensions.get('window').width-60)/2,
    marginRight:25,
    height: 35,
    backgroundColor: 'white',
    borderStyle:'solid',
    borderColor : 'rgba(1,165,175,1)',
    borderWidth:0.8,
    marginTop: 10,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  BookNowText:{
    marginTop:5,
    color:'rgba(1,165,175,1)',
    fontWeight:'300',
    fontSize: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SearchBarContainer: {
      flexDirection: 'row',
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 0,
      height: 48,
      backgroundColor: '#C0CCD9',
      alignItems: 'center',
  },
  sideMenu: {
      height: 35,
      width: 35,
      resizeMode: 'stretch'
  },
  searchBox: {
      height: 30,
      flexDirection: 'row',
      borderRadius: 5,
      backgroundColor: '#C0CCD9',
      borderColor: 'black',
      borderWidth: 2,
      flex: 1,
      alignItems: 'center',
      marginLeft: 8,
      marginRight: 12
  },
  searchIcon: {
      marginLeft: 6,
      marginRight: 6,
      width: 16.7,
      height: 16.7,
      resizeMode: 'stretch'
  },
  searchInputText: {
      flex: 1,
      backgroundColor: 'transparent',
      fontSize: 14,
      marginTop: -6.65,
      marginBottom: -6.65,

  },
  button:{
        position:'absolute',
        padding:20,
        top:20
    },
});
  module.exports = StylesSheet;
