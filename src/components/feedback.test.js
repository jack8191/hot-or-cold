import React from 'react'
import {shallow, mount} from 'enzyme'

import Feedback from './feedback'

describe('<Feedback />', () => {
    it('Renders without crashing', () =>{
        shallow(<Feedback />)
    })
    it('Renders feedback initially', () => {
        const wrapper = shallow(<Feedback />)
        expect(wrapper.equals("<p>Guess a number!</p>"))
    })
    it('Renders correct feedback when input matches target', () => {
        const component = shallow(<Feedback newGuess={[15]} target={15} />)
        const feedback = "<p>Correct</p>"
        expect(component.html()).toEqual(feedback)
    })
    it('Renders Hot feedback when input is within 20 of target', () => {
        const component = shallow(<Feedback newGuess={[15]} target={17} />)
        const feedback = "<p>Hot</p>"
        expect(component.html()).toEqual(feedback)
    })
})