import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    Navigator,
    StatusBar,
    TouchableHighlight
} from 'react-native';

export default class MainMenu extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <View style={styles.menu}>
                <View>
                    <Text>Menu</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'white'
    },
    item: {
        padding: 10
    },

});

AppRegistry.registerComponent('MainMenu', () => MainMenu);