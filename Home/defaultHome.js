'use restict'
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Dimensions,
  Image,
  Platform,
  TouchableOpacity,
  Linking,
  Navigator,
  ListView
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import Menu from '../Home/defaultTabMenu';
import styles from '../StylesSheet';
import Bar from '../More/Bar';
import Event from '../Event/BTEvent';
import EventDetails from '../Event/BTEventDetail';
import BookingSite from '../Event/BookingSite';
var query = firebase.database().ref("2017/HomePage");
import {firebaseRef} from '../services/firebase';
import firebase from 'firebase';
var ImageData = require('../ImageData.json');
var TimerMixin = require('react-timer-mixin');//import timer

let {width,height} = Dimensions.get('window');

export default class defaultHome extends Component{
    constructor(props) {
        super(props);//这一句不能省略，照抄即可
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        items=[];
        this.state={
            // selectedTab:'home'
            dataSource: ds,
            loaded:false,
            isOpen:false,
            selectedItem:'Home'
        }
    }
    toggle(){
        this.setState({
            isOpen:!this.state.isOpen,
        });
    }
    onMenuItemSelected = (item) =>{
        this.setState({
            isOpen: false ,
            selectedItem:item ,
         });
    }
    updateMenuState(isOpen){
        this.setState({
            isOpen:isOpen,
        })
    }
    componentWillMount() {
        query.on('value',(snap)=>{
          snap.forEach((data)=>{
            items.push({
              key:data.key,
              data:data.val(),
            });
          });
            this.setState({
              dataSource:this.state.dataSource.cloneWithRows(items),
              loaded:true
          });
        })
      }
      _pressRow(data){
        let _this = this;
          const { navigator } = this.props;
          if(navigator) {
            console.log(data.data.title);
            navigator.push({
              title: data.data.title,
              component: EventDetails,
                params: {
                    data: data.data,
                }
              });
          }
      }
      _renderRow(data){
          return (
                <View style={styles.ImageBox}>
                    <Image source={{uri: data.data.images}}style={styles.TitleitemStyle}/>
                    <Text style={styles.DetailText}>{data.data.title}</Text>
                    <View style={styles.Divider}></View>
                    <Text style={styles.TimeText}>{data.data.date},   {data.data.time}</Text>
                    <View style={styles.Divider}></View>
                    <View style={styles.InfoBTStyle}>
                    <TouchableOpacity onPress={()=>this._pressRow(data)}>
                        {/*Info button*/}
                        <View style={styles.InfoViewStyle}>
                            <Text style={styles.MoreInfoText}>More Info</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.pushToBooking(data)}>
                        {/*Info button*/}
                        <View style={styles.BookNowViewStyle}>
                            <Text style={styles.BookNowText}>Book Now</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                </View>

              );
      }
  render() {
    if(!this.state.loaded){
      return (
        <View>
            <Text style={styles.titleText}> {'\n'}Loading Detials....{'\n'}</Text>
        </View>

      );
    }else{
    const menu=<Menu onItemSelected={this.onMenuItemSelected}/>;
    return (
      <View style={styles.container}>
      <View style={styles.SearchBarContainer}>

      <View style={styles.searchBox}>

          <Image source={require('../images/icon_shop_search.png')}
                style={styles.searchIcon}/>
          <TextInput
              style={styles.searchInputText}
              keyboardType='web-search'
              placeholder='Search Events'
              underlineColorAndroid={'transparent'}
          />
      </View>
      <Image source={require('../images/BTLogo.png')} style={styles.sideMenu}/>

        </View>

        <ScrollView>
        <ScrollView
        horizontal={true}   // horizontal allignment
        showsHorizontalScrollIndicator={false}  // Hide horizontal indicator
        showsVerticalScrollIndicator={false}    // Hide Vertical indicator
        pagingEnabled={true}
        onMomentumScrollEnd={(e)=>this.onAnimationEnd(e)}
        >
          {/* {this.renderItem() } */}
          <Image key={1} source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/55a85f73e4b0a37bc13840e6/58b52eade4fcb5991e72c16e/1488268974401/TASSEL1200.JPG'}} style={styles.itemStyle}/>
          <Image key={2} source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/55a85f73e4b0a37bc13840e6/58b49d1d17bffc07f1c3cf0e/1488231710603/1200x560+Shoot+the+freak+3.jpg'}}style={styles.itemStyle}/>
          <Image key={3} source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/55a85f73e4b0a37bc13840e6/58b49976e3df283cef4fd3ec/1488230779982/Castles+Basement+1200x560.png'}}style={styles.itemStyle}/>
          <Image key={4} source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/55a85f73e4b0a37bc13840e6/58b4afc9e6f2e15812074d78/1488236490221/Performance+Salon+Week+2_1200.jpg'}}style={styles.itemStyle} />
          <Image key={5} source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/55a85f73e4b0a37bc13840e6/58b497e4a5790a11a8d14526/1488230372981/1200-560+size+new.jpg'}}style={styles.itemStyle}/>
       </ScrollView>
       <View style={styles.indicatorStyle}>
          {this.renderPageCircle()}
       </View>

      <View style={styles.TitleStyle}>
          <Text style={styles.TitleText}>WHAT‘S ON</Text>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
          />

     </View>
     </ScrollView>
      </View>

    );
  }
  }
 renderItem(){
    var itemAry = [];
    // Get Js Data
    var imgAry = ImageData.data;
    for (var i = 0; i<imgAry.length; i++) {
        // Get individual File
        var item = imgAry[i];
        // push it to array
        itemAry.push(
            <Image key={i} style={styles.itemStyle} source={{uri:item.images}} />
        )
    }
    // Return array
    return itemAry;
  }
  renderPageCircle(){
      var indicatorArr=[];
      var style;
        for(var i = 0; i<5;i++){
        style = (i==this.state.currentPage)?{color:'orange'} : {color:'#ffffff'};
          indicatorArr.push(
            <Text key={i} style={[{fontSize:35},style]}>&bull;</Text>
        );
      }
      return indicatorArr;
    }
    onAnimationEnd(e){
      var offsetX= e.nativeEvent.contentOffset.x+6;
      var currentPage = Math.floor(offsetX / Dimensions.get('window').width);
      console.log(currentPage);
      this.setState({currentPage:currentPage});
    }
    pushToEvent() {
      this.props.navigator.push(
           {
               component: Event,//Navigate page
               title: 'Event'
           }
      );
   }
   pushToDetail() {
     this.props.navigator.push(
          {
              component: EventDetail,//Navigate page
              title: 'EventDetail'
          }
     );
  }
  pushToBooking(data){
    let _this = this;
      const { navigator } = this.props;
      if(navigator) {
        console.log(data.data.title);
        navigator.push({
          title: data.data.title,
          component: BookingSite,
            params: {
                data: data.data,
            }
          });
      }
  }



}
class Button extends Component{
    _handlePress(e){
        if(this.props.onPress){
            this.props.onPress(e);
        }
    }
render(){
        return (
            <TouchableOpacity onPress={this._handlePress.bind(this)}
                              style={this.props.style}>
                <Text>{this.props.children}</Text>
            </TouchableOpacity>
        );
    }
}
