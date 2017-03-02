import React, { Component } from 'react';
import {AppRegistry, Dimensions, StyleSheet, Text, Image, View, Animated, TouchableHighlight} from 'react-native';
import HomeQuickSettings from './homeQuickSettings';
import Header from './header';
import Settings from './lib/settings';
import SubHeader from './subHeader';
import Shake from './homeViews/shake';
import Feedback from './homeViews/feedback';
import Restaurants from './homeViews/restaurants';



new Settings();

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            scene: 'Shake'
        };
    }


    render() {
        return (
            <View style={styles.container}>
                <Header style={styles.header}/>
                <SubHeader style={styles.subHeader} home={this}/>
                <View style={styles.mainView}>
                    {this.state.scene === 'Shake' ?
                        <Shake/>
                        : this.state.scene === 'Restaurants' ?
                        <Restaurants/>
                        : this.state.scene === 'Feedback' ?
                        <Feedback/>
                        : <Shake/>}
                </View>

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
        flex: 4,
    },
    footer: {
        flex: 1
    }
});
AppRegistry.registerComponent('Home', () => Home);
