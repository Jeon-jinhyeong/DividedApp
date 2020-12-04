import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
// import * as firebase from 'firebase';

// const firebaseConfig = {
//     apiKey: "AIzaSyAN1n77wlMvOy8v68dLIoFvAc345gElq3Q",
//     authDomain: "devidied-6fcc4.firebaseapp.com",
//     databaseURL: "https://devidied-6fcc4.firebaseio.com",
//     projectId: "devidied-6fcc4",
//     storageBucket: "devidied-6fcc4.appspot.com",
//     messagingSenderId: "627464616660",
//     appId: "1:627464616660:web:ac622a61e8dae4ec73d941",
//     measurementId: "G-E29H3EYNRD"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
 
export default class CardCompnent extends Component{

    // constructor(props){
    //     super(props);
    //     this.state={ 
    //         list:[],
    //     }
    //     this.index = 0

    // }

    // componetWillMount() {

    // }


    // componentDidMount() {
    //     firebaseApp.database().ref('/Stuck').on('value', snapshot => {
    //         var li = []
    //         snapshot.forEach((child) => {
    //             this.index = this.index + 1
    //             li.push({
    //                 id: this.index,
    //                 name: child.val().name,
    //                 lockday: child.val().one.lockday,
    //                 paymentday: child.val().one.paymentday,
    //             })
    //         })
    //         this.setState({list:li})
    //         // console.log("User Data: ", snapshot.val());
    //     });
    // }

    render() {
        return (
            <View>
                
            </View>
            // <Card>
            //     <CardItem>
            //     <Left>
            //         <Body>
            //         <Text>{this.state.list.name}</Text>
            //         </Body>
            //     </Left>
            //     </CardItem>
            //     <CardItem cardBody>
            //         <Text>{this.state.list.lockday}</Text> <Text>{this.state.list.paymentday}</Text>
            //     </CardItem>
            // </Card>
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