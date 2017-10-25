import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TextInput,
  TouchableOpacity,
  InteractionManager,
  Navigator,
  Keyboard,
  Image,
  Picker,
  ToastAndroid,
  AppRegistry
} from 'react-native';
import {firebaseRef} from '../services/firebase';
// import Picker from 'react-native-picker';
import firebase from 'firebase';
// import PickerWidget from './PickerWidget';
export default class FillingEventForm extends Component {
  clickJump(){
    const{navigator} = this.props;
    if(navigator){
      navigator.pop();
    }
  }
  // constructor(props, context) {
  //     super(props, context);

    constructor(props) {
        super(props);

    this.textHeightMax = 150;
    this.DetailsInpuHeightMax=200;
    this.state={
      Company:'',
      Primary_contact:'',
      Postal_Address: '',
      Telephone_Mobile:'',
      Email:'',
      Project_name: '',
      Director_Choreographer:'',
      Producer:'',
      Writer:'',
      Production_Designers: '',
      Performers:'',
      Details:'',
      Word_blurb: '',
      Event_Background: '',
      Technical_Requirement:'',
      Elements_like_to_have:'',
      Traget_audience: '',
      Goal: '',
      interested_BPS: '',
      First_choice:'',
      Second_choice:'',
      Third_choice:'',
      Impossible_choice:'',
      Double_billing:'',
      Performance_space:'',
      Performance_length:'',
      Performance_number:'',
      Performance_noise:'',
      Founding_state:'',
      World_premiere:'',
      DetailsInpuHeight: this.DetailsInpuHeightMax,
      TextInpuHeight: this.textHeightMax,
    }
  }
  /* 组件的生命周期函数 */
  componentDidMount() {
      InteractionManager.runAfterInteractions(() => {
          this.setState({renderPlaceholderOnly: false});
      });
  }
  submit(){
    var path = "2017/SubmissionForm/";
    var query = firebase.database().ref(path);
    var user = firebaseRef.auth().currentUser;

    if(this.state.Company!=""){
      if(this.state.Primary_contact!=""){
        if(this.state.Email!="" ){
          if(this.state.Email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
            if(this.state.Project_name!=""){
              if(this.state.Director_Choreographer!=""){
                if(this.state.Producer!="" ){
                  if(this.state.Writer!=""){
                    if(this.state.Production_Designers!=""){
                      if(this.state.Performers!="" ){
                        if(this.state.Details!="" ){
                          if(this.state.Word_blurb!=""){
                            if(this.state.Event_Background!=""){
                              if(this.state.Technical_Requirement!="" ){
                                if(this.state.Elements_like_to_have!="" ){
                                  if(this.state.Traget_audience!=""){
                                    if(this.state.Goal!=""){
                                      if(this.state.interested_BPS!="" ){
                                        if(this.state.First_choice!=""&& this.state.Second_choice!=""&&this.state.Third_choice!=""&&this.state.Impossible_choice!=""){
                                        if(this.state.Double_billing!=""&&this.state.Performance_space!=""&&this.state.Performance_length!=""&&this.state.Performance_number!="" &&this.state.Performance_noise!=""){
                                          if(this.state.Founding_state!=""){
                                            if(this.state.World_premiere!="" ){
                          var data = {
                            Company:this.state.Company,
                            Primary_contact: this.state.Primary_contact,
                            Telephone_Mobile: this.state.Telephone_Mobile,
                            Email: this.state.Email,
                            Project_name:this.state.Project_name,
                            Director_Choreographer: this.state.Director_Choreographer,
                            Producer: this.state.Producer,
                            Writer: this.state.Writer,
                            Production_Designers:this.state.Production_Designers,
                            Performers: this.state.Performers,
                            Details: this.state.Details,
                            Word_blurb: this.state.Word_blurb,
                            Event_Background:this.state.Event_Background,
                            Technical_Requirement: this.state.Technical_Requirement,
                            Elements_like_to_have: this.state.Elements_like_to_have,
                            Traget_audience: this.state.Traget_audience,
                            Goal:this.state.Goal,
                            interested_BPS: this.state.interested_BPS,
                            First_choice:this.state.First_choice,
                            Second_choice: this.state.Second_choice,
                            Third_choice:this.state.Third_choice,
                            Impossible_choice: this.state.Impossible_choice,
                            Double_billing: this.state.Double_billing,
                            Performance_space: this.state.Performance_space,
                            Performance_length:this.state.Performance_length,
                            Performance_number: this.state.Performance_number,
                            Performance_noise: this.state.Performance_noise,
                            Founding_state: this.state.Founding_state,
                            World_premiere:this.state.World_premiere,
                          }
                  query.push(data);
                  ToastAndroid.show('Submit successful', ToastAndroid.SHORT);
                                            }else{
                                                ToastAndroid.show('Please select the world premiere', ToastAndroid.SHORT);
                                            }
                                          }else{
                                                ToastAndroid.show('Please select the funding state', ToastAndroid.SHORT);
                                            }
                                          }
                                          else{
                                              ToastAndroid.show('Please enter the performance details', ToastAndroid.SHORT);
                                          }
                                        }else{
                                          ToastAndroid.show('Please enter the range of different Choices', ToastAndroid.SHORT);
                                        }
                                      }else{
                                                ToastAndroid.show('Please select the interested of BPS', ToastAndroid.SHORT);
                                            }
                                          }
                                          else{
                                              ToastAndroid.show('Please enter the goal you would like to achieve', ToastAndroid.SHORT);
                                          }
                                        }else{
                                          ToastAndroid.show('Please enter the target audience or market plan', ToastAndroid.SHORT);
                                        }
                                      }
                                    else{
                                        ToastAndroid.show('Please enter the Elements like to you would like to have', ToastAndroid.SHORT);
                                    }
                                  }
                                else{
                                    ToastAndroid.show('Please enter your technical requirements', ToastAndroid.SHORT);
                                }
                              }
                              else{
                                  ToastAndroid.show('Please enter the details of Event Background', ToastAndroid.SHORT);
                              }
                            }else{
                              ToastAndroid.show('Please enter Word blurb', ToastAndroid.SHORT);
                            }
                          }
                        else{
                            ToastAndroid.show('Please enter the Event Details', ToastAndroid.SHORT);
                        }
                      }
                        else{
                            ToastAndroid.show('Please enter the Performers details', ToastAndroid.SHORT);
                        }
                      }
                      else{
                          ToastAndroid.show('Please enter the name of Production Designers', ToastAndroid.SHORT);
                      }
                    }else{
                      ToastAndroid.show('Please enter the name of Writer', ToastAndroid.SHORT);
                    }
                  }
                else{
                    ToastAndroid.show('Please enter the name of Producer', ToastAndroid.SHORT);
                }
              }else{
                ToastAndroid.show('Please enter the name of Director or Choreographer', ToastAndroid.SHORT);
              }
            }else{
              ToastAndroid.show('Please enter the Project Name', ToastAndroid.SHORT);
            }
          }else{
            ToastAndroid.show('Email is badly formated', ToastAndroid.SHORT);
          }
        }else{
            ToastAndroid.show('Please enter the Email', ToastAndroid.SHORT);
        }
      }else{
        ToastAndroid.show('Please enter the Primary contact details', ToastAndroid.SHORT);
      }
    }else{
      ToastAndroid.show('Please enter the Name of Company', ToastAndroid.SHORT);
    }

  }
  // _createDateData() {
  //     let date = [];
  //     for(let i=1950;i<2050;i++){
  //         let month = [];
  //         for(let j = 1;j<13;j++){
  //             let day = [];
  //             if(j === 2){
  //                 for(let k=1;k<29;k++){
  //                     day.push(k+'日');
  //                 }
  //                 //Leap day for years that are divisible by 4, such as 2000, 2004
  //                 if(i%4 === 0){
  //                     day.push(29+'日');
  //                 }
  //             }
  //             else if(j in {1:1, 3:1, 5:1, 7:1, 8:1, 10:1, 12:1}){
  //                 for(let k=1;k<32;k++){
  //                     day.push(k+'日');
  //                 }
  //             }
  //             else{
  //                 for(let k=1;k<31;k++){
  //                     day.push(k+'日');
  //                 }
  //             }
  //             let _month = {};
  //             _month[j+'月'] = day;
  //             month.push(_month);
  //         }
  //         let _date = {};
  //         _date[i+'年'] = month;
  //         date.push(_date);
  //     }
  //     return date;
  // }
  //
  // _createAreaData() {
  //     let data = [];
  //     let len = area.length;
  //     for(let i=0;i<len;i++){
  //         let city = [];
  //         for(let j=0,cityLen=area[i]['city'].length;j<cityLen;j++){
  //             let _city = {};
  //             _city[area[i]['city'][j]['name']] = area[i]['city'][j]['area'];
  //             city.push(_city);
  //         }
  //
  //         let _data = {};
  //         _data[area[i]['name']] = city;
  //         data.push(_data);
  //     }
  //     return data;
  // }
  //
  // _showDatePicker() {
  //     Picker.init({
  //         pickerData: this._createDateData(),
  //         pickerToolBarFontSize: 16,
  //         pickerFontSize: 16,
  //         pickerFontColor: [255, 0 ,0, 1],
  //         onPickerConfirm: (pickedValue, pickedIndex) => {
  //             console.log('date', pickedValue, pickedIndex);
  //         },
  //         onPickerCancel: (pickedValue, pickedIndex) => {
  //             console.log('date', pickedValue, pickedIndex);
  //         },
  //         onPickerSelect: (pickedValue, pickedIndex) => {
  //             console.log('date', pickedValue, pickedIndex);
  //         }
  //     });
  //     Picker.show();
  // }
  //
  // _showTimePicker() {
  //     let years = [],
  //         months = [],
  //         days = [],
  //         hours = [],
  //         minutes = [];
  //
  //     for(let i=1;i<51;i++){
  //         years.push(i+1980);
  //     }
  //     for(let i=1;i<13;i++){
  //         months.push(i);
  //         hours.push(i);
  //     }
  //     for(let i=1;i<32;i++){
  //         days.push(i);
  //     }
  //     for(let i=1;i<61;i++){
  //         minutes.push(i);
  //     }
  //     let pickerData = [years, months, days, ['am', 'pm'], hours, minutes];
  //     let date = new Date();
  //     let selectedValue = [
  //         [date.getFullYear()],
  //         [date.getMonth()+1],
  //         [date.getDate()],
  //         [date.getHours() > 11 ? 'pm' : 'am'],
  //         [date.getHours() === 12 ? 12 : date.getHours()%12],
  //         [date.getMinutes()]
  //     ];
  //     Picker.init({
  //         pickerData,
  //         selectedValue,
  //         pickerTitleText: 'Select Date and Time',
  //         wheelFlex: [2, 1, 1, 2, 1, 1],
  //         onPickerConfirm: pickedValue => {
  //             console.log('area', pickedValue);
  //         },
  //         onPickerCancel: pickedValue => {
  //             console.log('area', pickedValue);
  //         },
  //         onPickerSelect: pickedValue => {
  //             let targetValue = [...pickedValue];
  //             if(parseInt(targetValue[1]) === 2){
  //                 if(targetValue[0]%4 === 0 && targetValue[2] > 29){
  //                     targetValue[2] = 29;
  //                 }
  //                 else if(targetValue[0]%4 !== 0 && targetValue[2] > 28){
  //                     targetValue[2] = 28;
  //                 }
  //             }
  //             else if(targetValue[1] in {4:1, 6:1, 9:1, 11:1} && targetValue[2] > 30){
  //                 targetValue[2] = 30;
  //
  //             }
  //             // forbidden some value such as some 2.29, 4.31, 6.31...
  //             if(JSON.stringify(targetValue) !== JSON.stringify(pickedValue)){
  //                 // android will return String all the time，but we put Number into picker at first
  //                 // so we need to convert them to Number again
  //                 targetValue.map((v, k) => {
  //                     if(k !== 3){
  //                         targetValue[k] = parseInt(v);
  //                     }
  //                 });
  //                 Picker.select(targetValue);
  //                 pickedValue = targetValue;
  //             }
  //         }
  //     });
  //     Picker.show();
  // }
  //
  // _toggle() {
  //     Picker.toggle();
  // }
  //
  // _isPickerShow(){
  //     Picker.isPickerShow(status => {
  //         alert(status);
  //     });
  // }
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
      <ScrollView>
        <View style={styles.messageBox}>

