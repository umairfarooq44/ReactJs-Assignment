import React from 'react';
import {Link} from 'react-router-dom';
import { ListGroup, ListGroupItem,Container } from 'reactstrap';
import {withData} from '../Redux/withData'

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
    .then(function(data) {
      me.setState({loading:false});
      me.props.updateData(data)
    })
    .catch(function(error) {
      console.log('Request failed', error)
    });
   }
  render() {
      if (this.state.loading) {
       return( <img src="loading.gif" style={ { display: 'block',marginLeft: 'auto',marginRight: 'auto'}} />);
      }
    return (

        <Container>
      <ListGroup>
        {
          this.props.data.map((data) => 
            <ListGroupItem tag={Link} key={`${data.id}${data.login}`} to={`abc/${data.login}`}><img src={data.avatar_url} height={50} width={50} /> {data.login}</ListGroupItem>
          )
        }
      </ListGroup>

      </Container>
    );
  }
}
export default withData(Example)