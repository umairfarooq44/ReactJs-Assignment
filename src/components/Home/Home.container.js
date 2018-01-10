import React from 'react';
import PropTypes from 'prop-types'
import {withData} from '../../Redux/withData'
import HomeComponent from './Home.component';

 class HomeContainer extends React.Component {

   constructor(props) {
     super(props);
     this.loadMore = this.loadMore.bind(this)
   }
   
   componentDidMount() {
    if (!this.props.user.data.length) {
      this.props.fetchData(0);
    }
   }

   loadMore() {
      const lastId = this.props.user.data[this.props.user.data.length -1 ].id;
      this.props.fetchData(lastId);
   }

  render() {
    const { user } =this.props
    if (!user.data.length) {
      return <img src="loading.gif" style={ { display: 'block',marginLeft: 'auto',marginRight: 'auto'}} />;
    }
    return <HomeComponent data={user.data} onLoadMore={this.loadMore} isLoading={user.isFetching} />;
  }
}


HomeContainer.propTypes = {
  fetchData: PropTypes.func,
  user: PropTypes.object
}

export default withData(HomeContainer)