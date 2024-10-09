import React from 'react';

const Navbar = () => {
    return (
        <nav className=" p-2 fixed w-full z-10 h-16 top-0">
            <div className="px-4 flex justify-between items-center w-full border rounded-xl h-full bg-gray-100">
                <div className="text-black text-xl font-bold">MyLogo</div>
            </div>
        </nav>
    );
};

export default Navbar;