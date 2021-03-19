import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react'
import { Datepicker } from './components/Datepicker';

const App = () => {
    const [ date, setDate ] = useState(null);

    const handleDateChange = (e) => {
        setDate(e.target.value);
    }

    return (
        <div className="app">
            <h1>Input Date Picker React</h1>
            <div className="app-input">
                <Datepicker value={date} onChange={handleDateChange} />
            </div>
        </div>
    );
}

export default hot(App);