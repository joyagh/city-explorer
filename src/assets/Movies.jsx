import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

export default class Movies extends React.Component {
     constructor(props) {
          super(props);
     }
     
    
  render() {
    return (
     <div>
     <Card>
      <Card.Title>{this.props.title}</Card.Title>
      <img src={this.props.imgUrl} alt={`Poster Image of the movie ${this.props.title}`} />
      <ListGroup>
          <ListGroup.Item>Description: {this.props.overview}</ListGroup.Item>
          <ListGroup.Item>Average Votes: {this.props.average}</ListGroup.Item>
          <ListGroup.Item>Total Votes: {this.props.total}</ListGroup.Item>
          <ListGroup.Item> Popularity: {this.props.popularity}</ListGroup.Item>
          <ListGroup.Item>Release Date: {this.props.release}</ListGroup.Item>
      </ListGroup>
      </Card>
      </div>
    )
}
}