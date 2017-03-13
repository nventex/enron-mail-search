import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AdvancedResultList from "./AdvancedResultList";
import * as advancedSearchActions from "../../../actions/advancedSearchActions";
import RefreshIndicator from "material-ui/RefreshIndicator";
import { Grid, Row, Col } from "react-flexbox-grid";

class AdvancedResultsPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = Object.assign({}, props.searchState);

        this.onReadMailClick = this.onReadMailClick.bind(this);
    }

    componentDidMount() {
        this.search();
    }

    search() {
        if (!this.props.location.state) {
            this.context.router.push("/advanced/search");
        }
        
        this.toggleRefreshIndicator("loading");
        this.props.actions.search(this.props.location.state).then(response => {
            this.toggleRefreshIndicator("hide");
        });
    }

    toggleRefreshIndicator(status) {
        let state = Object.assign({}, this.state);
        state.indicatorStatus = status;
        this.setState(state);
    }

    onReadMailClick(id) {
        let pushData = {
            pathname: `/mail/${id}`,
            state: this.props.searchState.criteria
        };

        this.context.router.push(pushData);
    }

    render() {
        const style = {
            refresh: {
                display: this.state.indicatorStatus === "loading" ? "inline-block" : "none",
                position: "relative",
            },
        };
        
        return (
            <div>
                <Grid>
                    <Row center="lg">
                        <Col>
                            <RefreshIndicator
                                size={40}
                                left={0}
                                top={0}
                                status={this.state.indicatorStatus}
                                style={style.refresh} />
                        </Col>
                    </Row>
                </Grid>
                <AdvancedResultList
                    hits={this.props.searchState.hits}
                    onReadMailClick={this.onReadMailClick}
                />                
            </div>
        );
    }
}

AdvancedResultsPage.propTypes =  {
    searchState: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired,
    location: React.PropTypes.object.isRequired
};

AdvancedResultsPage.contextTypes = {
    router: React.PropTypes.object
};

function mapStateToProps(state, ownProps) {
    return {
        searchState: state.advancedSearches
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(advancedSearchActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdvancedResultsPage);