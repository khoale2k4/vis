'use client';

import { useTranslations } from 'next-intl';
import Dropdown from '@/components/dropdown';
import RenderCase from '@/components/render';
import Container from '@/components/container';
import { FaChevronDown } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import { removeDiacritics } from '@/utils/removeDiacritics';
import { MdClose, MdRadioButtonChecked, MdRadioButtonUnchecked } from 'react-icons/md';

const SelectInputV1 = ({
    options = [], value, setValue, messageIfEmptyOptions, state, position,
    placeholder, select_type = 'single', isClearable = true, id, className, disabled = false,
}: SelectInputProps) => {

    const [openWrapper, setOpenWrapper] = useState<boolean>(false);
    const [isClient, setIsClient] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const InputFieldMessage = useTranslations('InputField');

    const filteredOptions = options.filter((option) =>
        removeDiacritics({ str: option.label.toLowerCase() }).includes(removeDiacritics({ str: searchTerm.toLowerCase() }))
    );

    const selectedLabel = value.length
        ? options.filter((option) => value.includes(option.value)).map((option) => option.label).join(', ')
        : placeholder;

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className={`relative`} id={id}>
            <Dropdown
                disabled={disabled}
                openWrapper={openWrapper}
                setOpenWrapper={setOpenWrapper}
                max_width={true}
                position={position}
                button={
                    <button
                        className={`p-2 px-3 text-left border rounded-md w-full dark:bg-darkContainerPrimary
                        focus:outline-none flex justify-between place-items-center ${className}
                        ${disabled
                                ? "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
                                : state === 'error'
                                    ? "border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
                                    : state === 'success'
                                        ? "border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
                                        : 'dark:border-none'}`}
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <p className="truncate">{selectedLabel || placeholder || InputFieldMessage('DefaultSelectPlaceHolder')}</p>

                        <RenderCase renderIf={isClearable && value.length > 0 && isClient}>
                            <button
                                type="button"
                                className='-mr-0.5'
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setValue([]);
                                }}
                            >
                                <MdClose />
                            </button>
                        </RenderCase>

                        <RenderCase renderIf={!isClearable || value.length === 0}>
                            <FaChevronDown className={`w-3 h-3 transition-all duration-300 ${openWrapper ? 'rotate-180' : ''}`} />
                        </RenderCase>
                    </button>
                }
                className="top-12 w-full"
            >
                <Container className="flex flex-col w-full bg-white dark:bg-darkContainerPrimary border dark:border-white/10 !rounded-md">
                    <div className="relative p-2">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder={InputFieldMessage('DefaultSelectSearchPlaceHolder')}
                            className="p-2 w-full text-left border rounded-md dark:bg-darkContainerPrimary dark:border-none focus:outline-none pr-10"
                            disabled={options.length === 0}
                        />
                        <RenderCase renderIf={!!searchTerm}>
                            <button
                                type="button"
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                                onClick={() => setSearchTerm('')}
                            >
                                <MdClose />
                            </button>
                        </RenderCase>
                    </div>

                    <div className="h-px w-full bg-gray-200 dark:bg-white/10" />

                    <div className='flex flex-col w-full max-h-32 overflow-y-scroll no-scrollbar'>
                        <RenderCase renderIf={filteredOptions.length > 0}>
                            {filteredOptions.map((option, index) => (
                                <div key={option.value}>
                                    <button
                                        onClick={() => {
                                            if (select_type === 'multi') {
                                                setValue(
                                                    value.includes(option.value)
                                                        ? value.filter((v) => v !== option.value)
                                                        : [...value, option.value]
                                                );
                                            } else {
                                                setValue([option.value]);
                                            }
                                        }}
                                        className="p-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 flex justify-between place-items-center w-full"
                                    >
                                        {option.label}

                                        <RenderCase renderIf={value.includes(option.value)}>
                                            <MdRadioButtonChecked />
                                        </RenderCase>

                                        <RenderCase renderIf={!value.includes(option.value)}>
                                            <MdRadioButtonUnchecked />
                                        </RenderCase>
                                    </button>

                                    <RenderCase renderIf={index < filteredOptions.length - 1}>
                                        <div className="h-px w-full bg-gray-200 dark:bg-white/10" />
                                    </RenderCase>
                                </div>
                            ))}
                        </RenderCase>
                    </div>

                    <RenderCase renderIf={filteredOptions.length === 0}>
                        <div className="p-2 text-gray-500 text-center flex justify-center place-items-center">{messageIfEmptyOptions || InputFieldMessage('DefaultSelectNoOptions')}</div>
                    </RenderCase>
                </Container>
            </Dropdown>
        </div>
    );
};

export default SelectInputV1;