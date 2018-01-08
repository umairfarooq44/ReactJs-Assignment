import React from 'react';
import {Link} from 'react-router-dom';
import { ListGroup, ListGroupItem,Container } from 'reactstrap';
import {withId} from '../Redux/withId'

 class Example extends React.Component {
   constructor(props) {
     super(props);
     this.state ={
       loading:true
     };
   }
   componentDidMount() {
     const me = this;
    fetch('https://api.github.com/users?since=70')
    .then(function(response) {
      return response.json();
    })
    .then(function(text) {
      me.setState({loading:false});
      console.log('Request successful', text);
    })
    .catch(function(error) {
      console.log('Request failed', error)
    });
   }
  render() {
      console.log(this.props);
      if (this.state.loading) {
       return( <img src="loading.gif" style={ { display: 'block',marginLeft: 'auto',marginRight: 'auto'}} />);
      }
    return (

        <Container>
      <ListGroup>
        <ListGroupItem tag={Link} to="abc/1">Cras justo odio</ListGroupItem>
        <ListGroupItem tag={Link} to="abc/2">Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem tag={Link} to="abc/3">Morbi leo risus</ListGroupItem>
        <ListGroupItem tag={Link} to="abc/4">Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem tag={Link} to="abc/5">Vestibulum at eros</ListGroupItem>
      </ListGroup>

      </Container>
    );
  }
}
export default withId(Example)