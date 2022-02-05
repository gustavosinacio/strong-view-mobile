import { Dispatch, SetStateAction, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Response<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistedState<T>(key: string, initialState: any): Response<T> {
  const [storageValue, setStorageValue] = useState<string | null>(null);

  useEffect(() => {
    console.log(98210, "getItem");
    async function getAsyncStorage() {
      const storedItem = await AsyncStorage.getItem(key);
      setStorageValue(storedItem);
    }
    getAsyncStorage();
  }, []);

  const [state, setState] = useState(() => {
    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    AsyncStorage.setItem(key, JSON.stringify(state));
    console.log(98211, "setItem");
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
