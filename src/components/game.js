import React from 'react';

import GuessHistory from './guess-history'
import Feedback from './feedback'
import GuessInput from './guess-input'
import ResetButton from './reset-button';

export default class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            guessHistory: [],
            target: Math.floor(Math.random() * 100) + 1
        }
    }
        // function calculateTarget() {
        //     const target = Math.floor(Math.random() * (100 - 1) + 1) 
    // function setTarget(){
    //     const newTarget = Math.floor(Math.random() * (100 - 1) + 1)
    //     return this.setState({ target: newTarget})
    // }
        
    
        addInput(value) {
            this.setState({
                guessHistory: [...this.state.guessHistory, value]
            })
        }

        handleResetButtonClick(e) {
            e.preventDefault()
            this.setState({
                guessHistory: [],
                target: Math.floor(Math.random() * 100) + 1
            })
        }

       
    
    
    
    render() {
       let target = this.state.target
        let recentGuess = this.state.guessHistory.slice(-1)
        console.log(recentGuess)
        let guessHistory = this.state.guessHistory
        return (
            <div>
                <Feedback newGuess={recentGuess} target={target}/>
                <ResetButton target={target} recentGuess={recentGuess} onClick={event => this.handleResetButtonClick(event)} />
                <GuessInput addInput={guess => this.addInput(guess)}/>
                <GuessHistory currentGuessHistory={guessHistory}/>
            </div>
            )
    
    }
}
//target (can be a state of Game caluclated with Math.random)
//guess history state set by a callback funtion

//input/submit guessInput component needs a callback funtion onSubmit argument of the guess to setState equal to input value on submit called guess
//guess history (stateful component) props.history an array of #s
//feedback zone needs target and guess props


