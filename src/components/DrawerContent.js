import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Avatar, Title, Drawer} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const DrawerContent = ({props, navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#202325'}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
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
              <Title style={styles.title}>Alihan Akçam</Title>
            </View>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="profile" color={'white'} size={size} />
              )}
              labelStyle={styles.text}
              label="Profil"
              onPress={() => {
                navigation.navigate('profile');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="persons" color={'white'} size={size} />
              )}
              labelStyle={styles.text}
              label="Kişilerim"
              onPress={() => {
                navigation.navigate('contacts');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="earth" color={'white'} size={size} />
              )}
              labelStyle={styles.text}
              label="Anlık Deprem İzleme"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-network" color={'white'} size={size} />
              )}
              labelStyle={styles.text}
              label="Acil Durum Noktaları"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="worker" color={'white'} size={size} />
              )}
              labelStyle={styles.text}
              label="Kurtarma Çalışmaları"
              onPress={() => {
                navigation.navigate('rescueWorkListView');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={'white'} size={size} />
              )}
              labelStyle={styles.text}
              label="Haberler"
              onPress={() => {}}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section styles={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={'white'} size={size} />
          )}
          labelStyle={styles.text}
          label="Sign Out"
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    marginLeft: 70,
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  title: {
    marginLeft: 70,
    marginTop: 20,
    fontSize: 20,
    flexDirection: 'row',
    alignItems: 'center',
    color: 'white',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});
