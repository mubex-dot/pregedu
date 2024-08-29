// secureStorage.js
import * as SecureStore from "expo-secure-store";

export const saveToSecureStore = async (key, value) => {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (error) {
    console.error("Failed to save to SecureStore", error);
  }
};

export const getFromSecureStore = async (key) => {
  try {
    const value = await SecureStore.getItemAsync(key);
    return value;
  } catch (error) {
    console.error("Failed to retrieve from SecureStore", error);
  }
};

export const deleteFromSecureStore = async (key) => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.error("Failed to delete from SecureStore", error);
  }
};
