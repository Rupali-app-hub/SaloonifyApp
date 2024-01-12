import { View, Text, Image } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
const Drawer = createDrawerNavigator()

const Sidebar = () => {
  return (
    <View style={{flex:1}}>
      <View style={{backgroundColor:"black", height:150}}>
      <Image source={require('../images/Image2.jpeg')} style={{ width: 100, height: 100, borderRadius: 50, marginTop: 10 }} />
      <Text style={{color:"white", marginLeft:20}}>Rupali Priyadarsini nayak</Text>
      <Text style={{color:"white", marginLeft:20, fontSize:10}}>prime member</Text>
      </View>
    </View>
    
  )
}

export default Sidebar