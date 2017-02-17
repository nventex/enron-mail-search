import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { Grid, Row, Col } from "react-flexbox-grid";
import RefreshIndicator from "material-ui/RefreshIndicator";

const SearchForm = ({query, errors, onQueryChange, onSearchClick, indicatorStatus}) => {
    const style = {
        refresh: {
            display: indicatorStatus === "loading" ? "inline-block" : "none",
            position: "relative",
        },
    };

    return (
        <form onSubmit={onSearchClick}>
            <Grid>
                <Row center="lg">
                    <Col>
                        <TextField
                            id="text-field-query"
                            value={query}
                            onChange={onQueryChange} />
                    </Col>
                    <Col>
                        <RaisedButton
                            label="Search"
                            onClick={onSearchClick} />
                    </Col>
                </Row>
                <Row center="lg">
                    <Col>
                        <RefreshIndicator
                            size={40}
                            left={0}
                            top={0}
                            status={indicatorStatus}
                            style={style.refresh} />
                    </Col>
                </Row>
            </Grid>
        </form>
    );
};

SearchForm.propTypes = {
    query: React.PropTypes.string.isRequired,
    errors: React.PropTypes.object.isRequired,
    onQueryChange: React.PropTypes.func.isRequired,
    onSearchClick: React.PropTypes.func.isRequired,
    indicatorStatus: React.PropTypes.string.isRequired
};

export default SearchForm;