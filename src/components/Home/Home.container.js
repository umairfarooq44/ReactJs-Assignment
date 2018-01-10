import React from 'react';
import {Link} from 'react-router-dom';
import { ListGroup, ListGroupItem,Container } from 'reactstrap';
import {withData} from '../../Redux/withData'
import HomeComponent from './Home.component';

 class Example extends React.Component {
   constructor(props) {
     super(props);
     this.loadMore = this.loadMore.bind(this)
   }
   componentDidMount() {
    if (!(this.props.user.data.length>0)) {
      this.props.fetchData(0)
    }
   }
   loadMore() {
     const lastId = this.props.user.data[this.props.user.data.length -1 ].id;
    this.props.fetchData(lastId)
   }
  render() {
    const {user} =this.props
      if (!(user.data.length>0)) {
       return( <img src="loading.gif" style={ { display: 'block',marginLeft: 'auto',marginRight: 'auto'}} />);
      }
    return (

      <HomeComponent data={user.data} onLoadMore={this.loadMore} isLoading={user.isFetching} />
    );
  }
}
export default withData(Example)