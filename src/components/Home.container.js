import React from 'react';
import {Link} from 'react-router-dom';
import { ListGroup, ListGroupItem,Container } from 'reactstrap';
import {withData} from '../Redux/withData'
import HomeComponent from './Home.component';

 class Example extends React.Component {
   constructor(props) {
     super(props);
   }
   componentDidMount() {
    if (!(this.props.data.length>0)) {
      this.props.fetchData()
    }
   }
  render() {console.log('propss in home', this.props.data)
      if (!(this.props.data.length>0)) {
       return( <img src="loading.gif" style={ { display: 'block',marginLeft: 'auto',marginRight: 'auto'}} />);
      }
    return (

      <HomeComponent data={this.props.data} />
    );
  }
}
export default withData(Example)