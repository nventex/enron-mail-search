import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AdvancedResultList from "./AdvancedResultList";
import * as readActions from "../../../actions/readActions";

class AdvancedResultsPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            pageNumber: 1
        };

        this.onReadMailClick = this.onReadMailClick.bind(this);
    }

    onReadMailClick(id) {
        let readItem = Object.assign({email_id: id}, this.props.searchState.searchCriteria);
        
        this.props.actions.readMail(readItem).then(response => {
            this.context.router.push(`/mail/${id}`);    
        });
    }

    render() {
        return (
            <div>
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
    actions: React.PropTypes.object.isRequired
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
        actions: bindActionCreators(readActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdvancedResultsPage);