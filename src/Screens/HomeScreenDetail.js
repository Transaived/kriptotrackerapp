import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

import {CustomHeader2} from '../index';

export class HomeScreenDetail extends Component {
  render() {
    let {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        <CustomHeader2 title="Home Detail" navigation={navigation} />
        <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
          <Text>Home Detail!</Text>
        </View>
      </View>
    );
  }
}
