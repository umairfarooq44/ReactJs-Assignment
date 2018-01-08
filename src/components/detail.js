import React from "react";
import {Link} from 'react-router-dom';
import {withId} from '../Redux/withId'

import { Container,Card,Button, CardTitle, CardText } from 'reactstrap';
 class Header extends React.Component {
     componentDidMount() {
         this.props.updateId(this.props.match.params.id)
     }
    render() {
        const {id} = this.props.match.params;

        return (
            <Container>
                <Card body>
                <CardTitle>Special Title Treatment no .{id}</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Link to="/"><Button>Go Back</Button></Link>
              </Card>
            </Container>
        );
    }
}
export default withId(Header)