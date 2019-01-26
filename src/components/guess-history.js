import React from 'react'

export default function GuessHistory(props) {
    const guesses = props.currentGuessHistory
    const guessList = guesses.map((guess, index) => 
    <li key={index}>
        {guess}
    </li>
    )
    return (
        <ul className='guess-list'>
           {guessList} 
        </ul>
    )
}

GuessHistory.defaultProps = {
    currentGuessHistory: []
}