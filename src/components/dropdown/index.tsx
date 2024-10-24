'use client';

import { useState, useRef } from 'react';
import { useHandleClickOutsideAlerter } from '@/utils/handleClickOutside';

const Dropdown = ({
    button, children, className, animation, position, maxWidth, dropdownPosition = 'bottom',
    disabled = false, openWrapper: parentOpenWrapper, setOpenWrapper: parentSetOpenWrapper,
}: DropdownProps) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    const [localOpenWrapper, setLocalOpenWrapper] = useState<boolean>(false);

    const dropdownPositionClasses = {
        top: `!top-2 -translate-y-full ${position ? position : 'origin-bottom'}`,
        bottom: `-translate-y-4 ${position ? position : 'origin-top'}`,
        left: `right-[calc(100%+8px)] -top-0 ${position ? position : 'origin-top-right'}`,
        right: `left-[calc(100%+8px)] -top-0 ${position ? position : 'origin-top-left'}`,
    }[dropdownPosition];

    const openWrapper = parentOpenWrapper !== undefined ? parentOpenWrapper : localOpenWrapper;
    const setOpenWrapper = parentSetOpenWrapper ?? setLocalOpenWrapper;

    const handleOnMouseDown = () => {
        if (!disabled) { setOpenWrapper(!openWrapper); };
    };

    useHandleClickOutsideAlerter({ ref: wrapperRef, setState: setOpenWrapper });


    return (
        <div ref={wrapperRef} className={`relative flex ${maxWidth ? 'w-full' : ''}`}>

            <div className={`flex ${maxWidth ? 'w-full' : ''}`} onMouseDown={handleOnMouseDown}>
                {button}
            </div>

            <div
                className={`absolute w-full z-10
                ${className}
                ${dropdownPositionClasses}
                ${openWrapper ? 'scale-100' : 'scale-0'}
                ${animation ? animation : 'transition-all duration-300 ease-in-out'}`}
            >
                <div className='relative w-full py-4'>
                    {children}
                </div>
            </div>

        </div>
    );
};

export default Dropdown;