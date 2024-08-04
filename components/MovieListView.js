import React, { Component } from 'react';
import { FlatList, View, StyleSheet, Text } from "react-native";
import MovieView from "./movie";
import PropTypes from "prop-types";

const propTypes = {
    data: PropTypes.any.isRequired,
    text: PropTypes.any.isRequired,
    isMovie: PropTypes.bool.isRequired,
    navigation: PropTypes.any.isRequired
};

class MovieListView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> {this.props.text}</Text>
                <FlatList data={this.props.data}
                    horizontal={true}
                    style={styles.flatList}
                    renderItem={(items) =>
                        <MovieView style={styles.movie} item={items.item} navigation={this.props.navigation}
                            isMovie={this.props.isMovie} />
                    } />
            </View>

        );
    }
}

MovieListView.propTypes = propTypes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "flex-start"
    },
    flatList: {
        marginHorizontal: 10
    },
    movie: {
        flex: 0,
        flexDirection: "column",
    },
    text: {
        fontSize: 23,
        color: "#000000",
        paddingStart: 19,
        fontWeight: "800",
        paddingTop: 10,
        paddingBottom: 10
    },
})
export default MovieListView;