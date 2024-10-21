import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-500 dark:bg-darkContainer text-white py-2 w-full">
            <div className="container mx-auto text-center">
                <p>© {new Date().getFullYear()} AlphaStorage. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;