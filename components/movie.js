import React from 'react';
import {Image, Text, View} from "react-native";
import {BASE_IMAGE_URL} from "../screens/HomeScreen";
import PropTypes from 'prop-types';

const propTypes = {
    item: PropTypes.object,
};
class MovieView extends React.PureComponent {
    render() {
        const {item} = this.props
        return (
            <View>
               <Image source={{uri: BASE_IMAGE_URL + item.poster_path}}
                      style={{width: 100, height: 100, padding: 20}}/>
            </View>
        );
    }
}

MovieView.propTypes = propTypes;

export default MovieView;