import React, { useState } from 'react';
import TextInput from './TextInput'
import GameDisplay from './GameDisplay'


const Game = () => {

    const gameStyle = {
        width: "50%", 
        height: 310,
        backgroundColor: 'hsl(181, 1%, 26%)',
        padding: 10,
        borderRadius: 10,
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignSelf: 'center',
        position: 'relative',
    }
    
    const [inputChange, setInputChange] = useState([])
    const [userInput, setUserInput] = useState([])
    const [displayContent, setDisplayContent] = useState([
        "Escribe algo para empezar"
    ])

    console.log('userinputfromgame.js:', userInput)
    if (userInput.length > 0) {

        if (userInput[0].length > 3) {
            setDisplayContent(["Its bigger than three"])
            setUserInput([])
        } else {
            setDisplayContent(["It's less than three or three"])
            setUserInput([])
        }

    } 

    


    return (
        <div style={gameStyle}>
            <GameDisplay displayContent={displayContent}/>
            <TextInput 
                userInput={userInput} 
                setUserInput={setUserInput}
                setDisplayContent={setDisplayContent} 
                displayContent={displayContent}
                setInputChange={setInputChange}
                inputChange={inputChange}
            />
        </div>
    )

}

export default Game