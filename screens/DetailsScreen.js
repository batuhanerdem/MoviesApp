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
                    <Image
                        source={{ uri: BASE_IMAGE_URL + item.poster_path }}
                        style={styles.movieImage}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>{`name: ${item.title || item.name || item.original_name}`}</Text>
                    </View>
                </ScrollView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(8,89,109,0.95)",
    },
    contentContainer: {
        alignItems: "center",
        justifyContent: "flex-start",
    },
    movieImage: {
        width: screen.width,
        height: screen.height / 3,
        borderRadius: 10,
    },
    textContainer: {
        padding: 20,
        width: '100%',
    },
    text: {
        fontSize: 20,
        color: "#f7f720",
        fontWeight: "bold",
    },
});

export default DetailsScreen;
