import React, { useState, useEffect } from 'react';

function useFormInput() {
    const [value, setValue] = useState({})

    function handleChange(e) {
        setValue({ ...value, [e.target.name]: e.target.value })
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
    const formData = useFormInput()
    const width = useWindowWidth();

    return (
        <div>
            <div label="Name-hooks">
                <input name="name" value={formData.name} onChange={formData.onChange} />
            </div>
            <div label="Surname-hooks">
                <input name="surname" value={formData.surname} onChange={formData.onChange} />
            </div>
            <div>
                {width}
            </div>
            <div>
                {JSON.stringify(formData)}
            </div>
        </div>
    )
}