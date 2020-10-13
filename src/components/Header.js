import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const S = StyleSheet.create({
    container: {
        padding: 10
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center'
    }
});

export default function Header({ children = "App title", bgColor = 'blue', color = 'black' }) {
    return (
        <View style={[S.container, { backgroundColor: bgColor }]}>
            <Text style={[S.title, { color }]}>{children}</Text>
        </View>
    );
}
