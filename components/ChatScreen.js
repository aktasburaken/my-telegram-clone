import {
    View, Text, TextInput, TouchableOpacity
} from 'react-native'
import React, { useState, useEffect } from 'react'

import Icon from '@expo/vector-icons/FontAwesome';

const ChatScreen = ({ navigation, route }) => {

    return (
        <View style={{ flex: 1, backgroundColor: '#000' }}>
            <View style={{ height: '93%', backgroundColor: 'lightblue' }}>
                <Text> </Text>
            </View>
            <View style={{ width: '100%', height: '7%', backgroundColor: '#fff', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', width: '75%' }}>
                    <Icon name="github-alt" size={30} style={{ marginLeft: 15, }} />
                    <TextInput style={{ marginLeft: 20, fontSize: 18, width: '100%' }} placeholder='Send a message' value={message} onChangeText={msg => setMessage(msg)} />
                </View>
                <TouchableOpacity>
                    <Icon name="send" size={23} color="#4682B4" style={{ marginRight: 20 }} />
                </TouchableOpacity>
            </View>
        </View>


    )
}

export default ChatScreen