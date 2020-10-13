import React, { Component } from 'react';
import { Linking, ScrollView, StyleSheet } from 'react-native';
import albumsApi from '../api/albums.api';
import AlbumDetail from './AlbumDetail';

const S = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default class AlbumList extends Component {

    state = {
        albums: []
    }

    componentDidMount() {
        albumsApi.get('music_albums').then(({ data: albums }) => {
            console.log(albums);
            this.setState({
                ...this.state,
                albums: albums
            });
        }).catch((err) => {

            debugger;

        })

    }

    goToAlbum = (albumUrl) => {

        console.log(albumUrl);
        debugger;

        Linking.openURL(albumUrl);
    }

    render() {
        return (
            <ScrollView style={S.container}>
                {
                    this.state.albums.map(album => (
                        <AlbumDetail key={album.title} album={album} onSelect={this.goToAlbum} />
                    ))
                }
            </ScrollView>
        )
    }
}
