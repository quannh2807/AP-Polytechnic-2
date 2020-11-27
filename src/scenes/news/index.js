import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import NewsScreenTemplate from '_templates/NewsScreenTemplate';

const TopTab = createMaterialTopTabNavigator();
const data = [
  {
    id: 1,
    title:
      'THÔNG BÁO V/v ĐĂNG KÝ HỌC LẠI NGÀNH CÔNG NGHỆ THÔNG TIN TẠI BLOCK 2 KỲ FALL 2020',
    content:
      'Phòng Tổ chức và Quản lý đào tạo đang mở 1 số lớp ngành Công nghệ thông tin tại block 2 kỳ FA20 để đáp ứng nhu cầu trả nợ môn của sinh viên. Hiện tại chỗ trống của các lớp này còn có thể nhận thêm sinh viên có mong muốn học lại. Nếu sinh viên muốn đăng ký học lại có thể check môn học, ca học, ngày bắt đầu tại đây.',
    created_by: 'thanhnv96',
    created_at: '2019-12-03T05:11:13.994Z',
    updated_at: '2019-12-03T05:11:13.994Z',
  },
  {
    id: 2,
    title:
      'THÔNG BÁO V/v ĐĂNG KÝ HỌC LẠI NGÀNH CÔNG NGHỆ THÔNG TIN TẠI BLOCK 2 KỲ FALL 2020',
    content:
      'Phòng Tổ chức và Quản lý đào tạo đang mở 1 số lớp ngành Công nghệ thông tin tại block 2 kỳ FA20 để đáp ứng nhu cầu trả nợ môn của sinh viên. Hiện tại chỗ trống của các lớp này còn có thể nhận thêm sinh viên có mong muốn học lại. Nếu sinh viên muốn đăng ký học lại có thể check môn học, ca học, ngày bắt đầu tại đây.',
    created_by: 'thanhnv96',
    created_at: '2019-12-03T05:11:13.994Z',
    updated_at: '2019-12-03T05:11:13.994Z',
  },
  {
    id: 3,
    title:
      'THÔNG BÁO V/v ĐĂNG KÝ HỌC LẠI NGÀNH CÔNG NGHỆ THÔNG TIN TẠI BLOCK 2 KỲ FALL 2020',
    content:
      'Phòng Tổ chức và Quản lý đào tạo đang mở 1 số lớp ngành Công nghệ thông tin tại block 2 kỳ FA20 để đáp ứng nhu cầu trả nợ môn của sinh viên. Hiện tại chỗ trống của các lớp này còn có thể nhận thêm sinh viên có mong muốn học lại. Nếu sinh viên muốn đăng ký học lại có thể check môn học, ca học, ngày bắt đầu tại đây.',
    created_by: 'thanhnv96',
    created_at: '2019-12-03T05:11:13.994Z',
    updated_at: '2019-12-03T05:11:13.994Z',
  },
  {
    id: 4,
    title:
      'THÔNG BÁO V/v ĐĂNG KÝ HỌC LẠI NGÀNH CÔNG NGHỆ THÔNG TIN TẠI BLOCK 2 KỲ FALL 2020',
    content:
      'Phòng Tổ chức và Quản lý đào tạo đang mở 1 số lớp ngành Công nghệ thông tin tại block 2 kỳ FA20 để đáp ứng nhu cầu trả nợ môn của sinh viên. Hiện tại chỗ trống của các lớp này còn có thể nhận thêm sinh viên có mong muốn học lại. Nếu sinh viên muốn đăng ký học lại có thể check môn học, ca học, ngày bắt đầu tại đây.',
    created_by: 'thanhnv96',
    created_at: '2019-12-03T05:11:13.994Z',
    updated_at: '2019-12-03T05:11:13.994Z',
  },
  {
    id: 5,
    title:
      'THÔNG BÁO V/v ĐĂNG KÝ HỌC LẠI NGÀNH CÔNG NGHỆ THÔNG TIN TẠI BLOCK 2 KỲ FALL 2020',
    content:
      'Phòng Tổ chức và Quản lý đào tạo đang mở 1 số lớp ngành Công nghệ thông tin tại block 2 kỳ FA20 để đáp ứng nhu cầu trả nợ môn của sinh viên. Hiện tại chỗ trống của các lớp này còn có thể nhận thêm sinh viên có mong muốn học lại. Nếu sinh viên muốn đăng ký học lại có thể check môn học, ca học, ngày bắt đầu tại đây.',
    created_by: 'thanhnv96',
    created_at: '2019-12-03T05:11:13.994Z',
    updated_at: '2019-12-03T05:11:13.994Z',
  },
  {
    id: 6,
    title:
      'THÔNG BÁO V/v ĐĂNG KÝ HỌC LẠI NGÀNH CÔNG NGHỆ THÔNG TIN TẠI BLOCK 2 KỲ FALL 2020',
    content:
      'Phòng Tổ chức và Quản lý đào tạo đang mở 1 số lớp ngành Công nghệ thông tin tại block 2 kỳ FA20 để đáp ứng nhu cầu trả nợ môn của sinh viên. Hiện tại chỗ trống của các lớp này còn có thể nhận thêm sinh viên có mong muốn học lại. Nếu sinh viên muốn đăng ký học lại có thể check môn học, ca học, ngày bắt đầu tại đây.',
    created_by: 'thanhnv96',
    created_at: '2019-12-03T05:11:13.994Z',
    updated_at: '2019-12-03T05:11:13.994Z',
  },
  {
    id: 7,
    title:
      'THÔNG BÁO V/v ĐĂNG KÝ HỌC LẠI NGÀNH CÔNG NGHỆ THÔNG TIN TẠI BLOCK 2 KỲ FALL 2020',
    content:
      'Phòng Tổ chức và Quản lý đào tạo đang mở 1 số lớp ngành Công nghệ thông tin tại block 2 kỳ FA20 để đáp ứng nhu cầu trả nợ môn của sinh viên. Hiện tại chỗ trống của các lớp này còn có thể nhận thêm sinh viên có mong muốn học lại. Nếu sinh viên muốn đăng ký học lại có thể check môn học, ca học, ngày bắt đầu tại đây.',
    created_by: 'thanhnv96',
    created_at: '2019-12-03T05:11:13.994Z',
    updated_at: '2019-12-03T05:11:13.994Z',
  },
  {
    id: 8,
    title:
      'THÔNG BÁO V/v ĐĂNG KÝ HỌC LẠI NGÀNH CÔNG NGHỆ THÔNG TIN TẠI BLOCK 2 KỲ FALL 2020',
    content:
      'Phòng Tổ chức và Quản lý đào tạo đang mở 1 số lớp ngành Công nghệ thông tin tại block 2 kỳ FA20 để đáp ứng nhu cầu trả nợ môn của sinh viên. Hiện tại chỗ trống của các lớp này còn có thể nhận thêm sinh viên có mong muốn học lại. Nếu sinh viên muốn đăng ký học lại có thể check môn học, ca học, ngày bắt đầu tại đây.',
    created_by: 'thanhnv96',
    created_at: '2019-12-03T05:11:13.994Z',
    updated_at: '2019-12-03T05:11:13.994Z',
  },
  {
    id: 9,
    title:
      'THÔNG BÁO V/v ĐĂNG KÝ HỌC LẠI NGÀNH CÔNG NGHỆ THÔNG TIN TẠI BLOCK 2 KỲ FALL 2020',
    content:
      'Phòng Tổ chức và Quản lý đào tạo đang mở 1 số lớp ngành Công nghệ thông tin tại block 2 kỳ FA20 để đáp ứng nhu cầu trả nợ môn của sinh viên. Hiện tại chỗ trống của các lớp này còn có thể nhận thêm sinh viên có mong muốn học lại. Nếu sinh viên muốn đăng ký học lại có thể check môn học, ca học, ngày bắt đầu tại đây.',
    created_by: 'thanhnv96',
    created_at: '2019-12-03T05:11:13.994Z',
    updated_at: '2019-12-03T05:11:13.994Z',
  },
];

const NewsScreen = () => {
  return (
    <TopTab.Navigator
      initialRouteName="hoctap"
      tabBarOptions={{
        activeTintColor: '#41a6dc',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },
      }}>
      <TopTab.Screen
        name="HocTap"
        component={HocTapScreen}
        options={{
          title: 'Học tập',
        }}
      />
      <TopTab.Screen
        name="HocPhi"
        component={HocPhiScreen}
        options={{
          title: 'Học phí',
        }}
      />
      <TopTab.Screen
        name="HoatDong"
        component={HoatDongScreen}
        options={{
          title: 'Hoạt động',
        }}
      />
    </TopTab.Navigator>
  );
};

export default NewsScreen;

const HocTapScreen = () => <NewsScreenTemplate data={data} />;
const HocPhiScreen = () => <NewsScreenTemplate data={data} />;
const HoatDongScreen = () => <NewsScreenTemplate data={data} />;
