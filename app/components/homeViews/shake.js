import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Animated, TouchableHighlight} from 'react-native';
import RNShakeEvent from 'react-native-shake-event';

export default class Shake extends Component {
    constructor(){
        super();

        this.state = {
            shakeme: 'Shake Me!'
        }

        RNShakeEvent.addEventListener('shake', function(){
            console.log('shook device');
        });
    }
    render(){
        return(
            <View style={styles.shakeView}>
                <Text style={styles.title}>Shake Me!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    shakeView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 50,
        paddingBottom: 50
        // transform: [                        // `transform` is an ordered array
        //     {scale: new Animated.Value(0)},  // Map `bounceValue` to `scale`
        // ]
    },
});
AppRegistry.registerComponent('Shake', () => Shake);