        <Text style={[styles.bigText, {alignSelf: 'center'}]}>
        2017 Season Submission Form
        </Text>
        <View style={styles.Divider}>
        </View>
        <Text style={styles.textStyle}>
        Name of Company *
        </Text>

        <View style={styles.inputBox}>
        <TextInput
            multiline={true}
            style={styles.inputText}
            value={this.state.Company}
            keyboardType='web-search'
            placeholder='Please enter your company full name'
            underlineColorAndroid={'transparent'}
            onChangeText={(text) => this.setState({Company: text})}
        />
        </View>

        <Text style={styles.textStyle}>
        Primary contact *
        </Text>

        <View style={styles.inputBox}>
        <TextInput
            multiline={true}
            style={styles.inputText}
            value={this.state.Primary_contact}
            keyboardType='web-search'
            placeholder='Please enter contact detail'
            underlineColorAndroid={'transparent'}
            onChangeText={(text) => this.setState({Primary_contact: text})}
        />
        </View>

        <Text style={styles.textStyle}>
        Postal Address *
        </Text>

        <View style={styles.inputBox}>
        <TextInput
            multiline={true}
            style={styles.inputText}
            value={this.state.Postal_Address}
            keyboardType='web-search'
            placeholder='Please enter postal address'
            underlineColorAndroid={'transparent'}
            onChangeText={(text) => this.setState({Postal_Address: text})}
        />
        </View>
        <Text style={styles.textStyle}>
        Telephone/Mobile *
        </Text>

