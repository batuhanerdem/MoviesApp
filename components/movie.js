import React from 'react';
import {Image, Text, View} from "react-native";
import {BASE_IMAGE_URL} from "../screens/HomeScreen";
import PropTypes from 'prop-types';
import {screen} from "../screens/HomeScreen";
import {StyleSheet} from "react-native";


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
        movieImage: {width: screen.width/3.6, height: screen.height / 5, borderRadius: 10}
    }
);

export default MovieView;