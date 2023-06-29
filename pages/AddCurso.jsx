import React, { Fragment, useState } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import Header from '../components/Header'
import { Picker, PickerIOS } from '@react-native-picker/picker'
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AddCurso = ({ navigation }) => {

  const [selectedValue, setSelectedValue] = useState("design");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img_url, setImgUrl] = useState("");
  const [link, setLink] = useState("");
  
  const clearInputs = () => {
    setTitle("");
    setDescription("");
    setImgUrl("");
    setLink("");
  }

  const createCurso = async () => {
    const payload = {
      title: title,
      description: description,
      img_url: img_url,
      categoria: selectedValue,
      link: link  
    }
    const token = await AsyncStorage.getItem("token");
      fetch('https://estudealiback-senacc.vercel.app/cursos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${token}`
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => {
          clearInputs()
          Alert.alert(data.msg)
        })
        .catch((err) => {
          console.log(err);
          Alert.alert(err.msg)
        });
  }

  return (
    <Fragment>
      <Header navigation={navigation} />
      <View style={styles.inputs}>
        <TextInput
          style={styles.input}
          placeholder='Título'
          onChangeText={(e) => setTitle(e)}
          value={title}
          />
        <TextInput
          style={styles.input}
          multiline={true}
          numberOfLines={4}
          placeholder='Descrição'
          onChangeText={(e) => setDescription(e)}
          value={description}
        />
        <TextInput
          style={styles.input}
          placeholder='Imagem (URL)'
          onChangeText={(e) => setImgUrl(e)}
          value={img_url}
        />
        <TextInput
          style={styles.input}
          placeholder='Link'
          onChangeText={(e) => setLink(e)}
          value={link}
        />
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label='Design' value="design" />
          <Picker.Item label='Banco de dados' value="bd" />
          <Picker.Item label='Frontend' value="frontend" />
          <Picker.Item label='Backend' value="backend" />
        </Picker>
        <TouchableOpacity style={styles.button} onPress={createCurso}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  inputs: {
    paddingHorizontal: 20,
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#d8d8d8',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 7,
    marginBottom: 20
  },
  button: {
    borderWidth: 0,
    backgroundColor: '#ffd646',
    borderRadius: 15,
    width: 140,
    height: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    marginTop: 15,
    marginLeft: 180,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default AddCurso