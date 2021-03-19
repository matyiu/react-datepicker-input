import React from 'react';
import { Calendar } from './Calendar';
import { Dropdown } from './Dropdown';

const DatepickerInput = () => {
    return (
        <div className="datepicker-input">
            <input type="text" readOnly />
            <i className="fas fa-calendar"></i>
        </div>
    );
}

export const Datepicker = () => {
    return (
        <div className="datepicker">
            <Dropdown trigger={
                <DatepickerInput />
            }>
                <Calendar />
            </Dropdown>
        </div>
    );
}