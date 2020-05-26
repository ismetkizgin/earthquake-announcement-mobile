import React from 'react';
import {View} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Avatar, Title, Drawer} from 'react-native-paper';
import {commonStyle, drawerContentStyle} from '../util';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const DrawerContent = ({props, navigation}) => {
  return (
    <View style={commonStyle.container}>
      <DrawerContentScrollView {...props}>
        <View style={drawerContentStyle.drawerContent}>
          <View style={drawerContentStyle.userInfoSection}>
            <Avatar.Image
              source={{
                uri:
                  'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png',
              }}
              size={120}
            />
          </View>
          <Drawer.Section>
            <View>
              <Title style={drawerContentStyle.title}>Alihan Akçam</Title>
            </View>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home" color={'white'} size={size} />
              )}
              labelStyle={drawerContentStyle.text}
              label="Anasayfa"
              onPress={() => {
                navigation.navigate('home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="profile" color={'white'} size={size} />
              )}
              labelStyle={drawerContentStyle.text}
              label="Profil"
              onPress={() => {
                navigation.navigate('profile');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="persons" color={'white'} size={size} />
              )}
              labelStyle={drawerContentStyle.text}
              label="Kişilerim"
              onPress={() => {
                navigation.navigate('contacts');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="earth" color={'white'} size={size} />
              )}
              labelStyle={drawerContentStyle.text}
              label="Anlık Deprem İzleme"
              onPress={() => {
                navigation.navigate('instantEarthquakes');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-network" color={'white'} size={size} />
              )}
              labelStyle={drawerContentStyle.text}
              label="Acil Durum Noktaları"
              onPress={() => {
                navigation.navigate('emergencyPoints');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="worker" color={'white'} size={size} />
              )}
              labelStyle={drawerContentStyle.text}
              label="Kurtarma Çalışmaları"
              onPress={() => {
                navigation.navigate('rescueWorks');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={'white'} size={size} />
              )}
              labelStyle={drawerContentStyle.text}
              label="Haberler"
              onPress={() => {
                navigation.navigate('news');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section styles={drawerContentStyle.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={'white'} size={size} />
          )}
          labelStyle={drawerContentStyle.text}
          label="Sign Out"
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
};
