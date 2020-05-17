import React from 'react';
import { render } from 'react-native-testing-library';
import App from '../../App';

describe('Entry file', () =>{
    it ('Should render app component properly',() => {
        expect(<App/>).toMatchSnapshot();
    })
})