import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import {IMAGE} from './constants/Image';

export class CustomHeader2 extends Component {
  render() {
    let {title, navigation} = this.props;
    return (
      <View
        style={{
          flexDirection: 'row',
          height: '10%',
          backgroundColor: '#808080',
        }}>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center'}}
          onPress={() => navigation.goBack()}>
          <Image
            style={{width: 40, height: 40, marginLeft: 5}}
            source={IMAGE.ICON_BACK}
            resizeMode="contain"></Image>
        </TouchableOpacity>
        <View style={{flex: 1.5, justifyContent: 'center'}}>
          <Text style={{fontSize: 24, textAlign: 'center'}}>{title}</Text>
        </View>
        <View style={{flex: 1}}></View>
      </View>
    );
  }
}
