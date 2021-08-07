import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

import {CustomHeader2} from '../index';

export class AraScreenDetail extends Component {
  render() {
    let {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        <CustomHeader2 title="Ara Detail" navigation={navigation} />
        <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
          <Text>Ara Detail!</Text>
        </View>
      </View>
    );
  }
}
