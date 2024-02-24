// import React from 'react';
import propTypes from 'prop-types'
// import NavBar from './NavBar';
const UserLayout = ({children}) => {
    return (
        <div>
            {/* <header>
                <NavBar/>
            </header> */}
            <main>
                {children}
            </main>
            <footer>
                
            </footer>
        </div>
    );
}

UserLayout.propTypes = {
    children : propTypes.node.isRequired
}

export default UserLayout;