import React from 'react';
import {FlatList} from 'react-native-gesture-handler';

import NewsItem from '_molecules/NewsItem';

const NewsScreenTemplate = ({data}) => (
  <FlatList
    data={data}
    renderItem={({item}) => <NewsItem item={item} />}
    keyExtractor={(item) => `${item.id}`}
  />
);

export default NewsScreenTemplate;
