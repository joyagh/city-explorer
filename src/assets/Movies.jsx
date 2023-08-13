import React, {Component} from 'react';
import { Card, ListGroup} from 'react-bootstrap';

export default class Movies extends Component {
     constructor(props) {
          super(props);
     }
     
    
  render() {
    

    return (
     <div className="movie-card">
      
     <Card >
      <Card.Img src={this.props.imgURL} />
      <Card.Body>
      <Card.Title>{this.props.title}</Card.Title>
      <Card.Text>Description: {this.props.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group">
        <ListGroup.Item>Rating: {this.props.avgVotes}</ListGroup.Item>
        <ListGroup.Item>Vote Count: {this.props.totalVotes}</ListGroup.Item>
        <ListGroup.Item>Popularity: {this.props.popularity}</ListGroup.Item>
        <ListGroup.Item>Release Date: {this.props.release}</ListGroup.Item>
      </ListGroup>
     </Card>
      
      </div>
    )
}
}
// alt={`Poster Image of the movie ${this.props.title}`}