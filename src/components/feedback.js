import React from 'react'

export default function Feedback(props) {
    const recentGuess = props.recentGuess
    const target = props.target
     let feedback = ''
    if (recentGuess === target) {feedback = 'Correct'} else if (recentGuess < 10 + target || recentGuess > 10 - target) {feedback = 'Hot'} else {feedback = "Cold"}
    return(
             <p>{feedback}</p>
    )
}

// Feedback.defaultProps = {
//     target: '',
//     guess: []
// }