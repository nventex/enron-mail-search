import React, { PropTypes } from "react";
import Header from "./common/Header";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {} from "../assets/styles/app.less";
import { Grid, Row, Col } from "react-flexbox-grid";
import FlatButton from "material-ui/FlatButton";
import {Link } from "react-router";

class App extends React.Component {
    render() {

        let secondarySearch = this.props.location.pathname.startsWith("/search");
        let secondaryAdvanced = this.props.location.pathname.startsWith("/advanced/search");

        return (
            <MuiThemeProvider>
                <div>
                    <Header/>
                    <Grid>
                        <Row center="lg">
                            <Col>
                            <FlatButton 
                                label="Search"
                                secondary={secondarySearch}
                                containerElement={<Link to="/search"/>}/>
                            </Col>
                            <Col>
                            <FlatButton 
                                label="Advanced Search"
                                secondary={secondaryAdvanced}
                                containerElement={<Link to="/advanced/search"/>}/>
                            </Col>                    
                        </Row>
                    </Grid>
                    <div style={{marginTop: '25px'}}>
                        {this.props.children}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
};

export default App;