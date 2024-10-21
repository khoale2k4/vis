'use client';

import { useHandleClickOutsideAlerter } from '@/utils/handleClickOutside';
import { useState, useRef } from 'react';

const Dropdown = ({ button, children, className, animation, position }: DropdownProps) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [openWrapper, setOpenWrapper] = useState(false);
    useHandleClickOutsideAlerter({ ref: wrapperRef, setState: setOpenWrapper });

    return (
        <div ref={wrapperRef} className="relative flex">
            <div className="flex" onMouseDown={() => setOpenWrapper(!openWrapper)}>
                {button}
            </div>
            <div
                className={`${className} absolute z-10 
                 ${openWrapper ? "scale-100" : "scale-0"}
                 ${position ? position : "origin-top-right"}
                 ${animation ? animation : " transition-all duration-300 ease-in-out"}`}
            >
                {children}
            </div>
        </div>
    );
};

export default Dropdown;