        <View style={styles.inputBox}>
        <TextInput
            multiline={true}
            style={styles.inputText}
            value={this.state.Telephone_Mobile}
            keyboardType='web-search'
            placeholder='Please enter either Telephone or Mobile number'
            underlineColorAndroid={'transparent'}
            onChangeText={(text) => this.setState({Telephone_Mobile: text})}
        />
        </View>
        <Text style={styles.textStyle}>
        Email *
        </Text>

        <View style={styles.inputBox}>
        <TextInput
            multiline={true}
            style={styles.inputText}
            value={this.state.Email}
            keyboardType='web-search'
            placeholder='Please enter your email address'
            underlineColorAndroid={'transparent'}
            onChangeText={(text) => this.setState({Email: text})}
        />
        </View>
        <Text style={styles.textStyle}>
        Project Name *
        </Text>

        <View style={styles.inputBox}>
        <TextInput
            multiline={true}
            style={styles.inputText}
            value={this.state.Project_name}
            keyboardType='web-search'
            placeholder='Please enter the name of your project'
            underlineColorAndroid={'transparent'}
            onChangeText={(text) => this.setState({Project_name: text})}
        />
        </View>
        <View style={styles.Divider}>
        </View>
        {/* ==================people involved=============================== */}
        <Text style={[styles.bigText, {alignSelf: 'center'}]}>
        Key people involved
        </Text>
        <Text style={styles.textStyle}>
        Director/Choreographer *
        </Text>

