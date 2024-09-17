import React, { useState } from 'react'
import { BiHomeAlt, BiInfoCircle, BiMenu, BiMoviePlay } from 'react-icons/bi'
import NavItem from './NavItem';

const defautIconSize = '1.875rem';
const items = [
    { lable: 'Home', icon: <BiHomeAlt size={defautIconSize} />, active: true },
    { lable: 'Movies', icon: <BiMoviePlay size={defautIconSize} />, active: false },
    { lable: 'About', icon: <BiInfoCircle size={defautIconSize} />, active: false }
]
const NavItemsContainer = () => <>
    {items.map((item, index) => <NavItem item={item} key={index} />)}
</>



const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className='col-span-1 bg-cyan-200'>
            <div className='mx-4 justify-between items-center flex md:block'>
                <h4 className='uppercase font-bold text-primary py-4 border-b border-primary text-right'>Phimmoi.net</h4>
                <BiMenu className='cursor-pointer md:hidden' size={defautIconSize} onClick={() => setIsOpen(!isOpen)} />

            </div>
            <ul className={`mx-4 my-2 ${isOpen ? '' : 'hidden'} md:block`}>
                <NavItemsContainer></NavItemsContainer>
            </ul>

        </nav>
    )
}

export default Nav
