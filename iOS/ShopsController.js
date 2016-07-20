/**
 * Created by chenzhen on 16/7/13.
 */
import React , { Component } from 'react';
import  {
    StyleSheet,
    View,
} from 'react-native'

class ShopsController extends Component {
    render() {
        return(
            <View style={styles.container}></View>
        );
    }
}
var styles
styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'orange'
    }
});

module.exports = ShopsController;