import React, {useState} from 'react'
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const Register = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpassword, setConfirmPassword] = useState("")
  const registerUser = () => {
    const payload = {
      name: name,
      email: email,
      password: password,
      confirmpassword: confirmpassword
    }
    fetch('https://estudealiback-senacc.vercel.app/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then(async (data) => {
        Alert.alert(data.msg)
      })
      .catch((err) => { 
        console.log(err);
        Alert.alert("Erro ao cadastrar usuário!")
      });

  }
  return (
    <View style={[styles.container, { marginTop: 0 }]}>
      <View style={styles.top_box}>
        <View style={styles.logo_area}>
          <Image
            source={require('../assets/logofigma.png')}
            style={styles.logo}
          />
        </View>
      </View>
      <View>
        <Text style={styles.label}></Text>
      </View>
      <View style={styles.container2_0}>

        <Text style={styles.label}>Usuário</Text>
        <TextInput
          value={name}
          onChangeText={(e) => setName(e)}
          style={styles.input}
          placeholder="Usuário"
        />
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
        <Text style={styles.label}>Confirmar Senha</Text>
        <TextInput
          value={confirmpassword}
          onChangeText={(e) => setConfirmPassword(e)}
          style={styles.input}
          placeholder="Confirmar Senha"
          secureTextEntry
        />
        <View style={styles.button_content}>
          <TouchableOpacity style={styles.button} onPress={registerUser}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.insc}>
          <Text style={styles.insc1}>Inscreva-se</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}

export default Register



const styles = StyleSheet.create({
  container: {
    paddingTop: 90,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  top_box: {
    alignItems: 'center',
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
    height: 34,
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
    borderRadius: 15,
    width: 200,
    height: 30,
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
  button_content: {
    alignItems: 'center'
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
  insc1: {
    color: '#FFD646',
    textAlign: 'center'
  },
  insc: {
    marginTop: 20,
    height: 30,
  }

});