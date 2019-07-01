import { useState, useEffect } from 'react';

const useStateWithLocalStorage = (localStorageKey) => {
    const [value, setValue] = useState(
        JSON.parse(localStorage.getItem(localStorageKey)) || {}
    );

    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(value))
    });

    return [value, setValue];
}

const useFormInput = () => {
    const [value, setValue] = useStateWithLocalStorage('userInputLocalStorage');
    const handleChange = event => {
        setValue({ ...value, [event.target.name]: event.target.value })
    }

    return {
        value,
        onChange: handleChange
    }
}

export default useFormInput;