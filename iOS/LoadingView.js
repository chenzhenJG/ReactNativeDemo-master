/**
 * Created by chenzhen on 16/7/19.
 */
import React , { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
} from 'react-native';

class LoadingView extends Component {
    render() {
        return(
            <View style = {styles.container}>
                <ActivityIndicator animating = {true} color = "#10C7D4"/>
                <Text style = {styles.textFont} >加载中...</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
   container : {
       flex:1,
       justifyContent: 'center',
       flexDirection:'column',
       alignItems:'center',
   },
    textFont : {
        fontSize:13,
        alignSelf:'center',
        marginBottom:100,
        marginTop:20,
        color:'#10C7D4',
    }
});

module.exports = LoadingView;
