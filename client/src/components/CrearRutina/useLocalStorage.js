import { useState } from "react";

export function useLocalStore(key, initialValue) {
  const [storedValue, setStoreValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  const setValue = (value) => {
    try {
      setStoreValue(value);
      window.localStorage.setItem(key, value);
    } catch (error) {}
  };
  return [storedValue, setValue];
}
