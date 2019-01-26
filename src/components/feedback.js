import React from 'react'

export default function Feedback(props) {
    const recentGuess = props.newGuess
    const intGuess = parseInt(recentGuess[0])
    const target = props.target
    let feedback = ''
    const lowerBound = target - 10
    const upperBound = target + 10
    if (isNaN(intGuess)) {feedback = "Guess a number!"} 
    else if (intGuess === target) {feedback = 'Correct'} 
    else if (intGuess > lowerBound && intGuess < target) {feedback = 'Hot'} 
    else if (intGuess < upperBound && intGuess > target) {feedback = 'Hot'} 
    else {feedback = "Cold"}
    //switch statement alternate method
                // console.log(10 + target)
                // console.log(target - 10)

    return(
             <p>{feedback}</p>
    )
}

Feedback.defaultProps = {
    newGuess: NaN,
    target: 0
}

//Anwar Montsair

