'use client';

import { useEffect } from "react";

export const useHandleClickOutsideAlerter = ({ ref, setState, action }: ClickOutsideAlerterProps) => {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                if (setState) {
                    setState(false);
                }
                if (action) {
                    action();
                }
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, setState, action]);
};