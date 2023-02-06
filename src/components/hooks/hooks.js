import { useState, useEffect } from 'react';

export function useLocalStorage(defaultValue) {
    const [state, setState] = useState(
      () => JSON.parse(localStorage.getItem('contacts')) ?? defaultValue
    );

    useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(state));
    }, [state]);

    return [state, setState];
}
  
