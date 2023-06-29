import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'

const Curso = ({ data, navigation }) => {

  const showDetails = (id) => {
    navigation.navigate("CursoDetail", id)
  }

  return (
    <View  style={{marginRight: 10}} key={data.id} horizontal>
      <TouchableOpacity onPress={() => showDetails(data._id)} style={{ width: 300, height: 200, backgroundColor: '#44E690', borderRadius: 10 }}>
        <Image source={{uri: data.img_url}} style={{ width: 300, height: 170, borderRadius: 10 }} />
        <Text style={{ marginLeft: 7, marginTop: 5 }}>{data.title}</Text>
      </TouchableOpacity>
      <View style={{ marginLeft: 10 }} />
    </View>
  )
}

export default Curso