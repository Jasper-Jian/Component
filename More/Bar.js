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
  Linking,
} from 'react-native';

export default class Bar extends Component {
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
      <Text style={styles.headText}>Bar</Text>
      </View>
      <ScrollView>
        <Image source={require('../images/Bar_Head_Image.png')}
              style={styles.headImage}
        />
        <View style={styles.textBox}>
          <Text style={styles.textStyle}>
          Ah, Basement Bar. Where the staff know your name, your entire showreel, and what you want to drink before you know it yourself.{'\n'}{'\n'}
          Come drink with us this season with picks from our favourite brew buddies including Garage Project, Funk Estate, and Panhead (plus like, 20 others).{'\n'}{'\n'}
          If wine’s what you’re after try one of our new cheap(ish) rosé pours or a smooth house Sav. The Deliverence Pinot Noir is always a winner. As always, we have a full range of spirits, bubbles, many more craft brews; and a jolly assortment of non-alcoholic goodness.{'\n'}{'\n'}
          There's lots of yummy snacks at the bar, including Proper Crisps, or you can order Japanese from our good mates at Tanuki's next door.{'\n'}{'\n'}
          So pull up a bean bag, order up large on the cabbage, and burrow into Basement for the season.{'\n'}{'\n'}
          <Text style={{fontFamily:'GT-Haptik-Bold'}}>
          Basement’s bar is open 5pm - late; Tuesday through Saturday.{'\n'}{'\n'}
          </Text>
          Functions and hostings welcome.{'\n'}{'\n'}
          </Text>

          <Image source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/587fef31e6f2e143105c33a3/5907ee6815d5db8f8bcff412/1493692009029/Bar-11.jpg'}}
                style={styles.middleImage}
          />
          <Image source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/587fef31e6f2e143105c33a3/5907ee669f7456d3d9be5993/1493692009858/Bar-4.jpg'}}
                style={styles.middleImage}
          />
          <Image source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/587fef31e6f2e143105c33a3/587fefc2e6f2e143105c3ce1/1484779522147/The+Basement+Shoot+%231+Web-94.jpg'}}
                style={styles.middleImage}
          />
          <Image source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/587fef31e6f2e143105c33a3/587fef82bebafb315a5590a3/1484779438916/The+Basement+Shoot+%231+Web-50.jpg'}}
                style={styles.middleImage}
          />
          <Image source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/587fef31e6f2e143105c33a3/5907ee6520099e374ad2bce8/1493692008901/Bar-2.jpg'}}
                style={styles.middleImage}
          />
          <Image source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/587fef31e6f2e143105c33a3/5907ee6703596e470a3c1c69/1493692059858/Bar-8.jpg'}}
                style={styles.middleImage}
          />
          <Image source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/587fef31e6f2e143105c33a3/587ff01929687f3924fb59fe/1484779588202/The+Basement+Shoot+%231+Web-97.jpg'}}
                style={styles.middleImage}
          />
          <Image source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/587fef31e6f2e143105c33a3/5907ee65d1758e63281991f1/1493692007292/Bar-1.jpg'}}
                style={styles.middleImage}
          />
          <Image source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/587fef31e6f2e143105c33a3/5907ee6620099e374ad2bd08/1493692009409/Bar-3.jpg'}}
                style={styles.middleImage}
          />
          <Image source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/587fef31e6f2e143105c33a3/5907ee6603596e470a3c1c3b/1493692007839/Bar-5.jpg'}}
                style={styles.middleImage}
          />
          <Image source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/587fef31e6f2e143105c33a3/5907ee6729687f9f3df3b356/1493692009676/Bar-6.jpg'}}
                style={styles.middleImage}
          />
          <Image source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/587fef31e6f2e143105c33a3/5907ee67725e250c61222fce/1493692009693/Bar-7.jpg'}}
                style={styles.middleImage}
          />
          <Image source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/587fef31e6f2e143105c33a3/587fef3115d5db76abd358b6/1493692076331/The+Basement+Shoot+%231+Web-47.jpg'}}
                style={styles.middleImage}
          />
          <Image source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/587fef31e6f2e143105c33a3/5907ee68d482e9bebd1a2961/1493692009928/Bar-9.jpg'}}
                style={styles.middleImage}
          />
          <Image source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/587fef31e6f2e143105c33a3/5907ee683a0411c14a018656/1493692009032/Bar-10.jpg'}}
                style={styles.middleImage}
          />
          <Image source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/587fef31e6f2e143105c33a3/5907ee68f5e231058f15c408/1493692009515/Bar-12.jpg'}}
                style={styles.middleImage}
          />
          <Image source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/587fef31e6f2e143105c33a3/587ff0ed6a49633508b23686/1484779817291/The+Basement+Shoot+%231+Web-66.jpg'}}
                style={styles.middleImage}
          />
          <Image source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/587fef31e6f2e143105c33a3/5907ee6946c3c49694b1713b/1493692009909/Bar-13.jpg'}}
                style={styles.middleImage}
          />
          <Image source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/587fef31e6f2e143105c33a3/5907ee698419c2d1358a46d7/1493692010661/Bar-15.jpg'}}
                style={styles.middleImage}
          />
          <Image source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/587fef31e6f2e143105c33a3/5907ee691b631bee5f60ce50/1493692009880/Bar-14.jpg'}}
                style={styles.middleImage}
          />

        </View>
        <View style={{backgroundColor:'#F5F5F5',
                      flexDirection: 'column',
                      paddingTop: 20,
                      paddingLeft: 30,
                      paddingRight: 30,}}>
        <Text style={styles.bigText}>
        Core Parners{'\n'}
        </Text>
        <View style={{flexDirection:'row',alignSelf:'center',marginTop:10}}>
        <TouchableOpacity onPress={ ()=>{ Linking.openURL('http://www.creativenz.govt.nz')}}>
        <Image source={require('../images/creative-nz.jpg')}
                style={[styles.icon, {width: 105, height: 70, marginRight:30}]}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://foundationnorth.org.nz')}}>
        <Image source={require('../images/foundation-north.jpg')}
                style={[styles.icon, {width: 105, height: 70}]}/>
        </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://www.aucklandcouncil.govt.nz')}}>
        <Image source={require('../images/auckland-council.jpg')}
                style={[styles.icon, {width: 105, height: 70,alignSelf:'center'}]}/>
        </TouchableOpacity>
        </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        //set to full screen
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    headImage: {
      width:Dimensions.get('window').width,
      height:200,
      resizeMode: 'stretch'
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
    headText: {
      fontFamily: 'GT-Haptik-Bold',
      paddingTop: 0,
      paddingLeft: (Dimensions.get('window').width-35)/4,
      color:'rgba(2,0,252,1)',
      fontSize:24,
      textAlign :'center',

    },
    textBox:{
      flexDirection: 'column',
      paddingTop: 40,
      paddingLeft: 30,
      paddingRight: 30,
      backgroundColor: 'white',
    },
    textStyle:{
      fontFamily:'GT-Haptik-Regular',
      fontSize: 14,
      color: 'black',
      lineHeight: 20,
    },
    middleImage:{
      width:Dimensions.get('window').width-60,
      height:Dimensions.get('window').width-60,
      resizeMode: 'stretch',
      paddingLeft:30,
      marginBottom: 30,
    },
    bigText:{
      fontFamily:'GT-Haptik-Bold',
      fontSize: 20,
      color: 'black',
      lineHeight: 20,
    },
  })
