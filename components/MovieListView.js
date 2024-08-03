import React, {Component} from 'react';
import {FlatList, View, StyleSheet} from "react-native";
import MovieView from "./movie";

class List extends Component {
    render() {
        return (
            <FlatList data={this.props.data}
                      horizontal={true}
                      style={styles.flatList}
                      renderItem={(items) =>
                          <MovieView style={styles.movie} item={items.item} navigation={this.props.navigation}/>
                      }/>
        );
    }
}

const styles = StyleSheet.create({
    flatList: {
        marginHorizontal: 10
    },
    movie: {
        flex: 1,
        flexDirection: "column",
    }
})
export default List;