import { Button, View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'
import {
    DrawerContentScrollView,
} from '@react-navigation/drawer'


//image
import Avatar from '../assets/girlPhoto.jpg'

//Icon
import Icon from '@expo/vector-icons/FontAwesome';



export default function DrawerContent() {
    return (
        <View style={{ flex: 9, }}>
            <View style={styles.topSide}>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', marginRight: 15,
                }}>
                    <Image source={Avatar} style={styles.avatar} />
                    <Icon name="moon-o" color="#fff" size={20} style={{ marginTop: 15, }} />

                </View>
                <Text style={{ color: '#fff', marginLeft: 15, marginTop: 15, fontWeight: 'bold', }}>Adele</Text>
                <Text style={{ color: '#E6E9EF', marginLeft: 15, }}> +90 (536) 170 89 98</Text>
            </View>
            <View style={{ flex: 7.3, }}>
                <TouchableHighlight onPress={() => { }}
                    underlayColor='gray'
                >
                    <View style={styles.button}>
                        <Icon name='group' size={25} color="#000" style={styles.icons} />
                        <Text style={styles.iconText}>New Groups</Text>
                    </View>

                </TouchableHighlight>
                <TouchableHighlight onPress={() => { }}
                    underlayColor='gray'
                >
                    <View style={styles.button}>
                        <Icon name='user' size={25} color="#000" style={styles.icons} />
                        <Text style={styles.iconText}>Contacts</Text>
                    </View>

                </TouchableHighlight>
                <TouchableHighlight onPress={() => { }}
                    underlayColor='gray'
                >
                    <View style={styles.button}>
                        <Icon name='phone' size={25} color="#000" style={styles.icons} />
                        <Text style={styles.iconText}>Calls</Text>
                    </View>

                </TouchableHighlight>
                <TouchableHighlight onPress={() => { }}
                    underlayColor='gray'
                >
                    <View style={styles.button}>
                        <Icon name='map' size={25} color="#000" style={styles.icons} />
                        <Text style={styles.iconText}>People Nearby</Text>
                    </View>

                </TouchableHighlight>
                <TouchableHighlight onPress={() => { }}
                    underlayColor='gray'
                >
                    <View style={styles.button}>
                        <Icon name='bookmark' size={25} color="#000" style={styles.icons} />
                        <Text style={styles.iconText}>Saved Messages</Text>
                    </View>

                </TouchableHighlight>
                <TouchableHighlight onPress={() => { }}
                    underlayColor='gray'
                >
                    <View style={styles.buttonBorder}>
                        <Icon name='table' size={25} color="#000" style={styles.icons} />
                        <Text style={styles.iconText}>Settings</Text>
                    </View>

                </TouchableHighlight>
                <TouchableHighlight onPress={() => { }}
                    underlayColor='gray'
                >
                    <View style={styles.button}>
                        <Icon name='comments-o' size={25} color="#000" style={styles.icons} />
                        <Text style={styles.iconText}>Invite Friends</Text>
                    </View>

                </TouchableHighlight>
                <TouchableHighlight onPress={() => { }}
                    underlayColor='gray'
                >
                    <View style={styles.button}>
                        <Icon name='question-circle-o' size={25} color="#000" style={styles.icons} />
                        <Text style={styles.iconText}>Telegram Futures</Text>
                    </View>

                </TouchableHighlight>
            </View>
        </View>


    )
}

const styles = StyleSheet.create({

    topSide: {
        flex: 1.7,
        width: '100%',
        backgroundColor: "#4682B4",

    },
    avatar: {
        marginLeft: 15,
        marginTop: 15,
        height: 70,
        width: 70,
        borderRadius: 50,
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
    button: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        height: 50,
        width: '100%',
        backgroundColor: '#fff'
    },
    buttonBorder: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        height: 50,
        width: '100%',
        backgroundColor: '#fff',
        borderBottomWidth: 0.8,
        borderBottomColor: '#D3D3D3'
    },
});