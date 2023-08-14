import React, {Component} from 'react';
import { Accordion } from 'react-bootstrap';




export default class Forecast extends Component {
     constructor(props) {
          super(props);
     }
     
    
  render() {
    return (
     <div >
      
     <Accordion >
      <Accordion.Header>Weather on {this.props.date}</Accordion.Header>
      <Accordion.Body> {this.props.description}</Accordion.Body>
      </Accordion>
      
      </div>
    )
}
}