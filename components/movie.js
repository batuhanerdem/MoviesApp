import React from 'react';
import {Image, Text, View, Dimensions, TouchableOpacity} from "react-native";
import {BASE_IMAGE_URL} from "../screens/HomeScreen";
import PropTypes from 'prop-types';
import {StyleSheet} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const screen = Dimensions.get("screen")

const propTypes = {
    item: PropTypes.object,
    navigation: PropTypes.any
};

class MovieView extends React.PureComponent {

    render() {
        const {item} = this.props
        return (
            <View style={{marginHorizontal: 9,}}>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('Details', {id: item.id, isMovie: this.props.isMovie})
                }}>
                    <Image source={{uri: BASE_IMAGE_URL + item.poster_path}}
                           style={styles.movieImage}/>
                </TouchableOpacity>
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