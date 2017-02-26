import React from "react";
import { ListItem } from "material-ui/List";
import Subheader from "material-ui/Subheader";
import Divider from "material-ui/Divider";
import { Grid, Row, Col } from "react-flexbox-grid";

const ResultItem = ({ resultItem, onReadMailClick }) => {
    
    let body = resultItem.highlight.body.join(" ");
    
    return (
        <div>
            <Grid>
                <Row>
                    <Col>
                        <Subheader><b>From:</b> {resultItem._source.from}</Subheader>
                    </Col>
                    <Col>
                        <Subheader><b>To:</b> {resultItem._source.to}</Subheader>
                    </Col>
                </Row>
            </Grid>
            <ListItem
                onClick={() => onReadMailClick(resultItem._id)}
                secondaryText={resultItem._source.subject}
                primaryText={<span dangerouslySetInnerHTML={{__html:body}}/>}
                />
            <Divider/>
        </div>
    );
};

ResultItem.propTypes = {
    resultItem: React.PropTypes.object.isRequired,
    onReadMailClick: React.PropTypes.func.isRequired
};

export default ResultItem;