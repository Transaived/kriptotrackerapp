import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const ListItem = ({
  name,
  symbol,
  current_price,
  price_change_percentage_24h_in_currency,
  image,
}) => {
  const priceChangeColor =
    price_change_percentage_24h_in_currency > 0 ? '#34C759' : '#FF3B30';
  return (
    <TouchableOpacity>
      <View style={styles.itemWrapper}>
        {/* left */}
        <View style={styles.leftWrapper}>
          <Image source={{uri: image}} style={styles.image} />
          <View style={styles.titlesWrapper}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
          </View>
        </View>

        {/* right */}
        <View style={styles.rightWrapper}>
          <Text style={styles.title}>
            $ {current_price.toLocaleString('en-US', {currency: 'USD'})}
          </Text>
          <Text style={[styles.subtitle, {color: priceChangeColor}]}>
            {price_change_percentage_24h_in_currency.toFixed(2)}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    paddingHorizontal: 16,
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  leftWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titlesWrapper: {
    marginLeft: 12,
  },
  image: {
    height: 40,
    width: 40,
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: '#A9ABB1',
  },
  rightWrapper: {
    alignItems: 'flex-end',
  },
});

export default ListItem;
