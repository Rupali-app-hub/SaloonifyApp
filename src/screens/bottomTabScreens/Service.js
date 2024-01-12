import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { useNavigation } from '@react-navigation/native'
import ServiceCarousel from '../../carousel/serviceCarousel/ServiceCarousel'
const Service = () => {
const navigation = useNavigation()

    const handlePressed=()=>{
        navigation.goBack()
    }
  return (
    <View>
      <Header onPress={handlePressed}  headerImage={require("../../images/back.png")} headerTitle={"Service"}/>

  
      <ServiceCarousel/>
      
    </View>
  )
}

export default Service