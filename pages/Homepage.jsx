import React, { Fragment, useEffect, useState } from 'react'

import { Image, ScrollView, TextInput, TouchableOpacity, View, Text, StyleSheet, FlatList } from 'react-native'
import Header from '../components/Header';
import Curso from '../components/Curso';
import AsyncStorage from '@react-native-async-storage/async-storage'

const Homepage = ({ navigation }) => {

  const [data, setData] = useState([]);

  const categoriesFilter = (categoria) => {
    const dataFilter = data.filter((item) => item.categoria == categoria);
    return dataFilter;
  }

  const frontend = categoriesFilter("frontend");
  const backend = categoriesFilter("backend");
  const bd = categoriesFilter("bd");
  const design = categoriesFilter("design");

  const getCourses = async () => {
    const token = await AsyncStorage.getItem("token");

    fetch("https://estudealiback-senacc.vercel.app/cursos", {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => setData(data))
  }

  useEffect(() => {
    getCourses();
  }, [])
  return (
    <Fragment>
      <Header navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <View>
            <View >
              <View style={{ backgroundColor: '#44E690', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 40, bottom: 80 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                </View>

              </View>

            </View>

            <View style={{ marginTop: -65, backgroundColor: '#44E690', padding: 10 }}>
              <Text style={{ color: '#fff', fontSize: 18 }}>Categorias</Text>
            </View>

            <ScrollView horizontal style={{ padding: 10 }}>
              <TouchableOpacity style={{ width: 95, height: 95, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../assets/front.png')} style={{ width: 70, height: 70 }} />
                <Text>Front-end</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: 95, height: 95, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../assets/back.png')} style={{ width: 70, height: 70 }} />
                <Text>Back-end</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: 95, height: 95, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../assets/banco.png')} style={{ width: 70, height: 70 }} />
                <Text>BD</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: 95, height: 95, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../assets/design.png')} style={{ width: 70, height: 70 }} />
                <Text>Design</Text>
              </TouchableOpacity>
            </ScrollView>

            <View style={{ backgroundColor: '#44E690', padding: 10 }}>
              <Text style={{ color: '#fff', fontSize: 18 }}>Frontend</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10, padding: 5, marginTop: 5 }}>
              <FlatList
                horizontal
                data={frontend}
                renderItem={({ item }) =>  <Curso navigation={navigation} data={item}
                />}
              
              />
            </ScrollView>
            <View style={{ backgroundColor: '#44E690', padding: 10 }}>
              <Text style={{ color: '#fff', fontSize: 18 }}>Backend</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10, padding: 5, marginTop: 5 }}>
              <FlatList
                horizontal
                data={backend}
                renderItem={({ item }) =>  <Curso navigation={navigation} data={item}
                />}
              
              />
            </ScrollView>

            <View style={{ backgroundColor: '#44E690', padding: 10 }}>
              <Text style={{ color: '#fff', fontSize: 18 }}>Banco de dados</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10, padding: 5, marginTop: 5 }}>
              <FlatList
                horizontal
                data={bd}
                renderItem={({ item }) =>  <Curso navigation={navigation} data={item}
                />}
              
              />
            </ScrollView>

            <View style={{ backgroundColor: '#44E690', padding: 10 }}>
              <Text style={{ color: '#fff', fontSize: 18 }}>Design</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10, padding: 5, marginTop: 5 }}>
              <FlatList
                horizontal
                data={design}
                renderItem={({ item }) =>  <Curso navigation={navigation} data={item}
                />
              }
              
              />
            </ScrollView>

          </View>
        </View>


      </ScrollView>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  quadrado: {
    width: 350,
    height: 410,
    marginTop: 50,
    backgroundColor: 'rgba(68, 230, 144, 0.46)',

    alignItems: 'center',
  },
  quadrado2: {
    width: 335,
    height: 320,
    borderRadius: 16,
    marginTop: 10,
    backgroundColor: '#44E690',
  },
  quadrado3: {
    width: 320,
    height: 160,
    backgroundColor: '#D7F8F9',
    borderRadius: 16,
    marginTop: 10,
    marginLeft: 8,
  },

  titulocurso: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 25,

    fontWeight: 'bold'
  },

  subtitulocurso: {
    marginLeft: 10,
    marginTop: 5,
    fontSize: 15,
    fontWeight: 'bold'
  },

  linha1: {
    width: 335,
    height: 2,
    marginTop: 30,
    backgroundColor: 'grey',
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
  },
  buttonText: {
    color: '#000',
  },

  container2: {
    flex: 1,
    alignItems: 'center',
  },
  quadrado4: {
    width: 350,
    height: 410,
    marginTop: 40,
    backgroundColor: 'rgba(68, 97, 230, 0.45)',

    alignItems: 'center',
  },

  avaliac: {
    right: 110,
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },

  linha2: {
    width: 335,
    height: 2,
    marginTop: 310,
    backgroundColor: 'grey',
  },

  button2: {
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
  },
  buttonText2: {
    color: '#000',
  },

  footer: {
    backgroundColor: '#44E690',
    padding: 10,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },

  button10: {
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
  },
  buttonText10: {
    color: '#000',
  },

});

export default Homepage