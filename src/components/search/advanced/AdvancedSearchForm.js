import React from "react";
import TextField from "material-ui/TextField";
import { Grid, Row, Col } from "react-flexbox-grid";
import RaisedButton from "material-ui/RaisedButton";
import Subheader from "material-ui/Subheader";
import { List, ListItem } from "material-ui/List";
import DatePicker from "material-ui/DatePicker";

const AdvancedSearchForm = ({onTextChange, onSearchClick, criteria, onDateChange}) => {

    let onDateChangeStart = (id, date) => onDateChange("startDate", date);
    let onDateChangeEnd = (id, date) => onDateChange("endDate", date);

    return (
            <Grid>
                <Row center="xs">
                    <Col>
                        <Subheader>Search e-mail body</Subheader>
                        <List>
                            <ListItem>
                                <TextField
                                    id="body_match"
                                    floatingLabelText="All of these words"
                                    value={criteria.body_match}
                                    onChange={onTextChange} />
                            </ListItem>
                            <ListItem>
                                <TextField
                                    id="body_terms"
                                    floatingLabelText="Any of these words"
                                    value={criteria.body_terms}
                                    onChange={onTextChange} />
                            </ListItem>
                            <ListItem>
                                <TextField
                                    id="body_phrase"
                                    floatingLabelText="Phrase"
                                    value={criteria.body_phrase}
                                    onChange={onTextChange} />
                            </ListItem>
                        </List>
                    </Col>
                    <Col>
                        <Subheader>Search e-mail subject</Subheader>
                        <List>
                            <ListItem>
                                <TextField
                                    id="subject_match"
                                    floatingLabelText="All of these words"
                                    value={criteria.subject_match}
                                    onChange={onTextChange} />
                            </ListItem>
                            <ListItem>
                                <TextField
                                    id="subject_terms"
                                    floatingLabelText="Any of these words"
                                    value={criteria.subject_terms}
                                    onChange={onTextChange} />
                            </ListItem>
                            <ListItem>
                                <TextField
                                    id="subject_phrase"
                                    floatingLabelText="Phrase"
                                    value={criteria.subject_phrase}
                                    onChange={onTextChange} />
                            </ListItem>
                        </List>
                    </Col>
                </Row>
                <Row center="xs">
                    <Col>
                        <Subheader>Narrow your search</Subheader>
                    </Col>
                </Row>
                <Row center="xs">
                    <Col>
                        <List>
                            <ListItem>
                                <TextField
                                    id="from_filter"
                                    floatingLabelText="From"
                                    value={criteria.from_filter}
                                    onChange={onTextChange} />
                            </ListItem>
                            <ListItem>
                                <DatePicker 
                                    id="startDate"
                                    hintText="Start Date" 
                                    container="inline" 
                                    onChange={onDateChangeStart}
                                    value={criteria.startDate}/>
                            </ListItem>
                        </List>
                    </Col>
                    <Col>
                        <List>
                            <ListItem>
                                <TextField
                                    id="to_filter"
                                    floatingLabelText="To"
                                    value={criteria.to_filter}
                                    onChange={onTextChange} />
                            </ListItem>
                            <ListItem>
                                <DatePicker 
                                    id="endDate"
                                    hintText="End Date" 
                                    container="inline" 
                                    onChange={onDateChangeEnd}
                                    value={criteria.endDate} />
                            </ListItem>
                        </List>
                    </Col>
                </Row>
                <Row center="xs">
                    <Col>
                        <RaisedButton
                            label="Search"
                            onClick={onSearchClick} />
                    </Col>
                </Row>
            </Grid>
    );
};

AdvancedSearchForm.propTypes = {
    onTextChange: React.PropTypes.func.isRequired,
    onSearchClick: React.PropTypes.func.isRequired,
    onDateChange: React.PropTypes.func.isRequired,
    criteria: React.PropTypes.object.isRequired
};

export default AdvancedSearchForm;