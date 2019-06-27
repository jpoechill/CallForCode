import React, { useState, useEffect } from 'react';

function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue)

    function handleChange(e) {
        setValue(e.target.value)
    }

    return {
        value,
        onChange: handleChange
    }
}

function useDocumentTitle(title) {
    useEffect(() => {
        document.title = title
    })
}

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return width
}

export default function Greetings(props) {
    const name = useFormInput('Mary')
    const surname = useFormInput('Poppins')
    const width = useWindowWidth();
    console.log(width)

    useDocumentTitle(name.value + ' ' + surname.value)

    return (
        <div>
            <div label="Name-hooks">
                <input name="name" value={name.value} onChange={name.onChange} />
            </div>
            <div label="Surname-hooks">
                <input name="surname" value={surname.value} onChange={surname.onChange} />
            </div>
            <div>
                {width}
            </div>
        </div>
    )
}