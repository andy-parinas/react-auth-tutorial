import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Header extends Component{

    render(){

        return(
            <div>
                <Link to="/"> Auth Redux </Link>
                <Link to="/signup"> Sign Up </Link>
                <Link to="/signin"> Sign In </Link>
                <Link to="/signout"> Sign out </Link>
                <Link to="/feature"> Feature </Link>
            </div>
        )
    }

}

export default Header;