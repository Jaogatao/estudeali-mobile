import AsyncStorage from "@react-native-async-storage/async-storage"

export const LogoutFn = async () => {
  AsyncStorage.removeItem('token');
}