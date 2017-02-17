import React, {PropTypes} from "react";
import {Link, IndexLink} from "react-router";
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";

// Stateless ES6 Component
const Header = () => {
    return (
       <AppBar
            title="Enron E-mail Search"
            iconClassNameRight="muidocs-icon-navigation-expand-more">

            <FlatButton 
                label="Home"
                containerElement={<Link to="/"/>}/>

            <FlatButton 
                label="About"
                containerElement={<Link to="/about"/>}/>

            <FlatButton 
                label="Search"
                containerElement={<Link to="/search"/>}/>

        </AppBar>
    );
};

export default Header;