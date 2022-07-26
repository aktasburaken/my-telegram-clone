import {
    View, Text, TextInput, TouchableOpacity, ScrollView, Dimensions
} from 'react-native'
import React, { useState, useEffect } from 'react'

import Icon from '@expo/vector-icons/FontAwesome';

import moment from 'moment'

const ChatScreen = ({ navigation, route }) => {

    const { height, width } = Dimensions.get('window')

    const [message, setMessage] = useState(null)
    const [messages, setMessages] = useState([])

    useEffect(() => {
        setMessages((prevMessages) => [...prevMessages, { who: route.params.name, opposite: false, message: `${route.params.lastMessage}`, time: `${route.params.lastMessageTime}` }])
    }, [route.params.name])

    const sendMessage = (message) => {
        setMessages((prevMessages) => [...prevMessages, { who: route.params.name, opposite: true, message: `${message}`, time: `${moment().format('h:mm A')}` }])
        setMessage('')
    }

    return (
        <View style={{ flex: 1, }}>
            <ScrollView style={{ backgroundColor: 'lightblue', }} contentContainerStyle={{ paddingBottom: 10 }} >
                {messages.map((message, index) => {
                    if (message.who === route.params.name && message.opposite) {
                        return (
                            <View key={index} style={{ width: '100%', paddingRight: 8, alignItems: 'flex-end', marginTop: 5, }}>
                                <View style={{ backgroundColor: '#E0FFC0', maxWidth: '70%', padding: 10, paddingBottom: 10, borderBottomRightRadius: 16, borderTopLeftRadius: 16, borderBottomLeftRadius: 16, }}>
                                    <Text style={{ color: 'black', fontSize: 16, }}>
                                        {message.message}
                                    </Text>
                                    <View style={{ bottom: 0, justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row', fontSize: 12, color: '#8C8C8C' }}>
                                        <Text style={{ fontSize: 12, marginRight: 5, color: '#8C8C8C' }}>
                                            {message.time}
                                        </Text>
                                        <Icon name="check" size={12} color='green' />
                                    </View>
                                </View>
                            </View>
                        )
                    } else if (message.who === route.params.name && !message.opposite) {
                        return (
                            <View key={index} style={{ width: '100%', paddingLeft: 8, alignItems: 'flex-start', marginTop: 5, }}>
                                <View style={{ backgroundColor: 'white', maxWidth: '70%', padding: 10, paddingBottom: 10, borderBottomRightRadius: 16, borderTopRightRadius: 16, borderBottomLeftRadius: 16, }}>
                                    <Text style={{ color: 'black', fontSize: 16, }}>
                                        {message.message}
                                    </Text>
                                    <View style={{ bottom: 0, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', fontSize: 12, color: '#8C8C8C' }}>
                                        <Text style={{ fontSize: 12, marginRight: 5, color: '#8C8C8C' }}>
                                            {message.time}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        )
                    }
                })}
            </ScrollView>
            <View style={{ bottom: 0, width: '100%', height: 52, backgroundColor: '#fff', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', width: '75%' }}>
                    <Icon name="github-alt" size={30} style={{ marginLeft: 15, }} />
                    <TextInput style={{ marginLeft: 20, fontSize: 18, width: '90%' }} placeholder='Send a message' value={message} onChangeText={msg => setMessage(msg)} />
                </View>
                <TouchableOpacity onPress={() => { sendMessage(message) }}>
                    <Icon name="send" size={23} color="#4682B4" style={{ marginRight: 20 }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ChatScreen