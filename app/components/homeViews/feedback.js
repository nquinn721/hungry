import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Animated, TouchableHighlight} from 'react-native';

export default class Feedback extends Component {
    constructor(){
        super();

    }
    render(){
        return(
            <View>
                <Text>Feed Back</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
});
AppRegistry.registerComponent('Feedback', () => Feedback);
