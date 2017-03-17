import React from "react";
import ReactPaginate from "react-paginate";
import { Grid, Row, Col } from "react-flexbox-grid";
import ResultItem from "./ResultItem";
import Subheader from "material-ui/Subheader";

const ResultList = ({results, onPaginateClick, pageNumber, totalCount, onReadMailClick}) => {

    let resultRows = results.map(resultItem => (
        <ResultItem 
            onReadMailClick={onReadMailClick}
            resultItem={resultItem} 
            key={resultItem._id} />
    ));

    let pageCount = Math.ceil(totalCount / 15);

    let hasResults = totalCount === 0 ? "none" : "flex";

    return (
        <Grid>
            <Row center="lg" style={{ display: hasResults }} id="count-header">
                <Col>
                    <Subheader>{totalCount} hits</Subheader>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>{resultRows}</div>
                </Col>
            </Row>
            <Row center="lg" style={{ display: hasResults }}>
                <Col lg={3} />
                <Col lg={6}>
                    <ReactPaginate
                        id="paginate-controls"
                        previousLabel={"<"}
                        nextLabel={">"}
                        breakLabel={".."}
                        forcePage={pageNumber - 1}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={onPaginateClick}
                        containerClassName={"pagination"}
                        activeClassName={"active"} />
                </Col>
                <Col lg={3} />
            </Row>
        </Grid>
    );
};

ResultList.propTypes = {
    results: React.PropTypes.array.isRequired,
    onPaginateClick: React.PropTypes.func.isRequired,
    onReadMailClick: React.PropTypes.func.isRequired,
    pageNumber: React.PropTypes.number.isRequired,
    totalCount: React.PropTypes.number.isRequired
};

export default ResultList;