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
} from 'react-native';

import News from '../More/News';
import Bar from '../More/Bar';
import Support from '../More/Support';
import Visit from '../More/Visit';
import ForArtist from '../More/ForArtist';
import OurStory from '../More/OurStory';
import SchoolsProgramme from '../More/SchoolsProgramme';
import LoversClub from '../More/LoversClub';

export default class defaultMore extends Component{
  clickJumpToNews(){
      const{navigator} = this.props;
      if(navigator){
        navigator.push({　　
        name: "News",
        component: News
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
  clickJumpToVisit(){
      const{navigator} = this.props;
      if(navigator){
        navigator.push({　　
        name: "Visit",
        component: Visit
        });
      }
  }
  clickJumpToForArtist(){
      const{navigator} = this.props;
      if(navigator){
        navigator.push({　　
        name: "ForArtist",
        component: ForArtist
        });
      }
  }
  clickJumpToOurStory(){
      const{navigator} = this.props;
      if(navigator){
        navigator.push({　　
        name: "OurStory",
        component: OurStory
        });
      }
  }
  clickJumpToSchoolsProgramme(){
      const{navigator} = this.props;
      if(navigator){
        navigator.push({　　
        name: "SchoolsProgramme",
        component: SchoolsProgramme
        });
      }
  }
  clickJumpToLoversClub(){
      const{navigator} = this.props;
      if(navigator){
        navigator.push({　　
        name: "LoversClub",
        component: LoversClub
        });
      }
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.headerBarContainer}>
      <Text style={styles.headText}>More</Text>
      </View>
      <ScrollView>
      <View style={styles.space}>
      </View>
      <TouchableOpacity onPress = {this.clickJumpToNews.bind(this)}>
      <View style={styles.Divider}>
      </View>
      <View style={{backgroundColor:'white',flexDirection: 'row'}}>
      <Image source={require('../images/News.png')} style={{width:40, height:40,resizeMode:'stretch',alignSelf:'center',marginLeft: 30,}}/>
      <Text style={{fontFamily: 'GT-Haptik-Regular', fontSize: 20, marginTop:10, marginBottom:10, marginLeft: 20, color: 'black'}}>
      News
      </Text>
      <Image source={require('../images/next.png')} style={{width:23, height:23,resizeMode:'stretch',alignSelf:'center',marginLeft: 180}}/>
      </View>
      <View style={styles.Divider}>
      </View>
      </TouchableOpacity>

      <View style={styles.space}>
      </View>

      <TouchableOpacity onPress = {this.clickJumpToBar.bind(this)}>
      <View style={styles.Divider}>
      </View>
      <View style={{backgroundColor:'white',flexDirection: 'row'}}>
      <Image source={require('../images/Bar.png')} style={{width:30, height:30,resizeMode:'stretch',alignSelf:'center',marginLeft: 35,}}/>
      <Text style={{fontFamily: 'GT-Haptik-Regular', fontSize: 20, marginTop:10, marginBottom:10, marginLeft: 25, color: 'black'}}>
      Bar
      </Text>
      <Image source={require('../images/next.png')} style={{width:23, height:23,resizeMode:'stretch',alignSelf:'center',marginLeft: 202}}/>
      </View>
      <View style={styles.Divider}>
      </View>
      </TouchableOpacity>

      <View style={styles.space}>
      </View>

      <TouchableOpacity onPress = {this.clickJumpToSupport.bind(this)}>
      <View style={styles.Divider}>
      </View>
      <View style={{backgroundColor:'white',flexDirection: 'row'}}>
      <Image source={require('../images/Support.png')} style={{width:30, height:30,resizeMode:'stretch',alignSelf:'center',marginLeft: 35,}}/>
      <Text style={{fontFamily: 'GT-Haptik-Regular', fontSize: 20, marginTop:10, marginBottom:10, marginLeft: 25, color: 'black'}}>
      Support
      </Text>
      <Image source={require('../images/next.png')} style={{width:23, height:23,resizeMode:'stretch',alignSelf:'center',marginLeft: 160}}/>
      </View>
      <View style={styles.Divider}>
      </View>
      </TouchableOpacity>

      <View style={styles.space}>
      </View>

      <TouchableOpacity onPress = {this.clickJumpToVisit.bind(this)}>
      <View style={styles.Divider}>
      </View>
      <View style={{backgroundColor:'white',flexDirection: 'row'}}>
      <Image source={require('../images/Visit.png')} style={{width:30, height:30,resizeMode:'stretch',alignSelf:'center',marginLeft: 35,}}/>
      <Text style={{fontFamily: 'GT-Haptik-Regular', fontSize: 20, marginTop:10, marginBottom:10, marginLeft: 25, color: 'black'}}>
      Visit
      </Text>
      <Image source={require('../images/next.png')} style={{width:23, height:23,resizeMode:'stretch',alignSelf:'center',marginLeft: 190}}/>
      </View>
      <View style={styles.Divider}>
      </View>
      </TouchableOpacity>

      <View style={styles.space}>
      </View>

      <TouchableOpacity onPress = {this.clickJumpToForArtist.bind(this)}>
      <View style={styles.Divider}>
      </View>
      <View style={{backgroundColor:'white',flexDirection: 'row'}}>
      <Image source={require('../images/ForArtist.png')} style={{width:30, height:30,resizeMode:'stretch',alignSelf:'center',marginLeft: 37,}}/>
      <Text style={{fontFamily: 'GT-Haptik-Regular', fontSize: 20, marginTop:10, marginBottom:10, marginLeft: 23, color: 'black'}}>
      For Artist
      </Text>
      <Image source={require('../images/next.png')} style={{width:23, height:23,resizeMode:'stretch',alignSelf:'center',marginLeft: 145}}/>
      </View>
      <View style={styles.Divider}>
      </View>
      </TouchableOpacity>

      <View style={styles.space}>
      </View>

      <TouchableOpacity onPress = {this.clickJumpToOurStory.bind(this)}>
      <View style={styles.Divider}>
      </View>
      <View style={{backgroundColor:'white',flexDirection:'row'}}>
      <Image source={require('../images/OurStory.png')} style={{width:30, height:30,resizeMode:'stretch',alignSelf:'center',marginLeft: 35,}}/>
      <Text style={{fontFamily: 'GT-Haptik-Regular', fontSize: 20, marginTop:10, marginBottom:10, marginLeft: 22, color: 'black'}}>
      Our Story
      </Text>
      <Image source={require('../images/next.png')} style={{width:23, height:23,resizeMode:'stretch',alignSelf:'center',marginLeft: 149}}/>
      </View>
      <View style={styles.Divider}>
      </View>
      </TouchableOpacity>

      <View style={styles.space}>
      </View>

      <TouchableOpacity onPress = {this.clickJumpToSchoolsProgramme.bind(this)}>
      <View style={styles.Divider}>
      </View>
      <View style={{backgroundColor:'white',flexDirection:'row'}}>
      <Image source={require('../images/SchoolsProgramme.png')} style={{width:30, height:30,resizeMode:'stretch',alignSelf:'center',marginLeft: 37,}}/>
      <Text style={{fontFamily: 'GT-Haptik-Regular', fontSize: 20, marginTop:10, marginBottom:10, marginLeft: 22, color: 'black'}}>
      Schools Programme
      </Text>
      <Image source={require('../images/next.png')} style={{width:23, height:23,resizeMode:'stretch',alignSelf:'center',marginLeft: 51}}/>
      </View>
      <View style={styles.Divider}>
      </View>
      </TouchableOpacity>

      <View style={styles.space}>
      </View>

      <TouchableOpacity onPress = {this.clickJumpToLoversClub.bind(this)}>
      <View style={styles.Divider}>
      </View>
      <View style={{backgroundColor:'white',flexDirection:'row'}}>
      <Image source={require('../images/LoversClub.png')} style={{width:30, height:30,resizeMode:'stretch',alignSelf:'center',marginLeft: 37,}}/>
      <Text style={{fontFamily: 'GT-Haptik-Regular', fontSize: 20, marginTop:10, marginBottom:10, marginLeft: 23, color: 'black'}}>
      Lovers Club
      </Text>
      <Image source={require('../images/next.png')} style={{width:23, height:23,resizeMode:'stretch',alignSelf:'center',marginLeft: 127}}/>
      </View>
      <View style={styles.Divider}>
      </View>
      </TouchableOpacity>

      <View style={styles.space}>
      </View>

      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    backgroundColor: '#F5F5F5',
  },
  headerBarContainer: {
      flexDirection: 'column',
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 0,
      height: 48,
      backgroundColor: 'white',
      alignItems: 'center',

  },
  headText: {
    fontFamily:'GT-Haptik-Bold',
    paddingTop: 8,
    color:'rgba(2,0,252,1)',
    fontSize:24,
    textAlign :'center',

  },
  headImage: {
    width:Dimensions.get('window').width-30,
    height:200,
    resizeMode: 'stretch',
    alignSelf: 'center',
    paddingTop: 10,
    borderRadius: 20,
  },
  space:{
    height: 10,
    backgroundColor: '#F5F5F5',
  },
  Divider:{

    borderStyle:'solid',
    borderBottomWidth:1,
    width: Dimensions.get('window').width,
    borderBottomColor : 'white',
  },
});