        <View style={styles.inputBox}>
        <TextInput
            multiline={true}
            style={styles.inputText}
            value={this.state.Director_Choreographer}
            keyboardType='web-search'
            placeholder='Please enter the Director or Choreographer'
            underlineColorAndroid={'transparent'}
            onChangeText={(text) => this.setState({Director_Choreographer: text})}
        />
        </View>

        <Text style={styles.textStyle}>
        Producer *
        </Text>

        <View style={styles.inputBox}>
        <TextInput
            multiline={true}
            style={styles.inputText}
            value={this.state.Producer}
            keyboardType='web-search'
            placeholder='Please enter the Producer Name'
            underlineColorAndroid={'transparent'}
            onChangeText={(text) => this.setState({Producer: text})}
        />
        </View>

        <Text style={styles.textStyle}>
        Writer *
        </Text>

        <View style={styles.inputBox}>
        <TextInput
            multiline={true}
            style={styles.inputText}
            value={this.state.Writer}
            keyboardType='web-search'
            placeholder='Please enter the Writer Name'
            underlineColorAndroid={'transparent'}
            onChangeText={(text) => this.setState({Writer: text})}
        />
        </View>
        <Text style={styles.textStyle}>
        Production Designers *
        </Text>

        <View style={styles.inputBox}>
        <TextInput
            multiline={true}
            style={styles.inputText}
            value={this.state.Production_Designers}
            keyboardType='web-search'
            placeholder='Please enter the Production Designers'
            underlineColorAndroid={'transparent'}
            onChangeText={(text) => this.setState({Production_Designers: text})}
        />
        </View>
        <Text style={styles.textStyle}>
        Performers *
        </Text>

