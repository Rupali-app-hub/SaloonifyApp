import { View, Text, Image, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
    useEffect(()=>{
      setTimeout(() => {  navigation.navigate('MainScreen') }, 3000)
       },[])
  return (
    <ImageBackground source={require('../images/Image2.jpeg')} style={{flex:1}}>
      <View style={{flex:1, justifyContent:"center", flexDirection:"row", marginTop:"20%"}}>
        
       <Text style={{fontWeight:"bold", fontSize:20}}>Welcome to Saloonify</Text>
      </View>
     
    </ImageBackground>
  )
}

export default Splash