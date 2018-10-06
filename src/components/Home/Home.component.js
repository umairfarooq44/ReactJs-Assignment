import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem, Container } from 'reactstrap';
import Loading, { Wrapper } from '../Loading';
import { StyledBtn } from './Home.style';


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
          <Wrapper>
            <StyledBtn onClick={onLoadMore}>Load More</StyledBtn>
          </Wrapper>
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