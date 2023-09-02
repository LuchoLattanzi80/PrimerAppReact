import React from 'react';
import { Text, View, Button, SafeAreaView } from 'react-native';

export default function HomeScreen (props) {
     const { navigation } = props;

     console.props;

     const goToSettings = () => {
       navigation.navigation("Settings");
    }
    return (
    <SafeAreaView>
        <Text> Estamos en Home Screen </Text>
        <Text> Estamos en Home Screen </Text>
        <Text> Estamos en Home Screen </Text>
        <Text> Estamos en Home Screen </Text>
        <Text> Estamos en Home Screen </Text>
        <Text> Estamos en Home Screen </Text>
        <Text> Estamos en Home Screen </Text>
        <Text> Estamos en Home Screen </Text>
        <Text> Estamos en Home Screen </Text>
        <Text> Estamos en Home Screen </Text>
        <Text> Estamos en Home Screen </Text>
        <Button onPress={() => goToSettings} title='Ir a Ajustes' />
    </SafeAreaView>
    );
          
}

