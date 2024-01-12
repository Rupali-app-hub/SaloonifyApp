import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from './screens/Splash';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import ProductsList from './products/ProductsList';
import CartDetailsScreen from './products/CartDetails';
import ProductManagement from './data/ProductManagement';
import HomeScreen from './screens/HomeScreen';
import MainScreen from './screens/MainScreen';

const Stack  = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
            options={{headerShown:false}}
            name="Splash"
            component={Splash}/>
            <Stack.Screen options={{headerShown:false}} name="Login"  component={Login}/>
            <Stack.Screen options={{headerShown:false}} name="SignUp"  component={SignUp}/>
            {/* <Stack.Screen options={{headerShown:false}} name="HomeScreen"  component={HomeScreen}/> */}
            <Stack.Screen options={{headerShown:false}} name="MainScreen"  component={MainScreen}/>
            <Stack.Screen options={{headerShown:false}} name="ProductsList"  component={ProductsList}/>
            <Stack.Screen options={{headerShown:false}} name="CartDetailsScreen"  component={CartDetailsScreen}/>
            <Stack.Screen options={{headerShown:false}} name="ProductManagement"  component={ProductManagement}/>


        </Stack.Navigator>

    </NavigationContainer>
  )
}

export default AppNavigator