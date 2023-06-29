import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const LoginPage = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const token = AsyncStorage.getItem("token");


  const login = async () => {

    const payload = {
      email: email,
      password: password
    }

    fetch('https://estudealiback-senacc.vercel.app/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then(async (data) => {
        console.log(data)
        if (data.token) {
          await AsyncStorage.setItem(
            'token',
            data?.token,
          );
          await AsyncStorage.setItem(
            'user',
            JSON.stringify(data?.user),
          );
          Alert.alert("Logado com sucesso!")
          navigation.navigate("Home")
        }
        else{
          Alert.alert(data.msg)
        }
      })
      .catch((err) => {
        console.log(err);
        Alert.alert(err.msg)
      });
  }

  useEffect(() => {
    if(token) {
      return navigation.navigate("Home")
    }
    return navigation.navigate("Login")
  },[])

  return (
    <View style={[styles.container, { marginTop: -100 }]}>
      <View style={styles.top_box}>
        <View style={styles.logo_area}>
          <Image
            source={require('../assets/logofigma.png')}
            style={styles.logo}
          />
        </View>
      </View>
      <View style={styles.container2_0}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          value={email}
          onChangeText={(e) => setEmail(e)}
          style={styles.input}
          placeholder="Email"
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          value={password}
          onChangeText={(e) => setPassword(e)}
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
        />
        <View style={styles.button_content}>
          <TouchableOpacity style={styles.button} onPress={login} >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.signup}>Inscreva-se</Text>
      </TouchableOpacity>
      <View style={styles.middle_box}>
        <Text style={styles.logar_com}>Login with</Text>
      </View>
    </View>
  )
}

export default LoginPage;


const styles = StyleSheet.create({
  container: {
    paddingTop: 160,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_content: {
    alignItems: 'center'
  },
  top_box: {
    alignItems: 'center',
    marginBottom: 18,
    padding: 30,
  },
  middle_box: {
    flexDirection: 'row',
    marginTop: 20,
  },
  reg: {
    marginRight: 10,
  },
  logo_area: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 0,
    height: 80,
    paddingHorizontal: 120,
    objectFit: 'contain'
  },
  input: {
    borderWidth: 0,
    backgroundColor: '#4462e66e',
    borderRadius: 4,
    width: 250,
    height: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    marginBottom: 20,
    paddingLeft: 5,
  },
  button: {
    borderWidth: 0,
    backgroundColor: '#ffd646',
    borderRadius: 16,
    width: 200,
    height: 34,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
  },
  link: {
    color: '#e6c244',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  signup: {
    color: '#e6c244',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});