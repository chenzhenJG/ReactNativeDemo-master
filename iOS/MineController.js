/**
 * Created by chenzhen on 16/7/13.
 */
import React , { Component } from 'react';
import {
    StyleSheet,
    View,
    ListView,
Text,
    TouchableOpacity,
} from 'react-native'
var MAPS;
MAPS = ["a","b"];
class MineController extends Component {
    constructor(props) {
        super(props);

    }
    _onclick() {
        alert('a');
    }
    render(){
        return(

            <View style = {styles.container}>
                <TouchableOpacity onPress = {this._onclick}>
                <View style = {{width:50,height:50,backgroundColor:'red'}}></View>
                    </TouchableOpacity>
            </View>


        );
    }
}

var styles;
styles= StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'green'
    }
});

module.exports = MineController;