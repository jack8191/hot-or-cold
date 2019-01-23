import React from 'react';

import GuessHistory from './guess-history'
import Feedback from './feedback'
import GuessInput from './guess-input'

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
                guessHistory: [...this.state.guessHistory, {value}]
            })
        }
    
    
    
    render() {
        return (
            <div>
                <Feedback recentGuess={this.state.guessHistory.slice(-1)} target={this.state.target}/>
                <GuessInput addInput={guess => this.addInput(guess)}/>
                <GuessHistory currentGuessHistory={this.state.guessHistory}/>
            </div>
            )
    
    }
}
//target (can be a state of Game caluclated with Math.random)
//guess history state set by a callback funtion

//input/submit guessInput component needs a callback funtion onSubmit argument of the guess to setState equal to input value on submit called guess
//guess history (stateful component) props.history an array of #s
//feedback zone needs target and guess props


