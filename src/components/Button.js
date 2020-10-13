import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const S = StyleSheet.create({
    button: {
        flex: 1,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginHorizontal: 5
    },
    buttonText: {
        alignSelf: 'center',
        color: '#007aff',
        fontWeight: '600',
        paddingVertical: 10
    }
});

export default function Button({ title, onPress }) {
    return (
        <TouchableOpacity style={S.button} onPress={onPress}>
            <Text style={S.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
