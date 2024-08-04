import { getPopularMovies, getTopRatedMovies, getPopularTv, getTopRatedTv } from '../service/service';
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { SliderBox } from 'react-native-image-slider-box';
import MovieListView from "../components/MovieListView";
import { ActivityIndicator } from "react-native";


export const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";
//const placeholderImage = require("../assets/placeholder-image.png")
const screen = Dimensions.get("screen")
const HomeScreen = ({ navigation }) => {
    const [topRatedMovieUrl, setTopRatedMovieUrl] = useState();
    const [topRatedMovies, setTopRatedMovies] = useState();
    const [popularMovies, setPopularMovies] = useState();
    const [popularTvShows, setPopularTvShows] = useState()
    const [topRatedTvShows, setTopRatedTvShows] = useState()
    const [error, setError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false)
    const getData = () => {
        return Promise.all([getTopRatedMovies(), getPopularMovies(), getPopularTv(), getTopRatedTv()])
    }
    {
        topRatedTvShows && console.log(topRatedTvShows[4].id)
    }


    useEffect(() => {
        getData().then(([topRatedMovies, popularMovies, popularShows, topRatedShows]) => {
            const movieUrlArray = []
            topRatedMovies.forEach((movie) => {
                movieUrlArray.push(`${BASE_IMAGE_URL}${movie.poster_path}`)
            })
            setTopRatedMovies(topRatedMovies)
            setTopRatedMovieUrl(movieUrlArray)
            setPopularMovies(popularMovies)
            setPopularTvShows(popularShows)
            setTopRatedTvShows(topRatedShows)
        }).catch((err) => {
            setError(err)
        }).finally(() => {
            setIsLoaded(true)
        })
    }, []);

    return <View style={{ flex: 1, justifyContent: "center" }}>
        {!isLoaded && <ActivityIndicator size={"large"} color={"blue"} />}
        {isLoaded && <ScrollView style={styles.container}>
            <View style={styles.slider}>
                <SliderBox images={topRatedMovieUrl}
                    sliderBoxHeight={screen.height / 2}
                    onCurrentImagePressed={(index) => {
                        navigation.navigate('Details', { id: topRatedMovies[index].id, isMovie: true })
                    }}
                    resizeMode={'contain'}
                    dotStyle={styles.dot}
                    ImageComponentStyle={styles.sliderImage}
                    autoplay={true} />
                {error && <ErrorText />}
                <StatusBar style="auto" />
            </View>
            <View style={styles.listContainer}>
                <MovieListView data={popularMovies} navigation={navigation} text={"Popüler Filmler"} isMovie={true} />
                <MovieListView data={popularTvShows} navigation={navigation} text={"Popüler Diziler"} isMovie={false} />
                <MovieListView data={topRatedTvShows} navigation={navigation} text={"Yüksek Puanlı Diziler"} isMovie={false} />
            </View>
        </ScrollView>}
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 0, flexDirection: "column", //backgroundColor: "rgba(8,89,109,0.95)",
    }, slider: {
        height: screen.height / 2, alignItems: "center", justifyContent: "center",
    }, sliderImage: {
        borderRadius: 10
    }, listContainer: {
        flex: 0, alignItems: "center", justifyContent: "space-evenly", paddingBottom: 20
    }, dot: {
        height: 0
    }
});

const ErrorText = () => {
    return (<View>
        <Text style={styles.text}>There is an error</Text>
    </View>);
};

export default HomeScreen;