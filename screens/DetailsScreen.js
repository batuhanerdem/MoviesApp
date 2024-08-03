import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from "react-native";
import { getMovieDetails, getTvDetails } from "../service/service";

const DetailsScreen = ({ route, navigation }) => {
    const id = route.params.id
    const [details, setDetails] = useState("");
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        route.params.isMovie ?
            getMovieDetails(id).then((movieDetailsData) => {
                setDetails(movieDetailsData)
                setIsLoaded(true)
            }) : getTvDetails(id).then((tvDetailsData) => {
                setDetails(tvDetailsData)
                setIsLoaded(true)
            }
            )
    }, [])
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40 }}>
                {details.overview}
                {details.id}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})
export default DetailsScreen;