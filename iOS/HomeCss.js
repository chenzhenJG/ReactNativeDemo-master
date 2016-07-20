/**
 * Created by chenzhen on 16/7/19.
 */

import React, { Component } from 'react';
import {
    StyleSheet,

} from 'react-native';
var styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'white',
    },
    listViewStyle : {
        marginBottom:114,
        backgroundColor:'white'
    },

    logo : {
        marginTop:10,
        marginLeft:15,
        marginRight:15,
        height:220
    },
    tag_Text : {
        fontSize:10,
        color:'white',
        textAlign:'center',
        backgroundColor:'#10C7D4',
        marginTop:10,
        width:70,
        height:12,
    },
    news_title : {
        marginTop:15,
        marginLeft:15,
        marginRight:15,
        fontSize:15,
        color:'#10C7D4',
    },
    real_name : {
        marginTop:10,
        marginLeft:15,
        marginRight:15,
        fontSize:13,
        color:'black',
    },
    user_title_View : {
        backgroundColor:'#F0F9F9',
        justifyContent: 'center',
        marginLeft:-5,
        marginTop:8,
        height:16,
        borderWidth:0.5,
        borderColor:'#10C7D4',
        borderRadius:2,
    },
    user_title : {
        fontSize:10,
        textAlign:'center',
        color:'#10C7D4',
    },
    news_content : {
        marginTop:20,
        marginLeft:15,
        marginRight:15,
        fontSize:12,
        color:'black',
    }
});
module.exports = styles;