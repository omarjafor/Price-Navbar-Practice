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
        // <div>
        //     <div className="navbar bg-base-100">
        //         <div className="navbar-start">
        //             <a className="btn btn-ghost normal-case text-xl">OmarJafor</a>
        //         </div>
        //         <div className="navbar-center hidden lg:flex">
        //             <ul className="menu menu-horizontal px-1">
        //                 <li><a>Home</a></li>
        //                 <li><a>Shoes</a></li>
        //                 <li><a>Store</a></li>
        //             </ul>
        //         </div>
        //         <div className="navbar-end">
        //             <a className="btn">Button</a>
        //         </div>
        //     </div>
        // </div>
        <nav>
            <div className="md:hidden" onClick={ ()=> setOpen(!open) }>
                {
                    open === true ? <HiX className="text-2xl"></HiX> : <HiMenuAlt1 className="text-2xl"></HiMenuAlt1>
                }
                
                
            </div>
            <ul className="md:flex">
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};



export default Navbar;