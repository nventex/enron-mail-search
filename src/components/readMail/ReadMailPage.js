import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as readActions from "../../actions/readActions";
import { Grid, Row, Col } from "react-flexbox-grid";
import dateFormat from "dateformat";
import FlatButton from "material-ui/FlatButton";

class ReadMailPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.onBackClick = this.onBackClick.bind(this);
    }

    componentDidMount() {
        this.readMail();
    }

    onBackClick() {
        this.context.router.goBack();
    }

    readMail() {
        // TODO: toggleRefreshIndicator("loading");
        
        let readData = Object.assign({}, this.props.location.state);
        readData.email_id = this.props.params.id;        

        this.props.actions.readMail(readData).then(response => {
            // TODO: toggleRefreshIndicator("hide");
        });        
    }

    render() {
        return (
            <Grid>
                <Row center="lg">
                    <Col>
                        <FlatButton label="Back" onClick={this.onBackClick}/>
                    </Col>
                </Row>
                <Row>
                    <Col lg={1}>
                        <b>Date:</b>
                    </Col>
                    <Col lg={5}>
                        {dateFormat(this.props.readState._source.date, "mm/dd/yyyy h:M TT")}
                    </Col>
                </Row>
                <Row>
                    <Col lg={1}>
                        <b>From:</b>
                    </Col>
                    <Col lg={5}>
                        {this.props.readState._source.from}
                    </Col>
                </Row>
                <Row>
                    <Col lg={1}>
                        <b>To:</b>
                    </Col>
                    <Col lg={5}>
                        {this.props.readState._source.to}
                    </Col>
                </Row>
                <Row>
                    <Col lg={1}>
                        <b>Subject:</b>
                    </Col>
                    <Col lg={5}>
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
    readState: React.PropTypes.object.isRequired
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