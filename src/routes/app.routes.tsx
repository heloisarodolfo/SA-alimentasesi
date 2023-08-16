import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Feather} from '@expo/vector-icons';

import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';
import { Fav } from '../screens/Fav';
import { Wallet } from '../screens/Wallet';
import { Cart } from '../screens/Cart';

const { Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes(){
    return(
        <NavigationContainer>

    <Navigator screenOptions={{
        tabBarActiveTintColor: '#FF6200',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarLabel: ' ',
    }}>

    <Screen
        name="Home"
        component={Home}
        options={{
            tabBarIcon: ({ size, color }) => (<Feather name="home" color={color} size={size} />),
        }}
    />
    <Screen
        name="Fav"
        component={Fav}
        options={{
            tabBarIcon: ({ size, color }) => <Feather name="heart" color={color} size={size} />
        }}
    />
    <Screen
        name="Wallet"
        component={Wallet}
        options={{
            tabBarIcon: ({ size, color }) => <Feather name="credit-card" color={color} size={size} />
        }}
    />
    <Screen
        name="Cart"
        component={Cart}
        options={{
            tabBarIcon: ({ size, color }) => <Feather name="shopping-cart" color={color} size={size} />
        }}
    />
    <Screen
        name="Profile"
        component={Profile}
        options={{
            tabBarIcon: ({ size, color }) => <Feather name="user" color={color} size={size} />
        }}
    />
    </Navigator>

    </NavigationContainer>
    );
}