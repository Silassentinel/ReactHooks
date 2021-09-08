import AsyncStorage from "@react-native-async-storage/async-storage";
// staat toe om de manier van opslaan te configureren
export const persistConfig = {
    key: "state", storage: AsyncStorage,
};