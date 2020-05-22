import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from "react-native";

import ListItem from './ListItem';
import SaveMeeting from './save_meeting'

class ListMeeting extends Component {
    constructor(props) {
        super(props);
    }




    render() {
        return (
            <View style={styles.container}>
                <SaveMeeting />
            </View>

        );
    }
}

export default ListMeeting;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    button: {
        borderRadius: 5,
        marginVertical: 20,
        alignSelf: 'flex-start',
        backgroundColor: "gray",
        marginLeft: 5
    },
    buttonText: {
        color: "white",
        paddingVertical: 6,
        paddingHorizontal: 10,
        fontSize: 16
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 10
    },
    usersListContainer: {
        marginBottom: 25,
        elevation: 4,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 6,
        borderTopWidth: 1,
        borderColor: "rgba(0,0,0,0.1)"
    },
    clock: {
        fontWeight: "bold",
        fontSize: 16
    },
    listItem: {
        fontSize: 16
    },
    buttonContainer: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    message: {
        color: "red",
        fontSize: 17
    }
})