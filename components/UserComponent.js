import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function UserComponent({ image, username, date, lastname, lastMessage }) {
    return (
        <View style={{ flexDirection: 'row', width: '100%' }} >
            <Image source={{ uri: `${image}` }} style={styles.avatar} />
            <View style={{ marginLeft: 15, flexDirection: 'column', borderBottomWidth: 0.2, width: '80%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <Text style={styles.userName}>{username} {lastname}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
                <View>
                    <Text numberOfLines={1} style={styles.chat}>{lastMessage}</Text>
                </View>
            </View>

        </View >

    )
}

const styles = StyleSheet.create({

    avatar: {
        marginLeft: 8,
        marginTop: 8,
        height: 60,
        width: 60,
        borderRadius: 50,
    },
    userName: {
        marginTop: 10,
        fontWeight: '700',
        fontSize: 17,
    },
    date: {
        marginTop: 10,
        marginRight: 15,
        opacity: .54,
        color: 'rgb(0,0,70)',
    },
    chat: {
        marginTop: 5,
        fontWeight: '500',
        width: '80%',
        opacity: .54,
        paddingRight: 20,
    },
});