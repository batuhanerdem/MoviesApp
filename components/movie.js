import React from 'react';
import {Image, Text, View, Dimensions} from "react-native";
import {BASE_IMAGE_URL} from "../screens/HomeScreen";
import PropTypes from 'prop-types';
import {StyleSheet} from "react-native";

const screen = Dimensions.get("screen")
const propTypes = {
    item: PropTypes.object,
};

class MovieView extends React.PureComponent {
    render() {
        const {item} = this.props
        return (
            <View style={{
                marginHorizontal: 9,
            }}>
                <Image source={{uri: BASE_IMAGE_URL + item.poster_path}}
                       style={styles.movieImage}/>
            </View>
        );
    }
}

MovieView.propTypes = propTypes;
const styles = StyleSheet.create({
        movieImage: {
            width: screen.width / 3.6,
            height: screen.height / 5,
            borderRadius: 10
        }
    }
);

export default MovieView;