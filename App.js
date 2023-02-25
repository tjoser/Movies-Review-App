import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './screens/home';
import AboutPage from './screens/about';
import ReviewPage from './screens/review';
import Ionicons from 'react-native-vector-icons/Ionicons';




const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'About') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            }else if (route.name === 'Review') {
              iconName = focused ? 'ios-create' : 'ios-create-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
        })}
      >

      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="About" component={AboutPage} />
      <Tab.Screen name="Review" component={ReviewPage} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

