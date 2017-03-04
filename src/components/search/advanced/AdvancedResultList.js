import React from "react";
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from "material-ui/Table";
import dateFormat from "dateformat";
import { Link } from "react-router";
import IconButton from "material-ui/IconButton";
import EmailIcon from "material-ui/svg-icons/communication/email";

const AdvancedResultList = ({hits, onReadMailClick}) => {

    let results = hits.hits;

    return (
        <Table
            height={"600px"}
            selectable={false}>
            <TableHeader>
                <TableRow>
                    <TableHeaderColumn colSpan="4" tooltip="Total Records" style={{ textAlign: "center" }}>
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
                        <IconButton tooltip="SVG Icon" onClick={() => onReadMailClick(row._id)}>
                            <EmailIcon />
                        </IconButton>                     
                        {row._source.subject}
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