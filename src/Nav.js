import React from 'react';
import { Link } from 'react-router-dom';


 function Nav(){
    return(
        
            <nav>
                <ul className="nav-links">
                    <Link to="/">
                        <li>Trending</li>
                    </Link>
                    <Link to="/Search">
                        <li>Search</li>
                    </Link>
                    <Link to="/Upload">
                        <li>Upload</li>
                    </Link>
                </ul>
            </nav>
        
        
        
    );
}

export default Nav;