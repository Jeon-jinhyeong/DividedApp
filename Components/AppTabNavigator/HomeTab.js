import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { database } from '@react-native-firebase/database';
import * as firebase from 'firebase';

// const ref = Database().ref('/');

const firebaseConfig = {
    apiKey: "AIzaSyAN1n77wlMvOy8v68dLIoFvAc345gElq3Q",
    authDomain: "devidied-6fcc4.firebaseapp.com",
    databaseURL: "https://devidied-6fcc4.firebaseio.com",
    projectId: "devidied-6fcc4",
    storageBucket: "devidied-6fcc4.appspot.com",
    messagingSenderId: "627464616660",
    appId: "1:627464616660:web:ac622a61e8dae4ec73d941",
    measurementId: "G-E29H3EYNRD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// firebaseApp.database().ref('/Stuck').on('value', snapshot => {
//     console.log("User Data: ", snapshot.val());
// });

export default class HomeTab extends Component {

    constructor(props){
        super(props);
        this.state={ 
            list:[],
        }
    }

    componentDidMount() {
        firebaseApp.database().ref('/Stuck').on('value', snapshot => {
            var li = []
            snapshot.forEach((child) => {
                li.push({
                    name: child.val().name,
                })
            })
            this.setState({list:li})
            // console.log("User Data: ", snapshot.val());
        });
    }

    render() {
        return (
            <View style={style.container}>
                <FlatList style={{width:'100%'}}
                    data={this.state.list}
                    keyExtractor={(item)=>item.key}
                    renderItem={({item})=>{
                        return(
                            <View>
                                <Text>{item.name}</Text>
                            </View>
                        )
                }}/>
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