import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-2 mt-8 w-full">
            <div className="container mx-auto text-center">
                <p>© {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;