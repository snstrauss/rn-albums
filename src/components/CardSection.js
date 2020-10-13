import React from 'react';
import { StyleSheet, View } from 'react-native';

const S = StyleSheet.create({
    container: {
        // borderWidth: 1,
        // borderColor: 'red',

        borderColor: '#ddd',
        borderBottomWidth: 1,
        padding: 5,

        backgroundColor: '#fff',

        flexDirection: 'row',
        justifyContent: 'flex-start',
        position: 'relative'
    }
});

export default function CardSection({ children }) {
    return (
        <View style={S.container}>
            {children}
        </View>
    );
}
