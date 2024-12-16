import Image from 'next/image';
import logo from '@/assets/logo.svg';
import NavLinks from './NavLinks';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Logo */}
        <div className="navbar-brand">
          <Image
            src={logo}
            alt="Logo"
            width="150"
            className="d-inline-block align-text-top"
          />
        </div>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
