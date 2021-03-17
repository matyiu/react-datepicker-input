import React from 'react';

export const Datepicker = () => {
    return (
        <div className="datepicker">
            <div className="datepicker-input">
                <input type="text" readOnly />
                <i className="fas fa-calendar"></i>
            </div>
        </div>
    );
}