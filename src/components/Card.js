import React from 'react';
import { StyleSheet, View } from 'react-native';

const S = StyleSheet.create({
    card: {
        backgroundColor: 'white',

        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,

        elevation: 1,
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2
        },

        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
});

export default function Card({ children }) {
    return (
        <View style={S.card}>
            {children}
        </View>
    );
}
