import React from 'react'

// export default function GuessInput(props) {
//     const handleSubmit = event => {
//         event.preventDefault()
//         props.onSubmit(event.target.value)
//     }
//     return(
//     <form id="inputform" onSubmit={handleSubmit}>
//         <label htmlFor="value">Guess Here
//         <input type="number" min='1' max="100"  name="value"/>
//         </label>
//         <button type="submit" name="submit" value="submit" form="inputform">Guess!</button>
//     </form>
//     )}

export default class GuessForm extends React.Component {
    static defaultProps = {
        addInput: ()=>{} //noop a function that does nothing on purpose
    }
    input = React.createRef();
    onSubmit(event) {
        event.preventDefault()
        
        if (this.props.addInput) {
            const value = this.input.value
            this.props.addInput(value)
        }
    }
    render() {
        return(
        <form onSubmit={e => this.onSubmit(e)}>
            <input 
                type="number"
                name="userGuess"
                id="userGuess"
                className="text"
                min="1"
                max="101"
                autoComplete="off"
                ref={input => (this.input = input)} />
            <button
                type="submit"
                name="submit"
                id="guessButton"
                className="button">
                Guess
                </button>

        </form>
        )}
}

