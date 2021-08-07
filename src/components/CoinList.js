import React, {useEffect, useState, useContext} from 'react';
import {Text, View, FlatList} from 'react-native';
import coinGecko from '../apis/coinGecko';
import {WatchListContext} from '../context/watchListContext';
import Coin from './Coin';

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const {watchList, deleteCoin} = useContext(WatchListContext);
  const [isLoading, setIsLoading] = useState(false);
  console.log(watchList);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await coinGecko.get('/coins/markets', {
        params: {
          vs_currency: 'usd',
          ids: watchList.join(','),
        },
      });
      setCoins(response.data);
      setIsLoading(false);
    };

    if (watchList.length > 0) {
      fetchData();
    } else setCoins([]);
  }, [watchList]);

  const renderCoins = () => {
    if (isLoading) {
      return <Text>Loading...</Text>;
    }

    return (
      <FlatList>
        {coins.map(coin => {
          return;
          <WatchListContextProvider>
            <DataFetching key={coin.id} coin={coin} deleteCoin={deleteCoin} />
          </WatchListContextProvider>;
        })}
      </FlatList>
    );
  };
  return <View>{renderCoins()}</View>;
};

export default CoinList;
