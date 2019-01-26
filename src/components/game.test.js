import React from 'react'
//import { isMainThread } from "worker_threads";
import {shallow, mount} from 'enzyme'

import Game from './game'

describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<Game />)
    })
})