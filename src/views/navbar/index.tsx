import React from 'react';
import SignUpButton from '../signup';
import Tooltip from '@/components/tooltip';
import Container from '@/components/container';
import ThemeSwitcher from '@/components/theme';
import LanguageSwitcher from '@/components/language';

const Navbar = () => {
    return (
        <nav className="p-2 fixed w-full h-16 top-0 z-20">
            <Container className="px-4 flex justify-between items-center w-full border dark:border-none !rounded-md h-full z-10">
                <div className="flex w-1/3">
                    <SignUpButton />
                </div>
                <div className="flex w-1/3 justify-center">
                    <div className="text-black dark:text-white text-xl font-semibold">Alpha</div>
                    <div className="text-blue-500 text-xl font-semibold">Storage</div>
                </div>
                <div className='flex w-1/3 gap-2 sm:gap-4 justify-end'>
                    <Tooltip
                        placement='bottom'
                        content={<Container className='p-2 !rounded-md border'>Đổi theme</Container>}
                    >
                        <div className='h-fit w-fit flex justify-center place-items-center'>
                            <ThemeSwitcher version='1' />
                        </div>
                    </Tooltip>

                    <Tooltip
                        placement='bottom'
                        content={<Container className='p-2 !rounded-md border'>Đổi ngôn ngữ</Container>}
                    >
                        <div className='h-fit w-fit flex justify-center place-items-center'>
                            <LanguageSwitcher version='1' />
                        </div>
                    </Tooltip>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;