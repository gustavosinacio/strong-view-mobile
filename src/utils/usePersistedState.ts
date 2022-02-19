import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState<T>(initialState);

  useEffect(() => {
    async function getAsyncStorage() {
      const storedItem = await AsyncStorage.getItem(key);

      if (storedItem) {
        // console.log(98212, `return stored: ${storedItem}`);
        return setState(JSON.parse(storedItem));
      }
      // console.log(98213, 'sets new');
      return setState(initialState);
    }
    getAsyncStorage();
  }, [initialState, key]);

  useEffect(() => {
    AsyncStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
