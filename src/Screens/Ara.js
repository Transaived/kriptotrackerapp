import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {SearchBar} from 'react-native-elements';
import DataFetching from '../Screens/DataFetching';
import {CustomHeader} from '../index';
import CoinList from '../components/CoinList';

export class AraScreen extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      loading: false,
      data: [],
      query: '',
      fullData: [],
    };
  }

  render() {
    let {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        <CustomHeader title="Ara" />
        <View>
          <Text>Kripto Ara!</Text>
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => navigation.navigate('AraDetail')}>
            <Text>Go to Ara detail</Text>
            <DataFetching />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
