import React from 'react';
import { Image, Text, View, Dimensions, TouchableOpacity } from "react-native";
import { BASE_IMAGE_URL } from "../screens/HomeScreen";
import PropTypes from 'prop-types';
import { StyleSheet } from "react-native";

const screen = Dimensions.get("screen");

const propTypes = {
    item: PropTypes.object,
    navigation: PropTypes.any,
    isMovie: PropTypes.bool
};

class MovieView extends React.PureComponent {

    render() {
        const { item } = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('Details', { id: item.id, isMovie: this.props.isMovie });
                    }}
                    style={styles.touchable}
                >
                    <Image
                        source={{ uri: BASE_IMAGE_URL + item.poster_path }}
                        style={styles.movieImage}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            {item.name || item.title}
                        </Text>
                        <Text style={styles.grayText}>
                            {item.vote_average.toFixed(1)}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

MovieView.propTypes = propTypes;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 9,
    },
    touchable: {
        alignItems: 'center', // Center children horizontally
    },
    movieImage: {
        width: screen.width / 2.5,
        height: screen.height / 4,
        borderRadius: 10
    },
    textContainer: {
        marginTop: 10,
        width: screen.width / 2.5,
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: "#000000",
        fontWeight: "500",
        textAlign: 'center',
        flexWrap: 'wrap',
    },
    grayText: {
        fontSize: 20,
        color: "#888888",
        fontWeight: "500",
        textAlign: 'center',
    },
    goldenText: {
        fontSize: 20,
        color: "#A1824A",
        fontWeight: "500",
        textAlign: 'center',
    }
});

export default MovieView;
