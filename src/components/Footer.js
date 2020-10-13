import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const S = StyleSheet.create({
    container: {
        backgroundColor: 'greenyellow'
    }
});

export default function Footer() {
    return (
        <View style={S.container}>
            <Text>
                foot
            </Text>
        </View>
    );
}
