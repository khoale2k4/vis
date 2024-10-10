'use client';
import { RefObject, useEffect } from "react";

export const useHandleClickOutsideAlerter = (ref: RefObject<HTMLElement>, setState: React.Dispatch<React.SetStateAction<boolean>>) => {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setState(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, setState]);
};