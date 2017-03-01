import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, Image, View, ListView, Animated, TouchableHighlight} from 'react-native';
import HomeQuickSettings from './homeQuickSettings';
import Header from './header';
import Settings from './settings';


const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


new Settings();

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            yelpData: ds.cloneWithRows([{name: 'super', image_url: 'super.com'}]),
            shakeme: 'Shake Me!',
            // bounceValue: new Animated.Value(0),
        };
    }
    componentDidMount() {
        // this.state.bounceValue.setValue(1.5);     // Start large
        // Animated.spring(                          // Base: spring, decay, timing
        //     this.state.bounceValue,                 // Animate `bounceValue`
        //     {
        //         toValue: 0.8,                         // Animate to smaller size
        //         friction: 1,                          // Bouncier spring
        //     }
        // ).start();                                // Start the animation
        // console.log('bouncing in');
    }

    shake(){
        // Animated.spring(                          // Base: spring, decay, timing
        //     this.state.bounceValue,                 // Animate `bounceValue`
        //     {
        //         toValue: 0.8,                         // Animate to smaller size
        //         friction: 1,                          // Bouncier spring
        //     }
        // ).start();
    }


    render() {
        return (
            <View style={styles.container}>
                <Header></Header>
                <TouchableHighlight onPress={this.shake()}>
                    <Text style={styles.title}>{this.state.shakeme}</Text>
                </TouchableHighlight>
                <HomeQuickSettings />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        margin: 5,
        flexDirection:'row',
        backgroundColor:'rgba(0,0,0,0.2)'
    },

    business: {
        color: 'white',
        fontSize: 18,
        paddingLeft:10
    },
    title: {
        color: 'white',
        fontSize: 50,
        paddingBottom: 50
        // transform: [                        // `transform` is an ordered array
        //     {scale: new Animated.Value(0)},  // Map `bounceValue` to `scale`
        // ]
    },
    container: {
        backgroundColor: '#e67e22',
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainButton: {
        backgroundColor: '#2980b9'
    }
})
AppRegistry.registerComponent('Home', () => Home);
