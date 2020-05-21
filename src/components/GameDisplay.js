import React from 'react'

const GameDisplay = ({displayContent}) => {
    
    const displayStyle = {
        color: 'white',
        marginTop: "5%",
        marginBottom: "3%",
        marginLeft: 0,
        padding: 10,
        paddingLeft: 10,
        borderColor: 'white', 
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 15,
        width: 400,
        height: 200,
        alignSelf: 'center'   
    }

    const keyForLists = 1

    return (
    <div style={displayStyle}>
        {displayContent.map(line => <p key={keyForLists+1}>{line}</p>)}
    </div>
    )
}
 
export default GameDisplay;