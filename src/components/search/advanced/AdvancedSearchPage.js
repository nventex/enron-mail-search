import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as advancedSearchActions from "../../../actions/advancedSearchActions";
import TextField from "material-ui/TextField";
import { Grid, Row, Col } from "react-flexbox-grid";
import RaisedButton from "material-ui/RaisedButton";

// Container component...

class AdvancedSearchPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            criteria: {
                query: ""
            }
        };

        this.onTextChange = this.onTextChange.bind(this);
        this.onSearchClick = this.onSearchClick.bind(this);
    }

    onTextChange(event) {
        let state = Object.assign({}, this.state);
        state.criteria[event.target.id] = event.target.value;
        this.setState(state);
    }

    onSearchClick() {
        this.props.actions.search(this.state.criteria);
        this.context.router.push(`/advanced/search/1`);
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col>
                        <TextField 
                            id="query"
                            value={this.state.criteria.query}
                            onChange={this.onTextChange}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <RaisedButton
                            label="Search"
                            onClick={this.onSearchClick} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

AdvancedSearchPage.propTypes = {
    actions: React.PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
AdvancedSearchPage.contextTypes = {
    router: React.PropTypes.object
};

// The object returned from the reducer is stored in the state argument and then maps to this.props...
function mapStateToProps(state, ownProps) {
    return {
        // "searches" name must match the reducer in rootReducer...
        searchState: state.advancedSearches
    };
}

// Moves the use of dispatch to this function and centralizes all dispatch calls...
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(advancedSearchActions, dispatch)
    };
}

// https://app.pluralsight.com/player?course=react-redux-react-router-es6&author=cory-house&name=react-redux-react-router-es6-m8&clip=8&mode=live
export default connect(mapStateToProps, mapDispatchToProps)(AdvancedSearchPage);