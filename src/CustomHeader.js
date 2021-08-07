import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

export class CustomHeader extends Component {
  render() {
    let {title} = this.props;
    return (
      <View
        style={{
          flexDirection: 'row',
          height: '10%',
          backgroundColor: '#808080',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 24}}>{title}</Text>
      </View>
    );
  }
}
