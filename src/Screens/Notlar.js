import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import {CustomHeader} from '../index';

export class NotlarScreen extends Component {
  render() {
    let {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        <CustomHeader title="Notlar" />
        <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
          <Text>Notlar!</Text>
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => navigation.navigate('NotlarDetail')}>
            <Text>Go to Notlar detail</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
