import React from 'react';
import {Avatar, Row, Col,Card,Tag} from "antd";

import "./Index.css"
import ava from "../../static/avatar.png";
import vscode from "../../static/vscode.jpg"

const {Meta} = Card;

class Index extends React.Component<{},{}>{

    render():JSX.Element{
        return(
            <React.Fragment>
                <div className="Index-banner">
                    <Avatar size={128} src={ava} /><br/>
                    <span className="name">Zewen-Shang</span><br/>
                    <span className="info">
                        <Tag color="magenta">前端</Tag>
                        <Tag color="geekblue">unity</Tag>
                        <Tag color="cyan">graphics</Tag>
                    </span>
                </div>
                <div className="container">
                    <Row>
                        <Col span={8}>
                            <Card 
                            style={{ width: 300}}
                            cover={<img alt="example" src={vscode} />}
                            >
                                <Meta title="VScode C++ 踩坑记录" description="对于launch.json,tasks,json的介绍" />
                            </Card>
                        </Col>
                        <Col span={8}></Col>
                        <Col span={8}>
                            <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                                <p>Card content</p>
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        )
    }
}

export default Index;