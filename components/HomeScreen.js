import { View, ScrollView, Text, Image, StatusBar, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import moment from 'moment'

import UserComponent from './UserComponent'


import { TouchableHighlight, TouchableOpacity } from 'react-native'

//api
import axios from 'axios'

//image
import Avatar from '../assets/girlPhoto.jpg'

//Icons
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDrawerStatus } from '@react-navigation/drawer'


const HomeScreen = ({ navigation, route }) => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("http://192.168.1.102:8082/users")
            .then(response => setUsers(response.data))
    }, [])


    return (
        <View style={{ flex: 10, }}>
            <StatusBar barStyle="light-content" backgroundColor="#33638b" />

            {users.map(user => {

                const date = moment(user.lastMessage.messageTime)

                let dateString;

                if (date < moment().startOf('week')) {
                    dateString = date.format('DD MMM.')
                } else if (date < moment().startOf('day')) {
                    dateString = date.format('ddd')
                } else {
                    dateString = date.format('hh:mm A')
                }

                return (<TouchableHighlight key={user.login.uuid}
                    activeOpacity={1}
                    underlayColor='#DEDEDE'
                    onPress={() => {
                        navigation.navigate('ChatScreen', {
                            name: `${user.name.first} ${user.name.last}`,
                            image: user.picture.medium,
                        })
                    }}
                >
                    <UserComponent image={user.picture.medium} username={user.name.first} lastname={user.name.last} date={dateString} lastMessage={user.lastMessage.message} />
                </TouchableHighlight>)
            })}



        </View>
    )
}

export default HomeScreen


const styles = StyleSheet.create({

    avatar: {
        marginLeft: 8,
        marginTop: 8,
        height: 60,
        width: 60,
        borderRadius: 50,
    },
    userName: {
        marginTop: 15,
        fontWeight: '700',
        marginLeft: 10,
        fontSize: 17,
    },
    date: {
        marginRight: 15,
        opacity: .54,
        color: 'rgb(0,0,70)'
    },
    chat: {
        marginTop: 5,
        fontWeight: '500',
        marginLeft: 10,
        opacity: .54,
        paddingRight: 20,
    },
    icons: {
        marginLeft: 20,
        height: 25,
        width: 25,
        textAlign: 'center',
    },
    iconText: {
        color: '#808080', marginLeft: 30, fontWeight: 'bold'
    },

});