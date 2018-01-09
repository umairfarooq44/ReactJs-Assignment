import React from "react";
import {Link} from 'react-router-dom';

import { Container,Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, Button, Row, Col } from 'reactstrap';
export default ({avatar_url, id, login, html_url}) =>(
    <Container>
               <Card>
                    <CardBody>
                    <CardTitle>User details</CardTitle>
                    </CardBody>
                    <img width="300" height="300" src={avatar_url} alt="Card image cap" />
                    <CardBody>
                        <Row>
                            <Col md={2}>
                            id:
                            </Col>
                            <Col >
                            {id}
                            </Col>
                        </Row>
                        <Row>
                            <Col md={2}>
                            Login:
                            </Col>
                            <Col >
                            {login}
                            </Col>
                        </Row>
                        <Row>
                            <Col md={2}>
                            html Url:
                            </Col>
                            <Col >
                            <a href={html_url}>{html_url}</a>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <Link to="/"><Button>Go Back</Button></Link>
            </Container>
)