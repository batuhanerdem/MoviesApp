import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "./screens/DetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={styles.stackOptionsHome}
                />
                <Stack.Screen
                    options={styles.stackOptionsDetails}
                    name="Details"
                    component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    stackOptionsHome: {
        title: "Home",
        headerTitleAlign: 'center',
        headerStyle: {
            backgroundColor: '#fff',
        },
        headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
        },
    },
    stackOptionsDetails: {
        title: "Details",
        headerTitleAlign: 'center',
        headerStyle: {
            backgroundColor: '#fff',
        },
        headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
        },
    }
});
