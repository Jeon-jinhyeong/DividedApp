import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation'; 
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeTab from './AppTabNavigator/HomeTab'
import SearchTab from './AppTabNavigator/SearchTab'
import AddMediaTab from './AppTabNavigator/AddMediaTab'
import LikesTab from './AppTabNavigator/LikesTab'
import ProfileTab from './AppTabNavigator/ProfileTab'

const AppTabNavigator = createMaterialTopTabNavigator({
    Home: { screen: HomeTab },
    Search: { screen: SearchTab },
    AddMedia: { screen: AddMediaTab },
    Likes: { screen: LikesTab },
    Profile: { screen: ProfileTab }
}, {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if (routeName === 'Home') {
            iconName = "home";
        } else if (routeName === 'Search') {
            iconName = "search";
        } else if (routeName === 'AddMedia') {
            iconName = "add-circle";
        } else if (routeName === 'Likes') {
            iconName = "heart";
        } else if (routeName === 'Profile') {
            iconName = "person";
        }

        return (
          <IconComponent
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      },
    }),
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'white',
      },
      showLabel: false,
      showIcon: true,
    },
});
  
const AppTabContainet = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {

    render() {
        return <AppTabContainet/>;
    }
}

MainScreen.navigationOptions = {
    // headerLeft: () => <Icon name='camera' style={{ paddingLeft:10 }}/>,
    title: 'Divided',
    headerRight: () => <Icon name='search' style={{ paddingRight:10 }}/>
}