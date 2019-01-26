import React from 'react'
import {shallow, mount} from 'enzyme'

import ResetButton from './reset-button'

describe ('<ResetButton />', () => {
    it('Renders without crashing', () => {
        shallow(<ResetButton />)
    })
})