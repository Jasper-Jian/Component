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
          <Image source={require('../images/News_Head_Image.png')}
                style={styles.headImage}
          />
      </TouchableOpacity>
      <View style={styles.space}>
      </View>
      <TouchableOpacity onPress = {this.clickJumpToBar.bind(this)}>
      <Image source={require('../images/Bar_Head_Image.png')}
            style={styles.headImage}
      />
      </TouchableOpacity>
      <View style={styles.space}>
      </View>
      <TouchableOpacity onPress = {this.clickJumpToSupport.bind(this)}>
      <Image source={require('../images/Support_Head_Image.png')}
            style={styles.headImage}
      />
      </TouchableOpacity>
      <View style={styles.space}>
      </View>
      <TouchableOpacity onPress = {this.clickJumpToVisit.bind(this)}>
      <Image source={require('../images/Visit_Head_Image.png')}
            style={styles.headImage}
      />
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
      backgroundColor: '#C0CCD9',
      alignItems: 'center',

  },
  headText: {
    paddingTop: 8,
    color:'black',
    fontSize:24,
    fontWeight:'bold',
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
    backgroundColor: 'transparent',
  }
});
