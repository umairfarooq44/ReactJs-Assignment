import React from "react";
import {Link} from 'react-router-dom';
import {withData} from '../Redux/withData'

import { Container,Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, Button, Row, Col } from 'reactstrap';
 class Header extends React.Component {
     constructor(props) {
         super(props);
        
         console.log('in real constructo',props,this.props)

        const {login} = this.props.match.params;
        const data = this.props.data.filter(data => data.login == login);
         this.state = {data: data.length>0?data[0]:''};
     }
     componentDidMount() {debugger;
       if(this.state.data === '') {
        const me = this;
        const {login} = this.props.match.params;
        fetch(`https://api.github.com/users/${login}`)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          me.setState({data});
        })
        .catch(function(error) {
          console.log('Request failed', error)
        });
       }
     }
    render() {
        console.log('stateeeeeeeee', this.state);
        const {login} = this.props.match.params;
        const abc = this.state;
        if(this.state.data === ''){
            return( <img src="../loading.gif" style={ { display: 'block',marginLeft: 'auto',marginRight: 'auto'}} />);
        }
        return (
            <Container>
               <Card>
                    <CardBody>
                    <CardTitle>User details</CardTitle>
                    </CardBody>
                    <img width="300" height="300" src={this.state.data.avatar_url} alt="Card image cap" />
                    <CardBody>
                        <Row>
                            <Col md={2}>
                            id:
                            </Col>
                            <Col >
                            {this.state.data.id}
                            </Col>
                        </Row>
                        <Row>
                            <Col md={2}>
                            Login:
                            </Col>
                            <Col >
                            {this.state.data.login}
                            </Col>
                        </Row>
                        <Row>
                            <Col md={2}>
                            html Url:
                            </Col>
                            <Col >
                            <a href={this.state.data.html_url}>{this.state.data.html_url}</a>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <Link to="/"><Button>Go Back</Button></Link>
            </Container>
        );
    }
}
export default withData(Header)