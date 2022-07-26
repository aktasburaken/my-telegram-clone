import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import React from 'react'

import Icon from '@expo/vector-icons/FontAwesome';

const MenuItem = ({ iconName, itemName }) => {

    return (
        <TouchableHighlight onPress={() => { }}
            underlayColor='gray'
        >
            <View style={styles.button}>
                <Icon name={iconName} size={25} color="#000" style={styles.icons} />
                <Text style={styles.iconText}>{itemName}</Text>
            </View>

        </TouchableHighlight>
    )
}

export default MenuItem

const styles = StyleSheet.create({
    icons: {
        marginLeft: 20,
        height: 25,
        width: 25,
        textAlign: 'center',
    },
    iconText: {
        color: '#808080', marginLeft: 30, fontWeight: 'bold'
    },
    button: {
        flexDirection: "row",
        alignItems: 'center',
        height: 50,
        width: '100%',
        backgroundColor: '#fff'
    },
    buttonBorder: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        width: '100%',
        backgroundColor: '#fff',
        borderBottomWidth: 0.8,
        borderBottomColor: '#D3D3D3'
    },
})