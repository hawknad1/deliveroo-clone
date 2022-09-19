import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from "react-native-animatable"
import * as Progress from "react-native-progress"
import {useNavigation} from  "@react-navigation/native"


const PreparingOrderScreen = () => {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery")
    }, 4000);
  }, [])
  



  return (
    <SafeAreaView className="bg-gray-100 flex-1 items-center justify-center">
      <Animatable.Image 
        source={require("../assets/food-processing.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />

      <Animatable.Text 
        animation="slideInUp"
        iterationCount={1}
        className="text-md my-10 text-gray-400 font-bold text-center"
      >
        Waiting for Restaurant to accept your order
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="#00CCBB"/>
    </SafeAreaView>
  )
}

export default PreparingOrderScreen