import React from 'react';
import { Text, View, Button, SafeAreaView } from 'react-native';

export default function SettingScreen (props)  {
  const { navigation } = props;

  const goToHome = () => {
    navigation.navigation("Home");
  }
  
    return (
      <SafeAreaView>
        <Text> Estamos en SettingScreen </Text>
        <Text> Estamos en SettingScreen </Text>
        <Text> Estamos en SettingScreen </Text>
        <Text> Estamos en SettingScreen </Text>
        <Text> Estamos en SettingScreen </Text>
        <Text> Estamos en SettingScreen </Text>
        <Text> Estamos en SettingScreen </Text>
        <Text> Estamos en SettingScreen </Text>
        <Text> Estamos en SettingScreen </Text>
        <Button onPress={() => goToHome} title='Ir a HOME' />
      </SafeAreaView>
    );
        
}

