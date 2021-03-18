import React, { useState } from 'react';

export const Dropdown = (props) => {
    const { trigger } = props;

    const [open, setOpen] = useState(false);

    const dropdown = (
        <div className="dropdown">
            {props.children}
        </div>
    );

    const handleOpen = () => setOpen(!open);

    return (
        <div className="dropdown-parent">
            <div onClick={handleOpen}>
                {trigger}
            </div>
            {open && dropdown}
        </div>
    );
}