        <View style={styles.inputBox}>
        <TextInput
            multiline={true}
            style={styles.inputText}
            value={this.state.Performers}
            keyboardType='web-search'
            placeholder='Please enter Performers'
            underlineColorAndroid={'transparent'}
            onChangeText={(text) => this.setState({Performers: text})}
        />
        </View>
        <View style={styles.Divider}>
        </View>
        {/* ==================About your show=============================== */}
        <Text style={[styles.bigText, {alignSelf: 'center'}]}>
        About your show
        </Text>
        <Text style={styles.textStyle}>
      The pitch- Tell us about your show, tell it to us! Tell us why you're doing it*
        </Text>

        <View style={[styles.LargeinputBox,{height:this.state.DetailsInpuHeightMax}]}>
          <TextInput
              multiline={true}
              autoFocus={false}
              placeholder='500 words max'
              style={[styles.inputText, { height: this.state.DetailsInpuHeight}]}
              underlineColorAndroid='transparent'
              value={this.state.Details}
              editable={true}
              onChange={(event) => {
                  let textHeight = event.nativeEvent.contentSize.height > this.DetailsInpuHeightMax ? event.nativeEvent.contentSize.height : this.DetailsInpuHeightMax;
                  this.setState({
                      DetailsInpuHeight: textHeight,
                  });
              }}
              onChangeText={(text) => {
                  this.setState({ Details: text });
              }}
          />
        </View>




        <Text style={styles.textStyle}>
      50 word blurb*
        </Text>

        <View style={[styles.LargeinputBox,{height:this.state.TextInpuHeight}]}>
        <TextInput
          multiline={true}
          autoFocus={false}
          placeholder='Please note this is for our brochure'
          style={[styles.inputText, { height: this.state.TextInpuHeight}]}
          underlineColorAndroid='transparent'
          value={this.state.Word_blurb}
          editable={true}
          onChange={(event) => {
              let textHeight = event.nativeEvent.contentSize.height > this.textHeightMax ? event.nativeEvent.contentSize.height : this.textHeightMax;
              this.setState({
                  TextInpuHeight: textHeight,
              });
          }}
          onChangeText={(text) => {
              this.setState({ Word_blurb: text });
          }}
        />
        </View>
        <Text style={styles.textStyle}>
      Background of your company and key people *
        </Text>

        <View style={[styles.LargeinputBox,{height:this.state.TextInpuHeight}]}>
        <TextInput
          multiline={true}
          autoFocus={false}
          placeholder='250 words max'
          style={[styles.inputText, { height: this.state.TextInpuHeight}]}
          underlineColorAndroid='transparent'
          value={this.state.Event_Background}
          editable={true}
          onChange={(event) => {
              let textHeight = event.nativeEvent.contentSize.height > this.textHeightMax ? event.nativeEvent.contentSize.height : this.textHeightMax;
              this.setState({
                  TextInpuHeight: textHeight,
              });
          }}
          onChangeText={(text) => {
              this.setState({ Event_Background: text });
          }}
        />
        </View>
        <Text style={styles.textStyle}>
      What are your technical requirements? *
        </Text>
        <View style={[styles.LargeinputBox,{height:this.state.TextInpuHeight}]}>
        <TextInput
          multiline={true}
          autoFocus={false}
          placeholder='Please tell us about your Technical Requirements'
          style={[styles.inputText, { height: this.state.TextInpuHeight}]}
          underlineColorAndroid='transparent'
          value={this.state.Technical_Requirement}
          editable={true}
          onChange={(event) => {
              let textHeight = event.nativeEvent.contentSize.height > this.textHeightMax ? event.nativeEvent.contentSize.height : this.textHeightMax;
              this.setState({
                  TextInpuHeight: textHeight,
              });
          }}
          onChangeText={(text) => {
              this.setState({ Technical_Requirement: text });
          }}
        />
        </View>
        <Text style={styles.textStyle}>
      What set elements are you likely to have? *
        </Text>
        <View style={[styles.LargeinputBox,{height:this.state.TextInpuHeight}]}>
        <TextInput
          multiline={true}
          autoFocus={false}
          placeholder='Please tell us about your Technical Requirements'
          style={[styles.inputText, { height: this.state.TextInpuHeight}]}
          underlineColorAndroid='transparent'
          value={this.state.Elements_like_to_have}
          editable={true}
          onChange={(event) => {
              let textHeight = event.nativeEvent.contentSize.height > this.textHeightMax ? event.nativeEvent.contentSize.height : this.textHeightMax;
              this.setState({
                  TextInpuHeight: textHeight,
              });
          }}
          onChangeText={(text) => {
              this.setState({ Elements_like_to_have: text });
          }}
        />
        </View>

