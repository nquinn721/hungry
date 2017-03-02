import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions} from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome';


export default class Header extends Component {
    constructor(navigator){
        super();
        this.navigator = navigator;
    }
    openMainMenu(){
        this.navigator.push({id: 'mainMenu'});
    }
    render() {
        return (
            <View style={styles.setPosition}>
                <Icon name="navicon" size={20} color="white"/>
                <Text style={styles.text}>Hungry?</Text>
                <Text></Text>
                {/*<Icon name="comments" size={20} color="white"/>*/}
            </View>

        );
    }
};

const styles = StyleSheet.create({
    setPosition: {
        paddingTop: 30,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'space-between',
        backgroundColor: '#f39c12',
        flexDirection: 'row',
        paddingBottom: 10
    },
    text: {
        color: 'white',
        fontSize: 20
    }
})
AppRegistry.registerComponent('Header', () => Header);
