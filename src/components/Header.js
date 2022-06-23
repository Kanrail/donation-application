import React from 'react';
import Navigation from './Navigation';

{/* Separating in case more elements need to be kept persistent outside of the navbar in the app header. */}
const Header = () => {
    return(
        <header>
            <Navigation />
        </header>
    )
}

export default Header;