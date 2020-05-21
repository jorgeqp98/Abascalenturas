import React from 'react'
import TitleHeader from './components/TitleHeader'
import Game from './components/Game'


const App = () => {

    const appStyle = {
        backgroundColor: 'black',
        height: '100vmax',
        padding: '10px',
        margin: 0,
        display: 'flex'  ,
        flexDirection: 'column'
    }
    
    return (

        <div style={appStyle}>
            <TitleHeader/>
            <Game />
        </div>
    )
}

export default App