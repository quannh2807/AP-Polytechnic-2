import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import ScheduleScreenTemplate from '_templates/ScheduleScreenTemplate';

const TopTab = createMaterialTopTabNavigator();

const data = [
  {
    id: 1,
    date: 1604370609,
    room: 'L203',
    location: 'TVB',
    subject_code: 'SYB301',
    subject_name: 'Khởi sự doanh nghiệp',
    class: 'PT15111-WEB',
    teacher: 'hanq9',
    shift: 4,
    time: '14:10:00 - 16:10:00',
    detail: 'Đánh giá giai đoạn 2 của kế hoạch kinh doanh',
  },
  {
    id: 2,
    date: 1604370610,
    room: 'L204',
    location: 'TVB',
    subject_code: 'SYB301',
    subject_name: 'Khởi sự doanh nghiệp',
    class: 'PT15111-WEB',
    teacher: 'hanq9',
    shift: 4,
    time: '14:10:00 - 16:10:00',
    detail: 'Đánh giá giai đoạn 2 của kế hoạch kinh doanh',
  },
  {
    id: 3,
    date: 1604370609,
    room: 'L203',
    location: 'TVB',
    subject_code: 'SYB301',
    subject_name: 'Khởi sự doanh nghiệp',
    class: 'PT15111-WEB',
    teacher: 'hanq9',
    shift: 4,
    time: '14:10:00 - 16:10:00',
    detail: 'Đánh giá giai đoạn 2 của kế hoạch kinh doanh',
  },
  {
    id: 4,
    date: 1604370609,
    room: 'L203',
    location: 'TVB',
    subject_code: 'SYB301',
    subject_name: 'Khởi sự doanh nghiệp',
    class: 'PT15111-WEB',
    teacher: 'hanq9',
    shift: 4,
    time: '14:10:00 - 16:10:00',
    detail: 'Đánh giá giai đoạn 2 của kế hoạch kinh doanh',
  },
  {
    id: 5,
    date: 1604370609,
    room: 'L203',
    location: 'TVB',
    subject_code: 'SYB301',
    subject_name: 'Khởi sự doanh nghiệp',
    class: 'PT15111-WEB',
    teacher: 'hanq9',
    shift: 4,
    time: '14:10:00 - 16:10:00',
    detail: 'Đánh giá giai đoạn 2 của kế hoạch kinh doanh',
  },
  {
    id: 6,
    date: 1604370609,
    room: 'L203',
    location: 'TVB',
    subject_code: 'SYB301',
    subject_name: 'Khởi sự doanh nghiệp',
    class: 'PT15111-WEB',
    teacher: 'hanq9',
    shift: 4,
    time: '14:10:00 - 16:10:00',
    detail: 'Đánh giá giai đoạn 2 của kế hoạch kinh doanh',
  },
  {
    id: 7,
    date: 1604370609,
    room: 'L203',
    location: 'TVB',
    subject_code: 'SYB301',
    subject_name: 'Khởi sự doanh nghiệp',
    class: 'PT15111-WEB',
    teacher: 'hanq9',
    shift: 4,
    time: '14:10:00 - 16:10:00',
    detail: 'Đánh giá giai đoạn 2 của kế hoạch kinh doanh',
  },
  {
    id: 8,
    date: 1604370609,
    room: 'L203',
    location: 'TVB',
    subject_code: 'SYB301',
    subject_name: 'Khởi sự doanh nghiệp',
    class: 'PT15111-WEB',
    teacher: 'hanq9',
    shift: 4,
    time: '14:10:00 - 16:10:00',
    detail: 'Đánh giá giai đoạn 2 của kế hoạch kinh doanh',
  },
  {
    id: 9,
    date: 1604370609,
    room: 'L203',
    location: 'TVB',
    subject_code: 'SYB301',
    subject_name: 'Khởi sự doanh nghiệp',
    class: 'PT15111-WEB',
    teacher: 'hanq9',
    shift: 4,
    time: '14:10:00 - 16:10:00',
    detail: 'Đánh giá giai đoạn 2 của kế hoạch kinh doanh',
  },
];

const ScheduleScreen = () => {
  return (
    <TopTab.Navigator
      initialRouteName="LichHoc"
      tabBarOptions={{
        activeTintColor: '#41a6dc',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },
      }}>
      <TopTab.Screen
        name="LichHoc"
        component={LichHoc}
        options={{title: 'Lịch học'}}
      />
      <TopTab.Screen
        name="LichThi"
        component={LichThi}
        options={{title: 'Lịch thi'}}
      />
    </TopTab.Navigator>
  );
};

export default ScheduleScreen;

const LichHoc = () => <ScheduleScreenTemplate data={data} />;
const LichThi = () => <ScheduleScreenTemplate data={data} />;