        <Text style={styles.textStyle}>
      How will you market your show and who is your audience? *
        </Text>
        <View style={[styles.LargeinputBox,{height:this.state.TextInpuHeight}]}>
        <TextInput
          multiline={true}
          autoFocus={false}
          placeholder='Please tell us about your plan'
          style={[styles.inputText, { height: this.state.TextInpuHeight}]}
          underlineColorAndroid='transparent'
          value={this.state.Traget_audience}
          editable={true}
          onChange={(event) => {
              let textHeight = event.nativeEvent.contentSize.height > this.textHeightMax ? event.nativeEvent.contentSize.height : this.textHeightMax;
              this.setState({
                  TextInpuHeight: textHeight,
              });
          }}
          onChangeText={(text) => {
              this.setState({ Traget_audience: text });
          }}
        />
        </View>
        <Text style={styles.textStyle}>
      What is your goal for this season *
        </Text>
        <View style={[styles.LargeinputBox,{height:this.state.TextInpuHeight}]}>
        <TextInput
          multiline={true}
          autoFocus={false}
          placeholder='Please tell us about your plan'
          style={[styles.inputText, { height: this.state.TextInpuHeight}]}
          underlineColorAndroid='transparent'
          value={this.state.Goal}
          editable={true}
          onChange={(event) => {
              let textHeight = event.nativeEvent.contentSize.height > this.textHeightMax ? event.nativeEvent.contentSize.height : this.textHeightMax;
              this.setState({
                  TextInpuHeight: textHeight,
              });
          }}
          onChangeText={(text) => {
              this.setState({ Goal: text });
          }}
        />
        </View>
        <Text style={styles.textStyle}>
      Would you be interested in a Basement Playscience? *
        </Text>
        <Text style={styles.SmalltextStyle}>
      Please select either "Yes" or "No"
        </Text>
        <Picker
          selectedValue={this.state.interested_BPS}
          onValueChange={interest => this.setState({interested_BPS:interest})}
          mode='dropdown'
          style={{color:'blue'}}
          prompt='Would you be interested in a Basement Playscience?'
          >
          <Picker.Item label='Yes' value="Yes" color='black' />
          <Picker.Item label="No" value="No" color='black' />
        </Picker>
        {/* <TouchableOpacity style={{marginTop: 40, marginLeft: 20}} onPress={this._showDatePicker.bind(this)}>
            <Text>DatePicker</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 10, marginLeft: 20}} onPress={this._showTimePicker.bind(this)}>
            <Text>TimePicker</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{marginTop: 10, marginLeft: 20}} onPress={this._toggle.bind(this)}>
            <Text>toggle</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 10, marginLeft: 20}} onPress={this._isPickerShow.bind(this)}>
            <Text>isPickerShow</Text>
        </TouchableOpacity>
        <TextInput
            placeholder="test picker with input"
            style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                marginLeft: 20,
                marginRight: 20,
                marginTop: 10,
                padding: 5
            }}
        /> */}
        <View style={styles.Divider}>
        </View>

        {/* ======Preferred dates and ideal length of season========== */}
        <Text style={[styles.bigText, {alignSelf: 'center'}]}>
        Preferred dates and ideal length of season
        </Text>

        <Text style={styles.textStyle}>
      First Choice *
        </Text>

        <View style={styles.inputBox}>
        <TextInput
            multiline={true}
            style={styles.inputText}
            keyboardType='web-search'
            placeholder='Please enter the range of date'
            underlineColorAndroid={'transparent'}
            onChangeText={(text) => this.setState({First_choice: text})}
        />
        </View>

