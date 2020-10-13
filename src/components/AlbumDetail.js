import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';

const Header = StyleSheet.create({
    thumb_container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    thumbnail: {
        width: 60,
        height: 60,
        marginHorizontal: 10,
        borderRadius: 10
    },
    details: {
        justifyContent: 'space-around'
    },
    album_name: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

const Main = StyleSheet.create({
    album_art: {
        height: 395,
        flex: 1,
        width: null,
        resizeMode: 'contain'
    }
});

export default function AlbumDetail({ album: { title, artist, url, thumbnail_image: artist_thumbnail, image }, onSelect }) {

    return (
        <Card>
            <CardSection>
                <Image style={Header.thumbnail} source={{ uri: artist_thumbnail }} />
                <View style={Header.details}>
                    <Text style={Header.album_name}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={Main.album_art} source={{ uri: image }} />
            </CardSection>
            <CardSection>
                <Button title="GET IT!" onPress={() => {
                    onSelect(url);
                }} />
            </CardSection>
        </Card>
    );
}
