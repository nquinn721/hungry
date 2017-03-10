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
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
    }

    _handleAppStateChange = (nextAppState) => {
        clearTimeout(this.sendToServerTimeout);
        this.sendToServerTimeout = null;
        console.log('HANDLING APP STATE', this.sendToServerTimeout);

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