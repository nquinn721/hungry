import React, { Component } from 'react';
import {AppRegistry, Dimensions, StyleSheet, Text, Slider, View, Animated, TouchableHighlight} from 'react-native';
import HomeQuickSettings from './homeQuickSettings';
import Header from './header';
import Shake from './homeViews/shake';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import Feedback from './homeViews/feedback';
import Restaurants from './homeViews/restaurants';
import State from './state';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            scene: 'Shake',
            index: 0,
            routes: [
                { key: '1', title: 'Shake' },
                { key: '2', title: 'Businesses' },
                { key: '3', title: 'Feedback' }
            ],
        };
    }

    _handleChangeTab(){

    }

    _handleChangeTab(index) {
        this.setState({ index });
    };

    _renderHeader(props){
        return <TabBar {...props} indicatorStyle={styles.tabBorder} />;
    };

    _renderScene({ route }) {
        switch (route.key) {
            case '1':
                return <Shake view={this}/>;
            case '2':
                return <Restaurants view={this}/>;
            case '3':
                return <Feedback view={this}/>
            default:
                return null;
        }
    };


    render() {
        return (
            <View style={styles.container}>
                <Header style={styles.header}/>
                <TabViewAnimated
                    style={styles.mainView}
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderHeader={this._renderHeader}
                    onRequestChangeTab={this._handleChangeTab}
                />

                <HomeQuickSettings style={styles.footer} />
            </View>
        );
    }
}



const styles = StyleSheet.create({
    header:{
        flex: 2
    },
    subHeader:{
        flex: 2
    },
    container: {
        backgroundColor: '#e67e22',
        flex: 1,
    },
    mainView: {
        flex: 2,
        backgroundColor:'#222'
    },
    footer: {
        flex: 1
    },
    tabBorder: {
        backgroundColor: '#d35400'
    }
});
AppRegistry.registerComponent('Home', () => Home);
