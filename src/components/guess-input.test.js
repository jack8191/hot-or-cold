import React from 'react'
import {shallow, mount} from 'enzyme'

import GuessInput from './guess-input'

describe('<GuessInput />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessInput />)
    })
    it('Renders an empty form', () => {
        const wrapper = shallow(<GuessInput/>)
        expect(wrapper.is('form'))
    })
    it('Accepts an input when the user submits a form', () => {
        const callback = jest.fn()
        const wrapper = mount(<GuessInput addInput={callback}/>)
        const input = "2"
        wrapper.instance()
        wrapper.update()
        wrapper.find('input[type="number"]').instance().value = input
        wrapper.simulate('submit')
        expect(callback).toHaveBeenCalledWith(input)
        
    })
})