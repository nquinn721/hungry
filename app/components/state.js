import React, {Component} from 'react';
import {AppState, View, InteractionManager} from 'react-native';
import Server from './lib/server';

export default class State extends Component {
    sendToServerTimeout;
    state = {
        appState: AppState.currentState
    }

    componentDidMount() {
        AppState.addEventListener('change', this._handleAppStateChange);
        this.timeInApp = Date.now();
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
        this.timeInApp = Date.now() - this.timeInApp;
    }

    _handleAppStateChange = (nextAppState) => {
        clearTimeout(this.sendToServerTimeout);
        this.sendToServerTimeout = null;
        if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
            Server.openApp();
        }else{
            Server.closeApp();
        }
        this.setState({appState: nextAppState});
    }

    render(){
        return(<View></View>);
    }


}