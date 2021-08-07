import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ActivityIndıcator,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import ListItem from '../Screens/ListItem';

function DataFetching() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=24h`,
      )
      .then(response => {
        setData(response.data);
        setIsLoading(false);
      })

      .catch(error => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#5500dc" />
      </View>
    );
  }

  return (
    <View
      style={{
        backgroundColor: '#d3d3d3',
      }}>
      <FlatList
        keyExtractor={item => item.id}
        data={data}
        renderItem={({item}) => (
          <ListItem
            name={item.name}
            symbol={item.symbol}
            current_price={item.current_price}
            price_change_percentage_24h_in_currency={
              item.price_change_percentage_24h_in_currency
            }
            image={item.image}
          />
        )}
      />
    </View>
  );
}

export default DataFetching;
