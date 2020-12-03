import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation'; 
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import firebase from 'firebase';

export default class MainScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { data: [] }
  }

  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAN1n77wlMvOy8v68dLIoFvAc345gElq3Q",
      authDomain: "devidied-6fcc4.firebaseapp.com",
      databaseURL: "https://devidied-6fcc4.firebaseio.com",
      projectId: "devidied-6fcc4",
      storageBucket: "devidied-6fcc4.appspot.com",
      messagingSenderId: "627464616660",
      appId: "1:627464616660:web:ac622a61e8dae4ec73d941",
      measurementId: "G-E29H3EYNRD"
    })

    const ref = firebase.database().ref();

    ref.on("value", snapshot => {
      this.setState({ data: snapshot.val() });
    });
  }

  render() {
      return (
        <View>
          {
            this.state.data.map(value => {
              return (
                <View>
                  <Text>
                    {value.name}
                  </Text>
                </View>
              )
            })
          }
        </View>
      );
  }
}

MainScreen.navigationOptions = {
    // headerLeft: () => <Icon name='camera' style={{ paddingLeft:10 }}/>,
    title: 'Instagram',
    headerRight: () => <Icon name='ios-search' style={{ paddingRight:10 }}/>
}