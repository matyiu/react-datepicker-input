import React, { useEffect, useRef, useState } from 'react';

export const Dropdown = (props) => {
    const { trigger } = props;

    const [open, setOpen] = useState(false);
    const dropdownDom = useRef();

    const dropdown = (
        <div className="dropdown">
            {props.children}
        </div>
    );

    const handleOpen = () => setOpen(!open);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownDom.current && !dropdownDom.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    });

    return (
        <div className="dropdown-parent" ref={dropdownDom}>
            <div onClick={handleOpen}>
                {trigger}
            </div>
            {open && dropdown}
        </div>
    );
}