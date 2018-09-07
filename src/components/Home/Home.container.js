import React from 'react';
import PropTypes from 'prop-types'
import { withData } from '../../redux/withData'
import HomeComponent from './Home.component';

 class HomeContainer extends React.Component {

   constructor(props) {
     super(props);
     this.loadMore = this.loadMore.bind(this)
   }
   
   componentDidMount() {
    const {user, fetchData} = this.props;
    if (!user.data.length) {
      fetchData(0);
    }
   }

   loadMore() {
     const {user, fetchData} = this.props;
      const lastId = user.data[user.data.length -1 ].id;
      fetchData(lastId);
   }

  render() {
    const { user } =this.props
    if (!user.data.length) {
      return <img src="loading.gif" alt="loading" style={{ display: 'block',marginLeft: 'auto',marginRight: 'auto'}} />;
    }
    return <HomeComponent data={user.data} onLoadMore={this.loadMore} isLoading={user.isFetching} />;
  }
}
HomeContainer.defaultProps = {
  fetchData: () => {},
  user: {}
}

HomeContainer.propTypes = {
  fetchData: PropTypes.func,
  user: PropTypes.object
}

export default withData(HomeContainer)