import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    Alert,
    Image,
    Linking,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    WebView,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/stack';
import { Assets, createStackNavigator } from '@react-navigation/stack';

export default class Example extends React.Component {

  render() {
    return (
      <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Example2')}>
          <Text>Press</Text>
      </TouchableOpacity>
    )
  }
}

export {Example}