        <Text style={styles.textStyle}>
      Second Choice *
        </Text>

        <View style={styles.inputBox}>
        <TextInput
            multiline={true}
            style={styles.inputText}
            keyboardType='web-search'
            placeholder='Please enter the range of date'
            underlineColorAndroid={'transparent'}
            onChangeText={(text) => this.setState({Second_choice: text})}
        />
        </View>
        <Text style={styles.textStyle}>
      Third Choice *
        </Text>

        <View style={styles.inputBox}>
        <TextInput
            multiline={true}
            style={styles.inputText}
            keyboardType='web-search'
            placeholder='Please enter the range of date'
            underlineColorAndroid={'transparent'}
            onChangeText={(text) => this.setState({Third_choice: text})}
        />
        </View>
        <Text style={styles.textStyle}>
      Impossible dates for the company *
        </Text>

        <View style={styles.inputBox}>
        <TextInput
            multiline={true}
            style={styles.inputText}
            keyboardType='web-search'
            placeholder='Please enter the range of date'
            underlineColorAndroid={'transparent'}
            onChangeText={(text) => this.setState({Impossible_choice: text})}
        />
        </View>
        <View style={styles.Divider}>
        </View>
        {/* ======Other information========== */}
        <Text style={[styles.bigText, {alignSelf: 'center'}]}>
        Other information
        </Text>
        <Text style={styles.textStyle}>
      Would you consider double billing? *
        </Text>
        <Text style={styles.SmalltextStyle}>
      i.e. Two separate seasons programmed in the studio or theatre during the same dates, performed at different times. Financial revenue is separate.
        </Text>
        <Text style={styles.SmalltextStyle}>
      Please select either "Yes" or "No"
        </Text>
        <Picker
          selectedValue={this.state.Double_billing}
          onValueChange={choose => this.setState({Double_billing:choose})}
          mode='dropdown'
          style={{color:'blue'}}
          prompt='Would you consider double billing? *?'
          >
          <Picker.Item label='Yes' value='Yes' color='black' />
          <Picker.Item label="No" value="No" color='black' />
        </Picker>
        <Text style={styles.textStyle}>
      Preferred performance space *
        </Text>

        <Picker
          selectedValue={this.state.Performance_space}
          onValueChange={choose => this.setState({Performance_space:choose})}
          mode='dropdown'
          style={{color:'blue'}}
          prompt='  Preferred performance space : *'
          >
          <Picker.Item label='Main Theatre(100 seats)' value='Main Theatre(100 seats)' color='black' />
          <Picker.Item label="Upstairs Studio Space(65 seats)" value="Upstairs Studio Space(65 seats)" color='black' />
          <Picker.Item label="preference/either space" value="preference/either space" color='black' />
        </Picker>
        <Text style={styles.textStyle}>
      Approximate length of performance *
        </Text>

        <View style={styles.inputBox}>
        <TextInput
            multiline={true}
            style={styles.inputText}
            keyboardType='web-search'
            placeholder='Please enter length of performance'
            underlineColorAndroid={'transparent'}
            onChangeText={(text) => this.setState({Performance_length: text})}
        />
        </View>


        <Text style={styles.textStyle}>
      Number of performers *
        </Text>

        <View style={styles.inputBox}>
        <TextInput
            multiline={true}
            style={styles.inputText}
            keyboardType='web-search'
            placeholder='Please enter the number of performers'
            underlineColorAndroid={'transparent'}
            onChangeText={(text) => this.setState({Performance_number: text})}
        />
        </View>
        <Text style={styles.textStyle}>
      Is your performance particularly loud or quiet?*
        </Text>

        <Picker
          selectedValue={this.state.Performance_noise}
          onValueChange={choose => this.setState({Performance_noise:choose})}
          mode='dropdown'
          style={{color:'blue'}}
          prompt='  Is your performance particularly loud or quiet?*'
          >
          <Picker.Item label='Loud' value='Loud' color='black' />
          <Picker.Item label="Quiet" value="Quiet" color='black' />
          <Picker.Item label="In between" value="In between" color='black' />
        </Picker>
        <Text style={styles.textStyle}>
      Will you go ahead with you show with or without founding?*
        </Text>
        <Text style={styles.SmalltextStyle}>
        *If your show is reliant on securing CNZ or Council funding, you need to apply well in advance. We will not programme your show if you are completely not programme your show if you are completely funding dependant and are likely to pull out should you not secure funding.
        </Text>

