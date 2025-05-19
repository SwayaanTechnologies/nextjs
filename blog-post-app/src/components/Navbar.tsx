import { NavLinks } from "./nav-links"; 
import { NavSearch } from "./nav-search";

export const Navbar = () => {
    console.log('Navbar rendered');

    return (
        <nav>
            <NavLinks />
            <NavSearch />
        </nav>
    );
};
