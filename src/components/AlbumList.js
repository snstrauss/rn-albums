import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
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

    render() {
        return (
            <ScrollView style={S.container}>
                {
                    this.state.albums.map(album => (
                        <AlbumDetail key={album.title} album={album} />
                    ))
                }
            </ScrollView>
        )
    }
}
