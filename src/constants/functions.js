import { useState } from 'react';

const useFormInput = () => {
    const [value, setValue] = useState({})

    function handleChange(e) {
        setValue({ ...value, [e.target.name]: e.target.value })
    }

    return {
        value,
        onChange: handleChange
    }
}

export default useFormInput;