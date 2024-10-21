import Container from '@/components/container';
import LanguageSwitcher from '@/components/language';
import ThemeSwitcher from '@/components/theme';
import React from 'react';

const Navbar = () => {
    return (
        <nav className=" p-2 fixed w-full z-10 h-16 top-0">
            <Container className="px-4 flex justify-between items-center w-full border dark:border-none !rounded-md h-full">
                <div className="flex">
                    <div className="text-black dark:text-white text-xl font-semibold">Alpha</div>
                    <div className="text-blue-500 text-xl font-semibold">Storage</div>
                </div>
                <div className='flex gap-4'>
                    <ThemeSwitcher version='1' />
                    <LanguageSwitcher version='1' />
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;