import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AdvancedResultList from "./AdvancedResultList";
import * as readActions from "../../../actions/readActions";
import * as advancedSearchActions from "../../../actions/advancedSearchActions";
import RefreshIndicator from "material-ui/RefreshIndicator";
import { Grid, Row, Col } from "react-flexbox-grid";

class AdvancedResultsPage extends React.Component {
    constructor(props, context) {
        super(props, context);

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
        this.props.searchActions.search(this.props.location.state).then(response => {
            this.toggleRefreshIndicator("hide");
        });        
    }

    onReadMailClick(id) {
        let readItem = Object.assign({email_id: id}, this.props.searchState.searchCriteria);
        
        this.props.actions.readMail(readItem).then(response => {
            this.context.router.push(`/mail/${id}`);
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
    searchActions: React.PropTypes.object.isRequired,
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
        actions: bindActionCreators(readActions, dispatch),
        searchActions: bindActionCreators(advancedSearchActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdvancedResultsPage);