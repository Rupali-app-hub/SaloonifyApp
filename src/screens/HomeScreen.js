import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './Home'
import Report from './bottomTabScreens/Report'
import Scan from './bottomTabScreens/Scan'
import Service from './bottomTabScreens/Service'
import Payment from './bottomTabScreens/Payment'

const Bottom = createBottomTabNavigator()
const HomeScreen = () => {
  return (
    <Bottom.Navigator>   
    <Bottom.Screen name="Home" component={Home} options={{headerShown:false, tabBarLabel:"Home", tabBarIcon:({color, size})=>(
        <Image source={require('../images/home.png')} style={{width:24, height:24,tintColor:color}}/>
    ) }} />
    <Bottom.Screen name="Report" component={Report} options={{headerShown:false,tabBarLabel:"Report", tabBarIcon:({color, size})=>(
        <Image source={require('../images/diagram.png')} style={{width:24, height:24,tintColor:color}}/>
    ) }} />
     <Bottom.Screen name="Scan" component={Scan} options={{headerShown:false,tabBarLabel:"Scan QR", tabBarIcon:({color, size})=>(
        <Image source={require('../images/qr-code.png')} style={{width:24, height:24,tintColor:color}}/>
    ) }} />
     <Bottom.Screen name="Service" component={Service} options={{headerShown:false,tabBarLabel:"Service", tabBarIcon:({color, size})=>(
        <Image source={require('../images/service.png')} style={{width:24, height:25,tintColor:color}}/>
    ) }} />
     <Bottom.Screen name="Payment" component={Payment} options={{headerShown:false,tabBarLabel:"Payment", tabBarIcon:({color, size})=>(
        <Image source={require('../images/wallet.png')} style={{width:24, height:24,tintColor:color}}/>
    ) }} />
  </Bottom.Navigator>
  )
}

export default HomeScreen