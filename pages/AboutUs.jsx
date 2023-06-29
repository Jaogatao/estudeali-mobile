import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput, Button, TouchableHighlight, onPress } from 'react-native';
import Header from '../components/Header';
import { Fragment } from 'react';
const TextButton = ({ onPress, title }) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <Text>{title}</Text>
    </TouchableHighlight>
  );
};
export default function About() {
  return (
    <Fragment>
      <Header />
      <ScrollView style={{ flex: 1 }}>
        <View>
          <View style={{ backgroundColor: '#44E690', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 40 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

              <View style={{}}>
                <View style={{ borderRadius: 50 }}>
                  <Image source={require('../assets/user.jpeg')} style={{ width: 30, height: 30, borderRadius: 25, marginBottom: 40 }} />
                </View>
                <View>
                  <Image source={require('../assets/logofigma.png')} style={{ width: 10, height: 10, paddingLeft: 110, paddingTop: 20, position: 'absolute', bottom: 45, left: 25, marginLeft: 100 }} />
                </View>
                <TouchableOpacity onPress={() => { }}>
                  <Image source={require('../assets/user.jpeg')} style={{ width: 25, height: 25, position: 'absolute', left: 340, bottom: 40 }} />
                </TouchableOpacity>
                <View>
                  <TextInput style={{ backgroundColor: '#fff', borderRadius: 10, width: 350, height: 45, position: 'absolute', left: 3, top: -25 }} placeholder="Pesquisar por cursos" />
                </View>
                <View style={{ backgroundColor: "#4461E6", width: 500, height: 15, position: 'absolute', top: 110, left: -30 }}>
                  <Text >

                  </Text>
                </View>
              </View>
            </View>

          </View>

        </View>
        <View style={styles.container}>
          <View style={styles.textos}>
            <Text style={styles.oqe} >O que é o EstudeAlí?</Text>
            <View style={styles.texto1}>
              <Text style={{ textAlign: 'center' }}>Aplicação web pensada para principal uso via mobile. O site reúne cursos de TI gratuitos de toda a internet, agrupando por tipos, temas e etc. Fazendo uma ponte do estudante com a plataforma de curso, direcionando-o ao site onde o curso está hospedado. Tornando assim o conhecimento ainda mais acessível, divulgando o trabalho dos profissionais que disponibilizam seus materiais.</Text>
              <Text></Text>
              <Text></Text>
            </View>
          </View>
        </View>
        <View styles={styles.containerIMG}>
          <View>
            <Image source={require('../assets/user.jpeg')} style={{ width: 80, height: 80, borderRadius: 50, bottom: -100, left: 30 }}></Image>
          </View>

          <View>
            <Image source={require('../assets/user.jpeg')} style={{ width: 80, height: 80, borderRadius: 50, bottom: -20, left: 160 }}></Image>
          </View>
          <View>
            <Image source={require('../assets/user.jpeg')} style={{ width: 80, height: 80, borderRadius: 50, bottom: 60, left: 290 }}></Image>
          </View>
          <View>
            <Image source={require('../assets/user.jpeg')} style={{ width: 80, height: 80, borderRadius: 50, bottom: -30, left: 30 }}></Image>
          </View>
          <View>
            <Image source={require('../assets/user.jpeg')} style={{ width: 80, height: 80, borderRadius: 50, bottom: 50, left: 160 }}></Image>
          </View>
          <View>
            <Image source={require('../assets/user.jpeg')} style={{ width: 80, height: 80, borderRadius: 50, bottom: 130, left: 290 }}></Image>
          </View>
          <View>
            <Image source={require('../assets/user.jpeg')} style={{ width: 80, height: 80, borderRadius: 50, bottom: 50, left: 160 }}></Image>
          </View>
        </View>
        <Text style={{ bottom: 360, left: 33 }}>Daniel Vitor</Text>
        <Text style={{ bottom: 380, left: 153 }}>Deyvid Ataíde</Text>
        <Text style={{ bottom: 400, left: 298 }}>Unknown</Text>
        <Text style={{ bottom: 250, left: 17 }}>Emerson França</Text>
        <Text style={{ bottom: 270, left: 155 }}>João Antônio</Text>
        <Text style={{ bottom: 291, left: 290 }}>Lucas Filipe</Text>
        <Text style={{ bottom: 150, left: 158 }}>Ruan Gabriel</Text>


      </ScrollView>

    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 10,
    height: 250
  },
  containerIMG: {
  },
  textos: {
    backgroundColor: "rgba(68, 230, 144, 0.46);",
    alignItems: 'center',
    textAlign: 'center'
  },
  texto1: {
    paddingTop: 30
  },
  oqe: {
    marginTop: 30
  },
  footer: {
    backgroundColor: '#44E690',
    padding: 10,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sobre: {
    color: 'white',
    fontSize: 16,
  },
  button: {
    left: -90,
    borderWidth: 0,
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
});
