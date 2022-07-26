import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';

//navigations
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler'

//screens
import HomeScreen from './src/pages/HomeScreen';
import ChatScreen from './src/pages/ChatScreen';
import DrawerContent from './src/pages/DrawerContent';

//Icons
import Icon from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();

export default function App({ navigation, route }) {

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation, route }) => ({
            headerStyle: {
              backgroundColor: '#4682B4',
            },
            statusbar: {
              backgroundColor: '#4672B4',
              color: '#fff'
            },
            headerTintColor: '#fff'
          })}
        />
        <Drawer.Screen name="ChatScreen" component={ChatScreen} options={({ navigation, route }) => ({
          title: route.params ?
            <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
              <Image source={{
                uri: `${route.params.image}`
              }} style={{ width: 40, height: 40, borderRadius: 50, }} />
              <Text style={{ marginLeft: 10, fontSize: 20, color: 'white', fontWeight: 'bold' }}>{route.params.name}</Text>
            </View> : null,
          headerStyle: {
            backgroundColor: '#4682B4',
          },
          statusbar: {
            backgroundColor: '#4672B4',
            color: '#fff'
          },
          headerLeft: () =>
          (
            <TouchableOpacity onPress={
              () => navigation.navigate('HomeScreen')
            }>

              <Icon name="arrow-left" size={20} color="white" style={{ marginLeft: 20, }} />

            </TouchableOpacity>
          ),
          headerTintColor: '#fff'
        })} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

