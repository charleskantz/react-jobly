import { useState, useEffect } from 'react';

const useLocalStorage = (key) => {
  const [state, setState] = useState(() => {
    console.log('key', key)
    let value = (localStorage.getItem(key));
    console.log('value', value)
    return value;
  });

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return [ state, setState ];
}

export default useLocalStorage;