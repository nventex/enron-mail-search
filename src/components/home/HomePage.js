import React from "react";
import Slider from "material-ui/Slider";
import { Grid, Row, Col } from "react-flexbox-grid";
import * as timeline from "./EnronTimeline";

// Container component...

class HomePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = timeline.enronEvents[0];

        this.onSliderChange = this.onSliderChange.bind(this);
    }

    onSliderChange(event, newValue) {
        this.setState(timeline.enronEvents[newValue]);
    }

    render() {
        return (
            <div>
            <Grid>
                <Row center="lg">
                    <Col lg={12}>
                        {this.state.date}<br/>
                        {this.state.text}
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                          <Slider 
                            onChange={this.onSliderChange}
                            step={1} 
                            max={30}
                            value={0} />
                    </Col>
                </Row>
                <Row center="lg">
                    <Col lg={12}>
                        <img src={require('../../assets/images/EnronMagnified.png')}/>
                    </Col>
                </Row>
            </Grid>
                <div className="footer">
                    <span className="footer-text">
                        E-mail data set provided by <a href="https://www.cs.cmu.edu/~./enron/">Carnegie Mellon University</a>.
                    </span>
                    <br/>
                    <br/>
                    <span className="copyright-text">
                        Copyright © 2017 Enron Email Search
                    </span>
                </div>
            </div>
        );
    }
}

export default HomePage;