import React from 'react';

const Navbar = () => {
    return (
        <nav className='bg-blue-500 p-4'>
           <div className='container mx-auto flex justify-between'>
                <ul className='flex'>
                     <li className='ml-6 text-white'>Home</li>
                     <li className='ml-6 text-white'>Admin</li>
                     <li className='ml-6 text-white'>User</li>
                </ul>
              </div>
        </nav>
    );
};

export default Navbar;