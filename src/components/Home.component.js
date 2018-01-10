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
    </ListGroup>
    <Button onClick={props.onLoadMore}>Load More</Button>
    </Container>
)