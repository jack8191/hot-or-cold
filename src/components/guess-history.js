import React from 'react'

export default function GuessHistory(props) {
    const guesses = props.currentGuessHistory
    const guessList = guesses.map((guess) => 
    <li key={guess.toString()}>
        {guess.toString()}
    </li>
    )
    return (
        <ul className='guess-list'>
           {guessList} 
        </ul>
    )
}

// GuessHistory.defaultProps = {
//     guess: []
// }