import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem, Container, Button } from 'reactstrap';
import Loading from '../Loading'


const HomeComponent = ({data, isLoading, onLoadMore}) => (
  <Container>
    <ListGroup>
      {
          (data || []).map((data) => 
            (
              <ListGroupItem tag={Link} key={`${data.id}${data.login}`} to={`user/${data.login}`}>
                <img src={data.avatar_url} height={50} width={50} alt="avatar" />
                {data.login}
              </ListGroupItem>
          )
          )
      }
    </ListGroup>
    {
        isLoading ? 
          <Loading /> : 
          <Button onClick={onLoadMore} style={{margin:'3rem',marginLeft:'50%' }}>Load More</Button>
      }
  </Container>
);

HomeComponent.defaultProps = {
  isLoading: false,
  onLoadMore: () => {},
  data:[]
}
HomeComponent.propTypes ={
  data: PropTypes.array,
  isLoading:PropTypes.bool,
  onLoadMore:PropTypes.func
}

export default HomeComponent;