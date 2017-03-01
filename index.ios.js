import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    Navigator,
    Menu,
    StatusBar,
    TouchableHighlight
} from 'react-native';
import Home from './app/components/home';
import MainMenu from './app/components/mainMenu';
import SideMenu from 'react-native-side-menu';

class Menu extends Component{
    render(){
        return(
            <View>
                <Text>Menu</Text>
            </View>
        );
    }
}

export default class Hungry extends Component {
    navigate(route, navigator){
        switch(route.id){
            case 'Home':
                return(<Home navigator={navigator} />);
            case 'MainMenu':
                return(<MainMenu navigator={navigator}/>);
        }
    }
    render() {
        const menu = <Menu navigator={navigator}/>;

        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />
                <SideMenu menu={menu}>
                    <ContentView/>
                </SideMenu>
                <Navigator
                    initialRoute={{id: 'Home'}}
                    renderScene={this.navigate}
                />
            </View>

        );
    }
}

class ContentView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+Control+Z for dev menu
                </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainScreenText: {
        color: '#fff'
    }
});

AppRegistry.registerComponent('Hungry', () => Hungry);
