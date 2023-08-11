import React, {Component} from 'react';
import { Card } from 'react-bootstrap';




export default class Forecast extends Component {
     constructor(props) {
          super(props);
     }
     
    
  render() {
    return (
     <div >
      
     <Card>
      <Card.Text>{this.props.date}</Card.Text>
      <Card.Text> {this.props.description}</Card.Text>
      </Card>
      
      </div>
    )
}
}