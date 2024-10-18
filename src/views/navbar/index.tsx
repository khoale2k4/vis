import React from 'react';

const Navbar = () => {
    return (
        <nav className=" p-2 fixed w-full z-10 h-16 top-0">
            <div className="px-4 flex justify-end items-center w-full border rounded-md h-full bg-white">
                <div className="text-black text-xl font-semibold">My</div>
                <div className="text-blue-500 text-xl font-semibold">Logo</div>
            </div>
        </nav>
    );
};

export default Navbar;