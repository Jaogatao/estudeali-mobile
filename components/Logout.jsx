import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import  AsyncStorage  from '@react-native-async-storage/async-storage'

const Logout = ({navigation}) => {

  const logoutFn = async () => {
    await AsyncStorage.removeItem("token");
    navigation.navigate("Login")


  }
  return (
    <View style={{alignItems: 'center', marginTop: 80}}>
      <TouchableOpacity onPress={logoutFn}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Logout