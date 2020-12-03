import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firebase from 'react-native-firebase';

export default class HomeTab extends Component {

    constructor(props) {
        super(props);
        this.state = { data: [] }
    }

    componentDidMount() {
        firebase.initializeApp()

        const ref = firebase.database().ref();

        ref.on("value", snapshot => {
            this.setState({ data: snapshot.val() });
        });
    }
    
    render() {
        return (
            <View>
                <Text>{this.state.data}</Text>
            </View>
        );
    }
}
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});