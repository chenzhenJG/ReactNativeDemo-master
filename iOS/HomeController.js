/**
 * Created by chenzhen on 16/7/13.
 */
import React, { Component } from 'react';
import {
    TouchableOpacity,
    AppRegistry,
    StyleSheet,
    View,
    ListView,
    Image,
    Text,
    NavigatorIOS,
} from 'react-native';




var NEWS_LIST_API_URL = 'http://api.zhinanmao.com/v2-8-0/tripapi/designerList?appver=2.8.0&carrier=CMCC&channel=AppStore&did=1ECFEDC8-2EC6-44AC-8B4E-1E689B0B67ED&mac=64A53CFF-D07B-46DC-9446-27E5730F4F41&network=WIFI&page=1&res=375X667&sysver=9.3.2&token=fd1e01b9b03c659aee4b76076cf94fa53ced7aa6692833caf354d8c23c145363&mfr=apple&sign=a5bdf6d1500583c0fd863ef0b86e8d72';
import LoadingView from './LoadingView';
import styles from './HomeCss';
class HomeController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource : new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            loaded : false,
        }

    }

    componentWillMount(){
        this.fetchData();
    }
    fetchData() {
        fetch(NEWS_LIST_API_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource : this.state.dataSource.cloneWithRows(responseData.data.list),
                    loaded : true,
                });

            })
            .done();

    }
    render() {
        if (!this.state.loaded) {
            return (
                <LoadingView />
            );
        }
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderListViewCell.bind(this)}
                style = {styles.listViewStyle}/>
        );
    }
    /* 单元格 */
    _onclick(cell) {
       
    }
    renderListViewCell(cell) {
        var tag_Text;
        if (cell.tag_text !== "") {
            tag_Text = <Text style = {styles.tag_Text}>{cell.tag_text}</Text>;
        }

        return (
            <TouchableOpacity onPress = {() => this._onclick(cell)}>
                <View style = {{height:350}}>
                    <Image source = {{uri:cell.user_icon}} style = {styles.logo}>
                        {tag_Text}
                    </Image>
                    <Text style = {styles.news_title}>{cell.news_title}</Text>
                    <View style = {{flexDirection:'row'}}>
                        <Text style = {styles.real_name}>
                            {cell.real_name}
                        </Text>
                        <View style = {styles.user_title_View}>
                            <Text style = {styles.user_title}>
                                {cell.user_title}
                            </Text>
                        </View>
                    </View>
                    <Text style = {styles.news_content}>
                        {cell.news_content}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }


}




module.exports = HomeController;