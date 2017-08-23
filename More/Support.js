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
} from 'react-native';

export default class Support extends Component {
  static defaultProps = {
    title: 'Support'
  };

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
      </View>
      <ScrollView>
        <Image source={require('../images/Support_Head_Image.png')}
              style={styles.headImage}
        />

        <View style={styles.textBox}>
          <Text style={styles.textStyle}>
          We need your support to keep doing what we do! {'\n'}{'\n'}
          At Basement, we truly love what we do, and we do it for the love!! As a charitable trust, we’re not about making $$. All profits go straight back into running the theatre, and supporting artists through our development programmes. {'\n'}{'\n'}
          There’s lots of yummy snacks at the bar, including Proper Crisps. We also bring Tanukis to you, cos we know one set of stairs is just too much.More than 70% of our annual costs need to be met through funding, grants, donations and sponsorships - and we love the amazing organisations and the special people who get behind us and contribute to that. We would love to grow our support network further, to ensure that we can consistently nurture artists, give audiences fresh experiences, and lead the way in developing arts initiatives for emerging talent in Auckland.{'\n'}{'\n'}
          Auckland Council and Creative NZ really make it possible for us to stay afloat. Other organisations like Pub Charity, Foundation North, The Wallace Arts Trust and the Waitemata Local Board, give us the support we need to flourish and help our artists have the best experience possible in our space. {'\n'}{'\n'}
          Sir John Logan Campbell Residuary Estate, The Lion Foundation, The Trusts Community Foundation and Four Winds Foundation help to make our Schools Programme a success story we are really proud of.{'\n'}{'\n'}
          Omnigraphics, Soar Printing and Phantom Billstickers offer us so much support in their respective industries, it’s impossible to imagine how we would get by without them. {'\n'}{'\n'}
          Then there’s our Basement Lovers Club. These are people who lend themselves to Basement in many and varied ways, some give us the gift of their time and expertise, assisting us with specific projects, others offer a cash contribution to the theatre, or to a specific programme. {'\n'}{'\n'}
          However you want to show Basement your love, we will always welcome your support with open arms. {'\n'}{'\n'}
          <Text style={{fontWeight:'bold'}}>
          Huge thanks to long-time Basement supporter Jonty Crane, and to Auckland Council, whose kind contributions made this website possible. Thanks to Studio Alexander for our award-winning design. {'\n'}{'\n'}
          </Text>
          </Text>
          <View style={styles.Divider}></View>
          <Text style={styles.bigText}>
          {'\n'}GET INVOLVED!{'\n'}
          </Text>
          <Text style={styles.textStyle}>
          Click here to donate to The Basement Theatre’s Give a Little page{'\n'}{'\n'}
          Click here to donate to The Basement Theatre’s Schools Programme Give a Little page{'\n'}{'\n'}
          If your business is interested in supporting The Basement, or one of our programmes, please contact:{'\n'}{'\n'}
          Sam Snedden{'\n'}
          Business and Industry Development Manager{'\n'}
          Phone +64 9 302 2960{'\n'}
          sam@basementtheatre.co.nz{'\n'}{'\n'}
          </Text>
          <View style={styles.Divider}></View>
          <Text style={styles.bigText}>
          {'\n'}BIG UPS TO THESE RAD ORGANISATIONS FOR THEIR ONGOING SUPPORT!{'\n'}{'\n'}
          </Text>
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
        backgroundColor: 'white',
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
        backgroundColor: '#C0CCD9',
        alignItems: 'center',
    },
    backButton: {
        height: 35,
        width: 35,
        resizeMode: 'stretch',
    },
    textBox:{
      flexDirection: 'column',
      paddingTop: 40,
      paddingLeft: 50,
      paddingRight: 50,
      backgroundColor: 'white',
    },
    textStyle:{
      fontSize: 16,
      color: 'black',
      lineHeight: 30,
    },
    Divider:{
      borderStyle:'solid',
      borderBottomWidth:1,
      borderBottomColor : '#C0CCD9',
    },
    bigText:{
      fontSize: 24,
      color: 'black',
      lineHeight: 30,
      fontWeight:'bold',
    }
  })
