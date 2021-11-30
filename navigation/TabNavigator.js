import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile';
import Home from './Home';


const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => (
    
    <BottomTabs.Navigator
    screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
    }}
    initialRouteName="Home">
        <BottomTabs.Screen
        name="HomeTab"
        component={Home}
        />
        <BottomTabs.Screen
        name="ProfileTab"
        component={Profile}
        />
    </BottomTabs.Navigator>
)


export default TabNavigator;