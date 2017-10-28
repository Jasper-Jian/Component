import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform,   // define platform
    Navigator,
    BackAndroid,
    ToastAndroid
} from 'react-native';


/**-----import component------**/
import TabNavigator from 'react-native-tab-navigator';


import Home from '../Home/BTHome';
import Shop from '../Event/BTEvent';
import Mine from '../Mine/BTMine';
import More from '../More/BTMore';
import Contact_us from '../Contact_us/ContactUs';
const HOME = 'home';
export default class Main extends Component{
    // initialize home page state
    constructor(props) {
        super(props);
        this.state = {selectedTab: HOME}
    }
    componentWillMount(){
      BackAndroid.addEventListener('hardwareBackPress',this.onBackAndroid);
    }

    componentWillUnmount() {
      BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }

    onBackAndroid = () => {
     if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
        //cilck the back key two times in two second to exit the application
          return false;
      }

    this.lastBackPressed = Date.now();

    ToastAndroid.show('Press again to exit application', ToastAndroid.SHORT);
    return true;

    };
    render() {
        return (
            <TabNavigator tabBarStyle={{ backgroundColor:'white' }} >
                {/*--Main--*/}
                <TabNavigator.Item
                  title="Home"
                  tileStyle={{color:'black',fontFamily:'GT-Haptik-Regular'}}
                  renderIcon={() => <Image style={styles.iconStyle} source={require('../images/home.png')} />}
                  renderSelectedIcon={() => <Image style={styles.iconStyle} source={require('../images/home-2.png')} />}
                  onPress={()=>{this.setState({selectedTab:'home'})}}
                  selected={this.state.selectedTab === 'home'}
                >
                    <Navigator
                        initialRoute={{name:'Main',component:Home}}
                        configureScene={()=>{
                             return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                           let Component = route.component;
                           return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                    />
                </TabNavigator.Item>

                {/*--Event--*/}
                <TabNavigator.Item
                    title="What's on"
                    renderIcon={() => <Image source={require('../images/whats_on.png')} style={styles.iconStyle}/>} // icon
                    renderSelectedIcon={() =><Image source={require('../images/whats_on_selected.png')} style={styles.iconStyle}/>}   // when icon selected
                    onPress={()=>{this.setState({selectedTab:'Event'})}}
                    selected={this.state.selectedTab === 'Event'}
                >
                    <Navigator
                        initialRoute={{name:'Event',component:Shop}}
                        configureScene={()=>{
                             return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                           let Component = route.component;
                           return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                    />
                </TabNavigator.Item>

                {/*--Mine--*/}
                <TabNavigator.Item
                    title="Mine"
                    renderIcon={() => <Image source={require('../images/me.png')}style={styles.iconStyle}/>} // icon
                    renderSelectedIcon={() =><Image source={require('../images/me_selected.png')} style={styles.iconStyle}/>}   // selected icon
                    onPress={()=>{this.setState({selectedTab:'mine'})}}
                    selected={this.state.selectedTab === 'mine'}
                >
                    <Navigator
                        initialRoute={{name:'Mine',component:Mine}}
                        configureScene={()=>{
                             return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                           let Component = route.component;
                           return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                    />
                </TabNavigator.Item>

                {/*--MoreInfo--*/}
                <TabNavigator.Item
                    title="More"
                    renderIcon={() => <Image source={require('../images/more.png')} style={styles.iconStyle}/>} // icon
                    renderSelectedIcon={() =><Image source={require('../images/more_selected.png')} style={styles.iconStyle}/>}   // when icon selected
                    onPress={()=>{this.setState({selectedTab:'more'})}}
                    selected={this.state.selectedTab === 'more'}
                >
                    <Navigator
                        initialRoute={{name:'More',component:More}}
                        configureScene={()=>{
                             return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                           let Component = route.component;
                           return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                    />
                </TabNavigator.Item>

                {/*--Contact us Info--*/}
                <TabNavigator.Item
                    title="Contact Us"
                    renderIcon={() => <Image source={require('../images/Contact_us_Icon.png')} style={styles.iconStyle}/>} // icon
                    renderSelectedIcon={() =><Image source={require('../images/Contact_us_Icon_selected.png')} style={styles.iconStyle}/>}   // when icon selected
                    onPress={()=>{this.setState({selectedTab:'Contact_us'})}}
                    selected={this.state.selectedTab === 'Contact_us'}
                >
                    <Navigator
                        initialRoute={{name:'Contact_us',component:Contact_us}}
                        configureScene={()=>{
                             return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                           let Component = route.component;
                           return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                    />
                </TabNavigator.Item>

            </TabNavigator>
        );
    }

}

const styles = StyleSheet.create({

    iconStyle:{
        width: Platform.OS === 'ios' ? 30 : 28,
        height:Platform.OS === 'ios' ? 30 : 28,

    },
});
