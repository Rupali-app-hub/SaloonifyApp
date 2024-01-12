import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { useNavigation } from '@react-navigation/native'

const Payment = () => {
  const navigation = useNavigation()
  const goBack =()=>{
    navigation.goBack()
  }
  return (
    <View>
      <Header onPress={goBack} headerImage={require("../../images/back.png")}  />
      <Image style={{width:400, height:350, marginTop:60}}source={require("../../images/Under.jpeg")}>
     
     </Image>

    </View>
    


  )
}

export default Payment