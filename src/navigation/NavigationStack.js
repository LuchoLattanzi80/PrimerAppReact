import React from 'react';
import { Text, View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';

const Stack = createNativeStackNavigator(); 

export default function NavigationStack () {
  
    return (
        <Stack.Navigator initialRouteName="Home">
            
        <Stack.Screen name="Home" component={ HomeScreen }/>            
        <Stack.Screen name="Settings" component={ SettingScreen }/>
    </Stack.Navigator>
    )
        
    
                  
}
