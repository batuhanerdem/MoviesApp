import {getPopularMovies, getTopRatedMovies} from '../service/service';
import {StatusBar} from "expo-status-bar";
import React, {useEffect, useState} from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import {SliderBox} from 'react-native-image-slider-box';
import MovieView from "../components/movie";

export const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";
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
    //console.log(popularMovies[0].id)
    //autoplay true yap

    return (
        <View style={styles.container}>

            <View style={styles.slider}>
                <SliderBox images={topRatedMovieUrl}
                           sliderBoxHeight={400}
                           resizeMode={'contain'}
                           dotStyle={styles.dot}
                           autoplay={false}/>
                {error && <ErrorText/>}
                <StatusBar style="auto"/>
            </View>

            <Text style={styles.popularText}>Popüler Filmler</Text>
            <View style={styles.list}>
                <FlatList data={popularMovies}
                          horizontal={true}
                          renderItem={(item) =>
                              <MovieView style={styles.container} item={item.item}/>
                          }/>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "rgba(8,89,109,0.95)"
    },
    slider: {
        flex: 1,
        paddingTop: 80,
        alignItems: "center",
        justifyContent: "center",
    },
    list: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    popularText: {
        fontSize: 20,
        color: "#fff",
        paddingStart: 10,
        fontWeight: "bold",
        paddingTop: 10
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