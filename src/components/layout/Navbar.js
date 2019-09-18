import React from 'react';
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

// devNote: functional component since this will not have state
const Navbar = () => {
  return ( 
    <nav className="nav-wrapper white">
      <div className="container">
        <Link to='/' className="brand-logo black-text">Minimal Lists</Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
}
 
export default Navbar;