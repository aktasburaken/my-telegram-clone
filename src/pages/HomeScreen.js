import { View, ScrollView, Text, Image, StatusBar, StyleSheet, Dimensions, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'

import moment from 'moment'

import Fuse from 'fuse.js'

import User from '../components/User'

import { TouchableHighlight, TouchableOpacity } from 'react-native'

import axios from 'axios'

import { SafeAreaView } from 'react-native-safe-area-context'

import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation, route }) => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("http://192.168.1.20:8082/randomuser")
            .then(response => {
                setUsers(response.data)
            })
    }, [])

    const [search, setSearch] = useState(false)
    const [pattern, setPattern] = useState('')

    const { height, width } = Dimensions.get('window')

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: search ? <View style={{ height: 30, width: width - 150, borderBottomWidth: 0.6, borderBottomColor: 'white' }}>
                <TextInput placeholder='Search' placeholderTextColor={'white'} style={{ height: 30, width: '100%', color: 'white' }}
                    onChangeText={(e) => {
                        setPattern(e)
                    }} />
            </View> : 'Telegram',
            headerRight: () =>
            (
                <TouchableOpacity onPress={() => { setSearch(!search) }}>
                    <Icon name="search" size={20} color="white" style={{ marginRight: 20 }} />
                </TouchableOpacity>
            ),
        });
    }, [navigation, search]);

    const fuse = new Fuse(users, {
        keys: [
            "name",
            "name.first"
        ]
    })

    const results = fuse.search(pattern)
    const humanResults = results.map(result => result.item)


    return (
        <SafeAreaView style={{ flex: 10, }}>
            <StatusBar barStyle="light-content" backgroundColor="#33638b" />

            {search ? humanResults.map(user => {

                const date = moment(user.lastMessage.messageTime)

                let dateString;

                if (date < moment().startOf('week')) {
                    dateString = date.format('DD MMM.')
                } else if (date < moment().startOf('day')) {
                    dateString = date.format('ddd')
                } else {
                    dateString = date.format('hh:mm A')
                }

                return (
                    <User key={user.login.uuid} navigation={navigation} image={user.picture.medium} username={user.name.first} lastname={user.name.last} date={dateString} lastMessage={user.lastMessage.message} />
                )
            }) : users.map(user => {

                const date = moment(user.lastMessage.messageTime)

                let dateString;

                if (date < moment().startOf('week')) {
                    dateString = date.format('DD MMM.')
                } else if (date < moment().startOf('day')) {
                    dateString = date.format('ddd')
                } else {
                    dateString = date.format('hh:mm A')
                }

                return (
                    <User key={user.login.uuid} navigation={navigation} image={user.picture.medium} username={user.name.first} lastname={user.name.last} date={dateString} lastMessage={user.lastMessage.message} />
                )
            })}

        </SafeAreaView>
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