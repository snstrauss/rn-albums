import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const Header = StyleSheet.create({
    thumb_container: {
        backgroundColor: 'green',

        // alignItems: 'center',
        // justifyContent: 'center'
    },
    thumbnail: {
        // borderWidth: 1,
        // borderColor: 'blue',
        width: 50,
        height: 50,

        marginHorizontal: 10
    },
    details: {
        backgroundColor: 'red',
        justifyContent: 'space-around'
    },
    artist_name: {
        fontSize: 18
    }
})

const Main = StyleSheet.create({
    album_art: {
        height: 395,
        flex: 1,
        width: null,
        resizeMode: 'contain'
    }
})

const Footer = StyleSheet.create({
    buttonContainer: {
        backgroundColor: 'pink'
    }
})

export default function AlbumDetail({ album: { title, artist, url, thumbnail_image: artist_thumbnail, image } }) {

    return (
        <Card>
            <CardSection>
                <View style={Header.thumb_container}>
                    <Image style={Header.thumbnail} source={{ uri: artist_thumbnail }} />
                </View>
                <View style={Header.details}>
                    <Text style={Header.artist_name}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={Main.album_art} source={{ uri: image }} />
            </CardSection>
            <CardSection>
                <View style={Footer.buttonContainer}>
                    <Button title="do it" />
                </View>
            </CardSection>
        </Card>
    );
}
