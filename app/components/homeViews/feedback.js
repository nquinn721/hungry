import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Animated, TouchableHighlight} from 'react-native';

export default class Feedback extends Component {
    constructor(){
        super();

    }
    render(){
        return(
            <View style={styles.viewArea}>
                <Text style={styles.mainText}>Feed Back</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainText: {
        color: 'white',
        fontSize: 20
    },
    viewArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
AppRegistry.registerComponent('Feedback', () => Feedback);
