'use client';

import { useHandleClickOutsideAlerter } from '@/utils/handleClickOutside';
import { useState, useRef } from 'react';

const Dropdown = ({
    button, children, className, animation, position, max_width, disabled = false, openWrapper: parentOpenWrapper, setOpenWrapper: parentSetOpenWrapper,
}: DropdownProps) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    const [localOpenWrapper, setLocalOpenWrapper] = useState<boolean>(false);

    const openWrapper = parentOpenWrapper !== undefined ? parentOpenWrapper : localOpenWrapper;
    const setOpenWrapper = parentSetOpenWrapper ?? setLocalOpenWrapper;

    const handleOnMouseDown = () => {
        if (!disabled) { setOpenWrapper(!openWrapper); };
    };

    useHandleClickOutsideAlerter({ ref: wrapperRef, setState: setOpenWrapper });

    return (
        <div ref={wrapperRef} className={`relative flex ${max_width ? 'w-full' : ''}`}>
            <div className={`flex ${max_width ? 'w-full' : ''}`} onMouseDown={handleOnMouseDown}>
                {button}
            </div>
            <div
                className={`${className} absolute z-10 
                 ${openWrapper ? 'scale-100' : 'scale-0'}
                 ${position ? position : 'origin-top'}
                 ${animation ? animation : 'transition-all duration-300 ease-in-out'}`}
            >
                {children}
            </div>
        </div>
    );
};

export default Dropdown;