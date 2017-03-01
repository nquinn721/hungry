import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    Navigator,
    StatusBar,
    TouchableHighlight
} from 'react-native';
import Home from './app/components/home';

export default class Hungry extends Component {
  navigate(route, navigator){
    switch(route.id){
      case 'Home':
        return(<Home navigator={navigator} />);
    }
  }
  render() {

    return (
        <View style={styles.container}>
          <StatusBar
              backgroundColor="blue"
              barStyle="light-content"
          />
          <Navigator
              initialRoute={{id: 'Home'}}
              renderScene={this.navigate}
          />
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