        <Picker
          selectedValue={this.state.Founding_state}
          onValueChange={choose => this.setState({Founding_state:choose})}
          mode='dropdown'
          style={{color:'blue'}}
          prompt='Will you go ahead with you show with or without founding?*'
          >
          <Picker.Item label='Yes' value='Yes' color='black' />
          <Picker.Item label="No" value="No" color='black' />
          <Picker.Item label="Other" value="Other" color='black' />
        </Picker>

        <Text style={styles.textStyle}>
      Is this the world premiere of your show?*
        </Text>
        <Text style={styles.SmalltextStyle}>
        If not please list your previous seasons - When/Where/How long.
        </Text>
        <Picker
          selectedValue={this.state.World_premiere}
          onValueChange={choose => this.setState({World_premiere:choose})}
          mode='dropdown'
          style={{color:'blue'}}
          prompt='Is this the world premiere of your show?*'
          >
          <Picker.Item label='Yes' value='Yes' color='black' />
          <Picker.Item label="No" value="No" color='black' />
        </Picker>
        <View style={styles.inputBox}>
        <TextInput
            multiline={true}
            style={styles.inputText}
            keyboardType='web-search'
            value={this.state.World_premiere}
            placeholder='Yes, No, Other?'
            underlineColorAndroid={'transparent'}
            onChangeText={(text) => this.setState({World_premiere: text})}
        />
        </View>
        <View style={styles.Divider}>
        </View>
        <TouchableOpacity onPress={() => {this.submit();}}>
          <View style={styles.buttonStyle}>
              <Text style={styles.ButtonText}>Submit</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.space}>
        </View>
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
  headText: {
    paddingTop: 0,
    paddingLeft: 15,
    color:'rgb(2,0,252)',
    fontSize:24,
    fontFamily:'GT-Haptik-Bold',
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
  space:{
    height: 10,
    backgroundColor: 'transparent',
  },
  bigText:{
    fontFamily:'GT-Haptik-Bold',
    fontSize: 24,
    color: 'black',
    lineHeight: 30,

  },
  icon: {
      marginTop: 3,
      marginLeft: 6,
      marginRight: 6,
      width: 24,
      height: 24,
      resizeMode: 'stretch'
  },
  messageBox:{
    flexDirection:'column',
    paddingLeft:30,
    paddingRight:30,
  },
  textStyle:{
    fontFamily:'GT-Haptik-Regular',
    fontSize: 16,
    color: 'black',
    lineHeight: 30,
  },
  SmalltextStyle:{
    fontFamily:'GT-Haptik-Regular',
    fontSize: 13,
    color: 'black',
    lineHeight: 30,
  },
  inputBox: {
      height: 30,
      flexDirection: 'row',
      backgroundColor: 'white',
      borderColor: 'black',
      borderWidth: 1,
      flex: 1,
      alignItems: 'center',
      marginTop:10,
  },
  LargeinputBox: {
      height: 150,
      flexDirection: 'row',
      backgroundColor: 'white',
      borderColor: 'black',
      borderWidth: 1,
      flex: 1,
      alignItems: 'center',
      marginTop:10,
  },
  inputText: {
      fontFamily:'GT-Haptik-Regular',
      flex: 1,
      backgroundColor: 'transparent',
      fontSize: 14,
      marginTop: -6.65,
      marginBottom: -6.65,
      justifyContent: 'center',
      alignItems: 'center',

  },
  buttonStyle: {
      width: 150,
      height: 35,
      marginTop:10,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignSelf: 'center',
  },
  ButtonText:{
    fontFamily:'GT-Haptik-Regular',
    color:'white',
    fontSize: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Divider:{
    marginTop: 15,
    marginBottom:15,
    borderStyle:'solid',
    borderBottomWidth:1,
    width: Dimensions.get('window').width-60,
    borderBottomColor : 'rgba(1,165,175,1)',
  },
  textStyle:{
    fontFamily:'GT-Haptik-Regular',
    fontSize: 16,
    color: 'black',
    lineHeight: 30,
  },
  })
