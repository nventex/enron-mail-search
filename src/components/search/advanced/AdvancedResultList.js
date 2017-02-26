import React from "react";
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from "material-ui/Table";
import dateFormat from "dateformat";
import { Link } from "react-router";

const AdvancedResultList = ({hits, onReadMailClick}) => {

    let results = hits.hits;

    return (
        <Table
            height={"600px"}
            selectable={false}>
            <TableHeader>
                <TableRow>
                    <TableHeaderColumn colSpan="1" tooltip="Advanced Search">
                        <Link style={{fontSize: "11px", marginLeft: "7px"}} to={"/advanced/search"}>Advanced Search</Link>
                    </TableHeaderColumn>
                    <TableHeaderColumn colSpan="3" tooltip="Total Records" style={{ textAlign: "center" }}>
                        {hits.total} hits
                    </TableHeaderColumn>
                </TableRow>
                <TableRow>
                    <TableHeaderColumn tooltip="Subject">Subject</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Date">Date</TableHeaderColumn>
                    <TableHeaderColumn tooltip="From">From</TableHeaderColumn>
                    <TableHeaderColumn tooltip="To">To</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody
                displayRowCheckbox={false}>
                {results.map((row) => (
                <TableRow key={row._id}>
                    <TableRowColumn>
                        <span style={{cursor:"pointer"}} onClick={() => onReadMailClick(row._id)}>{row._source.subject}</span>
                    </TableRowColumn>
                    <TableRowColumn>{dateFormat(row._source.date, "mm/dd/yyyy h:M TT")}</TableRowColumn>
                    <TableRowColumn>{row._source.from}</TableRowColumn>
                    <TableRowColumn>{row._source.to}</TableRowColumn>
                </TableRow>
                ))}
            </TableBody>

        </Table>
    );
};

AdvancedResultList.propTypes =  {
    hits: React.PropTypes.object.isRequired,
    onReadMailClick: React.PropTypes.func.isRequired
};

export default AdvancedResultList;