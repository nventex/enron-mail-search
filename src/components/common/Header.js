import React, {PropTypes} from "react";
import AppBar from "material-ui/AppBar";

function handleTouchTap() {
    window.location.href = "/";
}

// Stateless ES6 Component
const Header = () => {

    const styles = {
        title: {
            cursor: 'pointer'
        }
    };

    return (
       <AppBar
            title={<span style={styles.title}>Enron E-mail Search</span>}
            showMenuIconButton={false}
            onTitleTouchTap={handleTouchTap}
            iconClassNameRight="muidocs-icon-navigation-expand-more"/>
    );
};

export default Header;