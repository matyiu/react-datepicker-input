import { hot } from 'react-hot-loader/root';
import React from 'react'
import { Datepicker } from './components/Datepicker';

const App = () => {
    return (
        <div className="app">
            <h1>Input Date Picker React</h1>
            <div className="app-input">
                <Datepicker />
            </div>
        </div>
    );
}

export default hot(App);