import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, LogBox } from 'react-native';
import { database } from '@react-native-firebase/database';
import * as firebase from 'firebase';
import BackgroundTimer from 'react-native-background-timer';

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
        this.index = 0
        
    }

    componetWillMount() {
        
    }


    componentDidMount() {
        firebaseApp.database().ref('/Stuck').once('value', snapshot => {
            var li = []
            snapshot.forEach((child) => {
                this.index = this.index + 1;
                li.push({
                    id: this.index,
                    name: child.val().name,
                    lockday: child.val().one.lockday,
                })
            })
            this.setState({list:li})
            // console.log("User Data: ", snapshot.val());
        });
    }

    render() {

        // const _setTimeout = global.setTimeout;
        // const _clearTimeout = global.clearTimeout;
        // const MAX_TIMER_DURATION_MS = 60 * 1000;
        // if (Platform.OS === "android") {
        //   // Work around issue `Setting a timer for long time`
        //   // see: https://github.com/firebase/firebase-js-sdk/issues/97
        //   const timerFix = {};
        //   const runTask = (id, fn, ttl, args) => {
        //     const waitingTime = ttl - Date.now();
        //     if (waitingTime <= 1) {
        //       InteractionManager.runAfterInteractions(() => {
        //         if (!timerFix[id]) {
        //           return;
        //         }
        //         delete timerFix[id];
        //         fn(...args);
        //       });
        //       return;
        //     }
    
        //     const afterTime = Math.min(waitingTime, MAX_TIMER_DURATION_MS);
        //     timerFix[id] = _setTimeout(() => runTask(id, fn, ttl, args), afterTime);
        //   };
    
        //   global.setTimeout = (fn, time, ...args) => {
        //     if (MAX_TIMER_DURATION_MS < time) {
        //       const ttl = Date.now() + time;
        //       const id = "_lt_" + Object.keys(timerFix).length;
        //       runTask(id, fn, ttl, args);
        //       return id;
        //     }
        //     return _setTimeout(fn, time, ...args);
        //   };
    
        //   global.clearTimeout = (id) => {
        //     if (typeof id === "string" && id.startsWith("_lt_")) {
        //       _clearTimeout(timerFix[id]);
        //       delete timerFix[id];
        //       return;
        //     }
        //     _clearTimeout(id);
        //   };
        // }

        return (
            <View style={style.container}>
                <FlatList style={{width:'100%'}}
                    data={this.state.list}
                    keyExtractor={(item)=> item.id.toString()}
                    renderItem={({item})=>{
                        return(
                            <View style={{borderWidth: 1, borderRadius: 8, padding: 8, margin: 8, backgroundColor: 'white'}}>
                                <Text>{item.name}</Text>
                                <Text>배당락일 : {item.lockday}</Text>
                            </View>
                        )
                    }}
                />
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