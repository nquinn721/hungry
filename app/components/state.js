import React, {Component} from 'react';
import {AppState, View, InteractionManager} from 'react-native';
import Server from './lib/server';

export default class State extends Component {
    sendToServerTimeout;
    state = {
        appState: AppState.currentState
    }

    componentDidMount() {
        console.log('componetn did mount');
        AppState.addEventListener('change', this._handleAppStateChange);
    }

    componentWillUnmount() {
        console.log('component will unmount');
        AppState.removeEventListener('change', this._handleAppStateChange);
    }

    _handleAppStateChange = (nextAppState) => {
        clearTimeout(this.sendToServerTimeout);
        this.sendToServerTimeout = null;
        console.log('HANDLE APP STATE');
        console.log(nextAppState);
        if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
            console.log('App has come to the foreground!');
            Server.openApp();
        }else{
            console.log('closing app');
            Server.closeApp();
        }
        this.setState({appState: nextAppState});
    }

    render(){
        return(<View></View>);
    }


}