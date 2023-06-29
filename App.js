import 'react-native-gesture-handler';

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Component, useEffect } from 'react';
import { LogBox } from 'react-native';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import LoginPage from './pages/LoginPage';
import Register from './pages/Register';
import AboutUs from './pages/AboutUs';
import Homepage from './pages/Homepage';
import Header from './components/Header';
import AddCurso from './pages/AddCurso';
import Logout from './components/Logout';
import CursoDetails from './pages/CursoDetails';
import AsyncStorage from '@react-native-async-storage/async-storage';

LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.']);


const Tab = createBottomTabNavigator();

const App = (props) => {




    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Login" options={{
              headerShown: false,
              tabBarStyle: { display: 'none' },
              tabBarItemStyle: { display: 'none' }
            }}
            component={LoginPage} />
          <Tab.Screen
            name="CursoDetail" options={{
              headerShown: false,
              // tabBarStyle: { display: 'none' },
              tabBarItemStyle: { display: 'none' }
            }}
            component={CursoDetails} />
          <Tab.Screen
            name="Register"
            options={{
              headerShown: false,
              tabBarStyle: { display: 'none' },
              tabBarItemStyle: { display: 'none' }
            }}
            component={Register}
          />
          <Tab.Screen name="Home" options={{
            headerShown: false, tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={'#111'} size={size} />
            ),
          }} component={Homepage} />
          <Tab.Screen name="About" options={{ headerShown: false, tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="alpha-a-box" color={'#111'} size={size} />
            ),  }} component={AboutUs} />
          <Tab.Screen name="AddCurso" component={AddCurso} options={{ headerShown: false, title: 'Novo curso', tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="plus-thick" color={'#111'} size={size} />
            ), }} />
          <Tab.Screen name="Sair" component={Logout} options={{ headerShown: false, tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="logout" color={'#111'} size={size} />
            ), }} />  
        </Tab.Navigator>
      </NavigationContainer>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;