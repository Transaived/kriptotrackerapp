import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import {CustomHeader} from '../index';
import AddCoin from '../components/AddCoin';
import CoinList from '../components/CoinList';
import {WatchListContextProvider} from '../context/watchListContext';

export class HomeScreen extends Component {
  render() {
    let {navigation} = this.props;

    return (
      <View style={{flex: 1}}>
        <CustomHeader title="HomeScreen" />
        <View>
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => navigation.navigate('HomeDetail')}>
            <Text>Go to Home detail</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
