import React from 'react';
import {FlatList} from 'react-native';

import ScheduleItem from '_molecules/ScheduleItem';

const ScheduleScreenTemplate = ({data}) => (
  <FlatList
    data={data}
    renderItem={({item}) => <ScheduleItem data={item} />}
    keyExtractor={(item) => `${item.id}`}
  />
);

export default ScheduleScreenTemplate;
