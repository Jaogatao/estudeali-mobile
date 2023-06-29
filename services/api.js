import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const token = AsyncStorage.getItem("token")

const api = axios.create({
  baseURL : 'https://estudealiback-senacc.vercel.app',
  headers: {
    Accept: 'application/json',
    "Content-Type" : "application/json",
    "Authorization" : `Bearer ${token}`
    
   }
})

export default api;