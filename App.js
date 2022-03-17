import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

//navigations
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler'


//screens
import HomeScreen from './components/HomeScreen';
import ChatScreen from './components/ChatScreen';
import DrawerContent from './components/DrawerContent';

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
          options={{
            title: 'Telegram',
            headerStyle: {
              backgroundColor: '#4682B4',
            },
            statusbar: {
              backgroundColor: '#4672B4',
              color: '#fff'
            },
            headerRight: () =>
            (
              <Icon name="search" size={20} color="white" style={{ marginRight: 20, }} />
            ),
            headerTintColor: '#fff'
          }}
        />
        <Drawer.Screen name="ChatScreen" component={ChatScreen} options={({ navigation, route }) => ({
          title: route.params ? <Image source={{
            uri: `${route.params.image}`
          }} style={{ width: 50, height: 50, borderRadius: 50, }} /> + route.params.name : null,
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
