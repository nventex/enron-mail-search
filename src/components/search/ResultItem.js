import React from "react";
import { ListItem } from "material-ui/List";
import Subheader from "material-ui/Subheader";
import Divider from "material-ui/Divider";

const ResultItem = ({ resultItem }) => {
    
    let body = resultItem.highlight.body.join(" ");
    
    return (
        <div>
            <ListItem
                secondaryText={resultItem._source.subject}
                primaryText={<span dangerouslySetInnerHTML={{__html:body}}/>}/>
            <Divider/>
        </div>
    );
};

ResultItem.propTypes = {
    resultItem: React.PropTypes.object.isRequired
};

export default ResultItem;