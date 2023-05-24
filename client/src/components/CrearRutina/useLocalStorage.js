import { useState } from "react";

export function useLocalStore (key, initialValue) {
    const [storedValue,setStoreValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch(error){
            return initialValue
        }
    })
    const setValue = value => {
        try {
            if(typeof value === String){
                setStoreValue(value)
                window.localStorage.setItem(key,value)
            } else {
                setStoreValue([...storedValue,value])
                window.localStorage.setItem(key,JSON.stringify(value))
            }
            
        } catch (error) {
            
        }
    }
    return [storedValue,setValue]
}