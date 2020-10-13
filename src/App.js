import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import AlbumList from './components/AlbumList';
import Header from './components/Header';

Icon.loadFont();

const APP_BACKGROUND = 'white';
const APP_BLUE = '#001f3f';

const S = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: APP_BACKGROUND
    },
    main: {
        height: '100%'
    }
});

export default function App() {
    return (
        <View style={S.appContainer}>
            <SafeAreaView>
                <StatusBar barStyle="light-content" backgroundColor={APP_BACKGROUND} />
                <View style={S.main}>
                    <Header title="Albums" bgColor={APP_BACKGROUND} color={APP_BLUE}>
                        Albums <Icon name="headphones" color={APP_BLUE} size={30} />
                    </Header>
                    <AlbumList />
                </View>
            </SafeAreaView>
        </View>
    );
}
