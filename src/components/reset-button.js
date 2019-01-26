import React from 'react'

export default function ResetButton(props) {
     if (props.recentGuess == props.target) {
         return (
             <button onClick={props.onClick}>
                Click to Play Again!
             </button>
         )
     } else {return null}
}