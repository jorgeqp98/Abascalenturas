import React, { useState } from 'react'

const TextInput = ({inputChange, setInputChange, setDisplayContent, displayContent, setUserInput, userInput}) => {

    

    const handleClick = (e) => {
        e.preventDefault()
        setUserInput([inputChange])
        console.log('handleClicklogInputChange:', inputChange)
        console.log('handleClicklogUserInput:', userInput)
    }
    const handleChange = (event) => {
        setInputChange(event.target.value)
    }

    const textInputStyle = {
        
        marginRight: "8%",
        marginBottom: "3%",
        position: 'relative',
        left: "35%"       
    }

    return (
        <form 
            style={textInputStyle}
            onSubmit={handleClick}
        >
            <input 
                type='text' 
                id='user_input' 
                value={inputChange}
                onChange={handleChange}/>
            <button
                type='submit' 
                id='submit'>
                Arriba España
            </button>
        </form>
    )
}

export default TextInput