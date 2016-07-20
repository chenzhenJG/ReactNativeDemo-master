/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {

    AppRegistry,

    StyleSheet,
    TabBarIOS,
    NavigatorIOS,
    View,

} from 'react-native';


import HomeController   from    './iOS/HomeController'; //首页
import ShopsController  from    './iOS/ShopsController'; //商店
import MineController   from    './iOS/MineController'; //我的
import codePush         from "react-native-code-push";
class ReactNative extends Component {
    state = {
        selectedTab:0
    }
    changeTab(tabName){

        this.setState({
            selectedTab:tabName
        });
    }
    componentDidMount(){

        codePush.sync({ updateDialog: {title:"更新"}, installMode: codePush.InstallMode.IMMEDIATE });
        codePush.sync();
    }
render() {
    return (
        <TabBarIOS tintColor="#10C7D4" barTintColor="white">
            <TabBarIOS.Item
                title = "首页"
                icon = {require('image!icon_tabbar_homepage_selected')}
                onPress = {()=> this.changeTab(0)}
                selected = { this.state.selectedTab === 0}>
                <NavigatorIOS
                    style = {styles.navgatorIOSStyle}
                    translucent={false}
                    initialRoute={{
                    title: '首页',
                    component: HomeController,
                    }}
                />
            </TabBarIOS.Item>
            <TabBarIOS.Item
                title = "商家"
                icon = {require('image!icon_tabbar_merchant_normal')}
                selectedIcon = {require('image!icon_tabbar_merchant_selected')}
                onPress = {() => this.changeTab(1)}
                selected = {this.state.selectedTab === 1}
                >
                <NavigatorIOS
                    style = {styles.navgatorIOSStyle}
                    translucent = {false}
                    initialRoute = {{
                        title:'商家',
                        component:ShopsController,
                    }}
                />
            </TabBarIOS.Item>
            <TabBarIOS.Item
                title = "我的"
                icon = {require('image!icon_tabbar_mine')}
                onPress = {() => this.changeTab(2)}
                selected = {this.state.selectedTab === 2}
                >
                <NavigatorIOS
                    style = {styles.navgatorIOSStyle}
                    translucent = {false}
                    initialRoute = {{
                        title:'我的',
                        component:MineController
                    }}
                />
            </TabBarIOS.Item>

        </TabBarIOS>

  );
}
}

var styles = StyleSheet.create({

      container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: '#F5FCFF',
      },
      navgatorIOSStyle:{
          flex:1,
          flexDirection:'column',
          backgroundColor: '#F5FCFF',
      },
      submitButtonStyle: {
          flex:1,
          fontSize:18,
          color:'#ffffff',
          alignSelf:'center',
          textAlign:'center',
          justifyContent:'center'
      },
  
});

AppRegistry.registerComponent('ReactNative', () => ReactNative);
