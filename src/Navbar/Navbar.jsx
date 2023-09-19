import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'Shop' }
    ];

    return (
        <nav className="">
            <div className="md:hidden text-2xl" onClick={ ()=> setOpen(!open) }>
                {
                    open === true ? <HiX></HiX> : <HiMenuAlt1></HiMenuAlt1>
                }
            </div>
            <ul className={`md:flex duration-1000 pl-3 py-3 md:justify-center rounded-xl absolute md:static bg-lime-400 ${open? 'top-28' : '-top-60'} `}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};



export default Navbar;