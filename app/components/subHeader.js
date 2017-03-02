import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, Image, View, ListView, Animated, TouchableHighlight, Dimensions} from 'react-native';
import Settings from './lib/settings';



export default class SubHeader extends Component {
    constructor(props){
        super();
        this.home = props.home;
    }

    changeScene(scene){
        this.home.setState({scene})
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.menuItem}>
                    <TouchableHighlight onPress={this.changeScene.bind(this, 'Shake')}>
                        <Text style={styles.listItem}>Shake</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.menuItem}>
                    <TouchableHighlight onPress={this.changeScene.bind(this, 'Restaurants')}>
                        <Text style={styles.listItem}>Restaurants</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.menuItem}>
                    <TouchableHighlight onPress={this.changeScene.bind(this, 'Feedback')}>
                        <Text style={styles.listItem}>FeedBack</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#333'
    //
    },
    listItem: {
        color: 'white',
    },
    menuItem: {
        padding: 10,
        borderWidth: 3,
        borderColor: '#d35400'
    }
});
AppRegistry.registerComponent('SubHeader', () => SubHeader);
