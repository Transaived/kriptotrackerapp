import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import {CustomHeader} from '../index';

export class AlarmScreen extends Component {
  render() {
    let {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        <CustomHeader title="Alarm" />
        <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
          <Text>Alarm!</Text>
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => navigation.navigate('AlarmDetail')}>
            <Text>Go to Alarm detail</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
