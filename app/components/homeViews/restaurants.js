import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Animated, TouchableHighlight, Image, ListView} from 'react-native';
import YelpAPI from '../lib/yelp';
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Restaurants extends Component {
    constructor(){
        super();

        this.state = {
            yelpData: ds.cloneWithRows([]),

        }

        this.get();
    }
    get() {
        YelpAPI.search(yelpData => {
            if(yelpData){
                yelpData = ds.cloneWithRows(yelpData);
                this.setState({yelpData});
            }
        });
    }
    renderYelpList(data, i){
        return(
            <View style={styles.item} key={i}>
                <Image
                    style={{width: 50, height: 50}}
                    source={{uri: data.image_url}}
                />
                <Text style={styles.title}>{data.name}</Text>
            </View>
        );
    }

    getList(){

    }
    render(){
        return (
            <ListView
            dataSource={this.state.yelpData}
            renderRow={this.renderYelpList.bind(this)}
            />
        )
    }
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        backgroundColor: '#f39c12',
        padding: 10,
        margin: 10
    },
    title: {
        color: 'white',
        paddingLeft: 10
    },
});
AppRegistry.registerComponent('Restaurants', () => Restaurants);
