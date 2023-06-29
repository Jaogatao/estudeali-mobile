import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'

const Header = ({navigation}) => {
  const [user, setUser] = useState(null)

  const getUserData = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        const userObject = JSON.parse(value);
        setUser(userObject);
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUserData();
  }, [user])

  return (
    <SafeAreaView style={styles.header}>
        <Image
          style={styles.image_user}
          source={require("../assets/user.jpeg")} />
      <Text>{user?.name}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    boxSizing: 'border-box',
    paddingBottom: 10
  },
  logo: {
    width: 100,
    height: 100
  },
  image_user: {
    width: 40,
    height: 40,
    borderRadius: 50
  }
})

export default Header