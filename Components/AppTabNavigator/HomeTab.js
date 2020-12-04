import React, { Component } from 'react';
import { View, StyleSheet, FlatList, LogBox, Text } from 'react-native';
import { database } from '@react-native-firebase/database';
import * as firebase from 'firebase';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import BackgroundTimer from 'react-native-background-timer';
import BackgroundTask from 'react-native-background-task';
import dayjs from 'dayjs';

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

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }

// firebaseApp.database().ref('/Stuck').on('value', snapshot => {
//     console.log("User Data: ", snapshot.val());
// });



export default class HomeTab extends Component {
    
    constructor(props){
        super(props);
        this.state={ 
            list:[],
            refreshing: false,
            index: 0,
        }       
    }

    _getData = async () => {
        firebase.database().ref('/Stuck').on('value', snapshot => {
            var li = []
            snapshot.forEach((child) => {
                this.state.index = this.state.index + 1
                const lockday_replace = child.val().one.lockday.replace('년 ', '-')
                const lockday_replace_2 = lockday_replace.replace('월 ', '-')
                const lockday_replace_3 = lockday_replace_2.replace('일', '')
                const paymentday_replace = child.val().one.paymentday.replace('년 ', '-')
                const paymentday_replace_2 = paymentday_replace.replace('월 ', '-')
                const paymentday_replace_3 = paymentday_replace_2.replace('일', '')
                li.push({
                    id: this.state.index,
                    name: child.val().name,
                    lockday: lockday_replace_3,
                    paymentday: paymentday_replace_3,
                    divided: child.val().one.divided,
                    revenue: child.val().one.revenue,
                })
            })
            this.setState({list:li})
            // console.log("User Data: ", snapshot.val());
        });
    }

    _handleLoadMore = () => {
        this._getData();
    }

    _handleRefresh = () => {
        this.setState({
            list:[],
            refreshing: true,
            index: 1,
        }, this._getData);
    }

    componetWillMount() {

    }


    componentDidMount() {
        this._getData();
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
                            <View style={style.flatlist_container}>
                                <View style={style.container_title}>
                                    <View >
                                        <Text style={style.title}>
                                            {item.name}
                                        </Text>
                                    </View>
                                </View>
                                <View style={style.table}>
                                    <View style={style.container_data}>
                                        <View style={style.container_description}>
                                            <Text style={style.description}>
                                                배당락일
                                            </Text>
                                        </View>
                                        <View style={style.container_description}>
                                            <Text style={style.description}>
                                                배당
                                            </Text>
                                        </View>
                                        <View style={style.container_description}>
                                            <Text style={style.description}>
                                                배당일
                                            </Text>
                                        </View>
                                        <View style={style.container_description}>
                                            <Text style={style.description}>
                                                수익률
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={style.container_data}>
                                    <View style={style.container_description}>
                                            <Text style={style.description}>
                                                {item.lockday}
                                            </Text>
                                        </View>
                                        <View style={style.container_description}>
                                            <Text style={style.description}>
                                                {item.divided}
                                            </Text>
                                        </View>
                                        <View style={style.container_description}>
                                            <Text style={style.description}>
                                                {item.paymentday}
                                            </Text>
                                        </View>
                                        <View style={style.container_description}>
                                            <Text style={style.description}>
                                                {item.revenue}
                                            </Text>
                                        </View>
                                    </View>
                                </View> 
                                
                                
                            </View>
                        )
                    }}
                    onEndReached={this._handleLoadMore}
                    onEndReachedThreshold={1}
                    refreshing={this.state.refreshing}
                    // onRefresh={this._handleRefresh}
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
    },
    flatlist_container: {
        flex: 1,
        flexDirection: 'column',
        padding: 5,
        backgroundColor: '#FFF',
        elevation: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 12,
    },
    container_title: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    container_data: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    container_description: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    description: {
        fontSize: 15,
    },
    table: {
        marginTop: 8,
        marginBottom: 8,
    }
});