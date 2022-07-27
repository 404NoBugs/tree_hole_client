import './index.css'
import {Button, Col, FlexboxGrid, Grid, Row} from "rsuite";
import Card from "../Post";
import React from "react";
import axios from "axios";

class CardGroup extends React.Component{

    render() {
        const {posts} = this.props
        console.log(posts)
        return(
            <FlexboxGrid justify="center" className="CardGroup">
                {
                    posts.map((obj)=>{
                        return(
                            <FlexboxGrid.Item key={obj.id} as={Col}  colspan={24} md={6}>
                                <Card {...obj}/>
                            </FlexboxGrid.Item>
                        )
                    })
                }
            </FlexboxGrid>
        )
    }
}
class Content extends React.Component{
    render() {

        return(
            <div >
                <CardGroup {...this.props}/>
            </div>
        )
    }
}


export default Content