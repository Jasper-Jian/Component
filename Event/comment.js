import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    Platform,
    Dimensions,
    InteractionManager,
    ScrollView,
    Navigator,
    ToastAndroid
} from "react-native";
import {firebaseRef} from '../services/firebase';
import firebase from 'firebase';
import StarRatingBar from 'react-native-star-rating-view/StarRatingBar'
import StarRatingView from 'react-native-star-rating-view'

import review from '../Event/review';

// 该页面所需参数（可选）
const propTypes={
    // params : React.PropTypes.shape({
    //     bookCode: React.PropTypes.string,
    //     type: React.PropTypes.string,
    // }),
};

// 传入参数的默认值（可选）
const defaultProps = {
    //
};

export default class comment extends Component {
    static propTypes = propTypes;
    items=[];
    //static defaultProps = defaultProps;
    static defaultProps = {
      title: 'comment'
    };
    componentWillMount() {
      var path = "2017/Comment/"+this.props.data.title;
      var query = firebase.database().ref(path);
        query.on('value',(snap)=>{
          snap.forEach((data)=>{
            items.push({
              data:data.val(),
            });
          });
          this.setState({
            data:items,
          })
        })

    }
    clickJump(){
      const{navigator} = this.props;

      if(navigator){
        navigator.pop();
      }
    }
    upload(){
      var path = "2017/Comment/"+this.props.data.title;
      var score = "2017/HomePage/"+this.props.data.title;
      var query = firebase.database().ref(path);
      var update_query = firebase.database().ref(score);
      var user = firebaseRef.auth().currentUser;
      this.setState({user});
      if(user != null){
        if(this.state.score != 0){
          var total = this.state.score;
          for(var i = 0; i< this.state.data.length/2;i++){
             total = total + parseInt(this.state.data[i].data.score);
          }
          var average=0;
          average = parseInt(total/((this.state.data.length/2)+1));
              console.log(total);
              console.log(average);
          var data={
            sender: user.email,
            score:this.state.score,
            content:this.state.evaluateText
          }
          query.push(data);
          update_query.update({score:average});
          
          ToastAndroid.show('Upload successful', ToastAndroid.SHORT);
        }else{
          ToastAndroid.show('Please select a score', ToastAndroid.SHORT);
        }
      }else{
        ToastAndroid.show('Please Login First', ToastAndroid.SHORT);
      }
    }
    constructor(props) {
        super(props);
        this.textHeightMax = 80;
        this.state = {
            renderPlaceholderOnly: true,
            score: 0,
            evaluateTextInpuHeight: this.textHeightMax,
            evaluateText: '',
        }
    }

    /* 组件的生命周期函数 */
    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({renderPlaceholderOnly: false});
        });
    }

    /* 渲染组件 */
    render() {
        return (
            <View style={styles.container}>
            <ScrollView>
                {this._renderContent()}
            </ScrollView>
            </View>
        );
    }

    // 渲染内容主体
    _renderContent = () => {
        return (
            <View style={styles.container}>
                {this._renderStarRatingBar3()}
                {this._renderSeparatorLine()}
                {this._renderEvaluateTextInput()}
                {this._renderSeparatorLine()}

                <View style={styles.button}>
                <TouchableOpacity onPress={() => {this.clickJump();}}>
                  <View style={styles.buttonStyle}>
                      <Text style={styles.ButtonText}>Cancel</Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.space}>
                </View>
                <TouchableOpacity onPress={() => {this.upload();}}>
                  <View style={styles.buttonStyle}>
                      <Text style={styles.ButtonText}>Upload</Text>
                  </View>
                </TouchableOpacity>
                </View>

            </View>
        )
    }

    // 渲染评分(滑动打分)
    _renderStarRatingBar3 = () => {
        return (
          <View style={[styles.starRating, {alignSelf: 'flex-start', alignItems: 'center', height: 40}]}>
              <View style={{paddingRight: 10, paddingLeft: 10}}>
                  <Text style={styles.text}>
                      Slide to rate
                  </Text>
              </View>
              <StarRatingBar
                  readOnly={false}
                  continuous={true}
                  score={0}
                  onStarValueChanged={(score) => {
                    this.setState({
                        score: score
                    });
                  }}
              />
          </View>
        );
    }



    _renderSeparatorLine = () => {
        return (
            <View style={styles.breakLongLineItem}/>
        );
    }

    // 渲染评价内容
    _renderEvaluateTextInput = () => {
        return (
            <View style={[styles.columnContainer, styles.marginTopBottom]}>
                <View style={{paddingRight: 10, paddingLeft: 10}}>
                    <Text style={styles.text}>
                        Enter your comment
                    </Text>
                </View>
                <TextInput
                    multiline={true}
                    autoFocus={false}
                    placeholder='Enter your comment'
                    placeholderTextColor='#999999'
                    style={[styles.textInput, styles.marginLeftRight, {marginTop: 10, height: this.state.evaluateTextInpuHeight}]}
                    underlineColorAndroid='transparent'
                    value={this.state.evaluateText}
                    editable={true}
                    onChange={(event) => {
                        let textHeight = event.nativeEvent.contentSize.height > this.textHeightMax ? event.nativeEvent.contentSize.height : this.textHeightMax;
                        this.setState({
                            evaluateTextInpuHeight: textHeight,
                        });
                    }}
                    onChangeText={(text) => {
                        this.setState({ evaluateText: text });
                    }}
                />
            </View>
        );
    }

    // 自定义事件: 评分值改变时触发的事件
    _onStarValueChanged = (value) => {
        console.log('star value changed:' + value);
        this.setState({
            score: value,
        });
    }
}

// 页面样式
let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C0CCD9',
    },
    columnContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start' && 'center',
        backgroundColor: '#C0CCD9',
    },
    text: {
        fontSize: 14,
        color: '#3B3B3B',
    },
    textInput: {
        flex: 0,
        minHeight: 40,
        backgroundColor: 'white',
        padding: 0,
        fontSize: 14,
        color: '#3B3B3B',
    },
    starRating: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '#C0CCD9',
    },
    marginLeftRight: {
        marginLeft: 10,
        marginRight: 10,
    },
    marginTopBottom: {
        marginTop: 10,
        marginBottom: 10,
    },
    button:{
      paddingTop: 20,
      backgroundColor: '#C0CCD9',
      flexDirection: 'row',
      height: 85,
      marginLeft: 50,
    },
    buttonStyle: {
        width: 100,
        height: 45,
        backgroundColor: 'rgba(206,60,100,1)',
        borderRadius: 20,
        justifyContent: 'center',
    },
    ButtonText:{
      marginTop:2,
      color:'white',
      fontSize: 20,
      fontWeight:'600',
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    space:{
      width: Dimensions.get('window').width-100-200,
    },
    //-------------------------分割线--------------------
    // 带边距的分割线
    breakLineItem: {
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#efeff4',
        height: 1
    },
    // 长分割线
    breakLongLineItem: {
        backgroundColor: '#efeff4',
        height: 1
    },
    // 高分割框
    breakBoldLineItem: {
        backgroundColor: '#efeff4',
        height: 10
    },
});
