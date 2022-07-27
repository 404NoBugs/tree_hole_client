import './index.css'
import {Panel} from "rsuite";
import React from "react";

class Card extends React.Component{
    render() {
        return(
            <Panel bordered header={"#"+this.props.id+"洞"} style={{width:"300px",height:"300px"}}>
                <p>{this.props.message}</p>
            </Panel>
        )
    }
}

export default Card