import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as readActions from "../../actions/readActions";
import { Grid, Row, Col } from "react-flexbox-grid";
import dateFormat from "dateformat";
import FlatButton from "material-ui/FlatButton";
import RefreshIndicator from "material-ui/RefreshIndicator";

class ReadMailPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = Object.assign({}, props.readState);

        this.onBackClick = this.onBackClick.bind(this);
    }

    componentDidMount() {
        this.readMail();
    }

    onBackClick() {
        this.context.router.goBack();
    }

    readMail() {
        this.toggleRefreshIndicator("loading");
        
        let readData = Object.assign({email_id: this.props.params.id}, this.props.location.state);

        this.props.actions.readMail(readData).then(response => {
            this.toggleRefreshIndicator("hide");
        });
    }

    toggleRefreshIndicator(status) {
        let state = Object.assign({}, this.state);
        state.indicatorStatus = status;
        this.setState(state);
    }

    render() {
        const style = {
            refresh: {
                display: this.state.indicatorStatus === "loading" ? "inline-block" : "none",
                position: "relative",
            },
        };
        
        return (
            <Grid>
                <Row center="xs">
                    <Col>
                        <FlatButton label="Back" onClick={this.onBackClick}/>
                    </Col>
                </Row>
                <Row center="xs">
                    <Col>
                        <RefreshIndicator
                            size={40}
                            left={0}
                            top={0}
                            status={this.state.indicatorStatus}
                            style={style.refresh} />
                    </Col>
                </Row>                
                <Row>
                    <Col xs={1}>
                        <b>Date:</b>
                    </Col>
                    <Col xs={5}>
                        {dateFormat(this.props.readState._source.date, "mm/dd/yyyy h:M TT")}
                    </Col>
                </Row>
                <Row>
                    <Col xs={1}>
                        <b>From:</b>
                    </Col>
                    <Col xs={5}>
                        {this.props.readState._source.from}
                    </Col>
                </Row>
                <Row>
                    <Col xs={1}>
                        <b>To:</b>
                    </Col>
                    <Col xs={5}>
                        {this.props.readState._source.to}
                    </Col>
                </Row>
                <Row>
                    <Col xs={1}>
                        <b>Subject:</b>
                    </Col>
                    <Col xs={5}>
                        {this.props.readState._source.subject}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br/>
                        {this.props.readState._source.body}
                    </Col>
                </Row>                
            </Grid>
        );
    }
}

ReadMailPage.propTypes = {
    actions: React.PropTypes.object.isRequired,
    params: React.PropTypes.object.isRequired,
    readState: React.PropTypes.object.isRequired,
    location: React.PropTypes.object.isRequired
};

ReadMailPage.contextTypes = {
    router: React.PropTypes.object
};

// The object returned from the reducer is stored in the state argument and then maps to this.props...
function mapStateToProps(state, ownProps) {
    return {
        readState: state.readMail
    };
}

// Moves the use of dispatch to this function and centralizes all dispatch calls...
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(readActions, dispatch)
    };
}

// https://app.pluralsight.com/player?course=react-redux-react-router-es6&author=cory-house&name=react-redux-react-router-es6-m8&clip=8&mode=live
export default connect(mapStateToProps, mapDispatchToProps)(ReadMailPage);