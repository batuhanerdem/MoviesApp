import {getPopularMovies, getTopRatedMovies} from '../service/service';
import {StatusBar} from "expo-status-bar";
import React, {useEffect, useState} from "react";
import {FlatList, SafeAreaView, StyleSheet, Text, View, Dimensions, ScrollView} from "react-native";
import {SliderBox} from 'react-native-image-slider-box';
import MovieView from "../components/movie";

export const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const screen = Dimensions.get("screen")
const HomeScreen = () => {
    const [topRatedMovieUrl, setTopRatedMovieUrl] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        getTopRatedMovies()
            .then((movies) => {
                const movieUrlArray = []
                movies.forEach((movie) => {
                    movieUrlArray.push(`${BASE_IMAGE_URL}${movie.poster_path}`)
                })
                setTopRatedMovieUrl(movieUrlArray);
            })
            .catch((err) => {
                console.log(err);
                setError(err);
            });
        getPopularMovies()
            .then((movies) => {
                setPopularMovies(movies);

            }).catch((err) => {
            console.log(err)
            setError(err)
        })
    }, []);
    //autoplay true yap

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.slider}>
                <SliderBox images={topRatedMovieUrl}
                           sliderBoxHeight={screen.height/2}
                           resizeMode={'contain'}
                           dotStyle={styles.dot}
                           ImageComponentStyle={styles.sliderImage}
                           autoplay={false}/>
                {error && <ErrorText/>}
                <StatusBar style="auto"/>
            </View>

            <Text style={styles.popularText}>Popüler Filmler</Text>
            <View style={styles.listContainer}>
                <FlatList data={popularMovies}
                          horizontal={true}
                          style={styles.flatList}
                          renderItem={(item) =>
                              <MovieView style={styles.container} item={item.item}/>
                          }/>
            </View>
            {/*<View style={styles.listContainer}>*/}
            {/*</View>*/}

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "rgba(8,89,109,0.95)"
    },
    slider: {
        height: screen.height/2,
        alignItems: "center",
        justifyContent: "center",
    },
    sliderImage:{
        borderRadius:10
    },
    listContainer: {
        flex: 0,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        height: screen.height/5
    },
    flatList: {
        marginHorizontal: 10
    },
    popularText: {
        fontSize: 20,
        color: "#f7f720",
        paddingStart: 19,
        fontWeight: "bold",
        paddingTop: 10,
        paddingBottom:10
    },
    dot: {
        height: 0
    }
});

const ErrorText = () => {
    return (<View>
        <Text style={styles.text}>There is an error sir</Text>
    </View>);
};

export default HomeScreen;