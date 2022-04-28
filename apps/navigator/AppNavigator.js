import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home/Home';
import Region from '../pages/Region/Region';
import CameraPages from '../pages/Camera/CameraPages';
import Posts from '../pages/Posts/Posts';

const Stack = createNativeStackNavigator();
class AppNavigator extends Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Coding Test"
            }}
          />
          <Stack.Screen
            name="Posts"
            component={Posts}
            options={{
              title: "Coding Test"
            }}
          />
          <Stack.Screen
            name="Camera"
            component={CameraPages}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Region"
            component={Region}
            options={{
              title: "Coding Test"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppNavigator;
