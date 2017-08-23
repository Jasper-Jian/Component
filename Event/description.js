import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  BackAndroid,
  Linking
} from 'react-native';

import Mainstyles from '../StylesSheet';
import Event from '../Event/BTEventDetail';
var {width}=Dimensions.get('window').width;
var DEFAULT_URL = 'https://www.iticket.co.nz/events/2017/may/the-faustus-project';

export default class description extends Component {

render(){
  return(

    <View>
      <View style={styles.DetailBox}>
        <Text style={Mainstyles.TitleText}>
          Tassel Me This
        </Text>
        <Text style={styles.MoreInfoText}>Shani Dickins & Jessie McCall hunt amongst glittering personal baggage for a Spectassular to call their own.
        </Text>
        <Text style={styles.MoreInfoText}>
        A dance theatre romp for anyone who has clung (for dear life) to a certain special moment.Winner of Best of Fringe 2015 at the Dunedin Fringe.
        </Text>
        <Text style={styles.MoreInfoText}>
        A brilliant visual masterpiece - Theatreview.
        </Text>
        <Text style={styles.MoreInfoText}>
        DATE: 11 APR - 15 APR
        </Text>
        <Text style={styles.MoreInfoText}>
        TIME: 8:00 PM
        </Text>
        <Text style={styles.MoreInfoText}>
        RUNTIME: 50 MINUTES
        </Text>
        <Text style={styles.MoreInfoText}>
        VENUE: THEATRE
        </Text>
        <Text style={styles.MoreInfoText}>
        PRICE: $16 - $20
        </Text>
      </View>
        <TouchableOpacity onPress={() => {Linking.openURL(DEFAULT_URL)}}>
          <View style={styles.textLoginViewStyle}>
              <Text style={styles.ButtonText}>Book Now</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.MoreInfoText}>
        * Concession prices available to: Seniors 65+, Students with ID, Equity Members with ID.
        </Text>
    </View>

  )
}

}
