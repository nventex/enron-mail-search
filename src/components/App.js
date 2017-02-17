import React, { PropTypes } from "react";
import Header from "./common/Header";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {} from "../assets/styles/app.less";
import { Grid, Row, Col } from "react-flexbox-grid";

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Header/>
                    <Grid style={{marginTop: '10px'}}>
                        <Row>
                            <Col>
                                {this.props.children}
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </MuiThemeProvider>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;