import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, Image } from "react-native";
import { BASE_IMAGE_URL } from "../screens/HomeScreen";
import { getMovieDetails, getTvDetails } from "../service/service";

const screen = Dimensions.get("screen");

const DetailsScreen = ({ route, navigation }) => {
    const id = route.params.id;
    const [item, setItem] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (route.params.isMovie) {
            getMovieDetails(id).then((movieDetailsData) => {
                setItem(movieDetailsData);
                setIsLoaded(true);
            });
        } else {
            getTvDetails(id).then((tvDetailsData) => {
                setItem(tvDetailsData);
                setIsLoaded(true);
            });
        }
    }, []);

    return (
        <View style={{ flex: 1 }}>
            {isLoaded && (
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: BASE_IMAGE_URL + item.poster_path }}
                            style={styles.movieImage}
                            resizeMode="cover"
                        />
                        <View style={styles.textOverlay}>
                            <Text style={styles.titleText}>{item.title || item.name || item.original_name}</Text>
                        </View>
                    </View>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.goldenText}>{`Original Language: ${item.original_language}`}</Text>
                        <Text style={styles.goldenText}>{`First Air Date: ${item.original_language}`}</Text>
                        <Text style={styles.goldenText}>{`Popularity: ${item.popularity}`}</Text>
                        <Text style={styles.text}>{`Overview: ${item.overview}`}</Text>

                    </View>
                </ScrollView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    contentContainer: {
        alignItems: "center",
        justifyContent: "flex-start",
    },
    imageContainer: {
        position: 'relative',
        width: screen.width,
        height: screen.height / 3,
    },
    movieImage: {
        width: '100%',
        height: '100%',
    },
    textOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingStart: 25,
        backgroundColor: 'rgba(0, 0, 0, 0.18)',
        padding: 10,
        alignItems: 'flex-start',
    },
    text: {
        fontSize: 20,
        color: "#000000",
        fontWeight: "420",
        textAlign: 'left',
        flexWrap: 'wrap',
    },
    titleText: {
        fontSize: 25,
        color: "#fff",
        fontWeight: "700",
        textAlign: 'left',
        flexWrap: 'wrap',
    },
    detailsContainer: {
        padding: 10,
        marginStart: 25,
        paddingEnd: 15,
        width: '100%',
        alignItems: 'flex-start',
    },
    goldenText: {
        fontSize: 19,
        color: "#A1824A",
        marginBottom: 15,
        fontWeight: "400",
        textAlign: 'center',
    }
});

export default DetailsScreen;
