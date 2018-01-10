import React from 'react';
import {Link} from 'react-router-dom';
import { ListGroup, ListGroupItem,Container ,Button } from 'reactstrap';
export default (props) => (
    <Container>
    <ListGroup>
      {
        props.data.map((data) => 
          <ListGroupItem tag={Link} key={`${data.id}${data.login}`} to={`user/${data.login}`}><img src={data.avatar_url} height={50} width={50} /> {data.login}</ListGroupItem>
        )
      }
    </ListGroup>{
      props.isLoading ? ( <img src="loading.gif" height="100" width="100" style={{margin:'3rem',marginLeft:'50%' }} />)
      :(<Button onClick={props.onLoadMore} style={{margin:'3rem',marginLeft:'50%' }}>Load More</Button>)
    }
    </Container>
)