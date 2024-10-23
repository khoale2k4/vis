import Container from '@/components/container';
import LanguageSwitcher from '@/components/language';
import ThemeSwitcher from '@/components/theme';
import Tooltip from '@/components/tooltip';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="p-2 fixed w-full h-16 top-0">
            <Container className="px-4 flex justify-between items-center w-full border dark:border-none !rounded-md h-full z-10">
                <div className="flex">
                    <div className="text-black dark:text-white text-xl font-semibold">Alpha</div>
                    <div className="text-blue-500 text-xl font-semibold">Storage</div>
                </div>
                <div className='flex gap-4'>
                    <Tooltip
                        className='z-100'
                        placement='bottom'
                        content={<Container className='p-2 !rounded-md border'>Đổi theme</Container>}
                    >
                        <div className='h-fit w-fit flex justify-center place-items-center'>
                            <ThemeSwitcher version='1' />
                        </div>
                    </Tooltip>
                    <LanguageSwitcher version='1' />
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;