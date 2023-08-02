import React from "react";
import axios from "axios";
import { Form, Card } from "react-bootstrap";

let mapKey = import.meta.env.VITE_MAP_API_KEY;
console.log(mapKey);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      lat: "",
      lon: "",
      img: "",

    };
  }

  handleName = async (event) => {
    event.preventDefault();
    try{

      let location = event.target.cityName.value;
      console.log(location, "line 17");
      let result = await axios.get(
        `https://us1.locationiq.com/v1/search?key=${mapKey}&q=${location}&format=json`
        );
        let lat = result.data[0].lat;
        let lon = result.data[0].lon;
        this.setState({
          location,
          lat,
          lon,
        });
        result = await axios.get(
          `https://maps.locationiq.com/v3/staticmap?key=${mapKey}&center=${lat},${lon}&zoom=<zoom>&size=<width>x<height>&format=<format>&maptype=<MapType>&markers=icon:<icon>|<latitude>,<longitude>&markers=icon:<icon>|<latitude>,<longitude>`, {responseType: "arraybuffer"}
          );
          let binary = "";
          const bytes = new Uint8Array(result.data);
          bytes.forEach(byte => binary += String.fromCharCode(byte))
          const base64String = window.btoa(binary)
          
          this.setState({
            img: `data:image/png;base64,${base64String}`,
          });
          console.log(result);
          
        }catch(error){
          console.error({
            "error": "Unable to geocode"
          })
          this.setState({location: "Please type in a location"})
        }
        };
        render() {
          return (
            <>
        <Card>
          <Card.Title>{this.state.location}</Card.Title>
          <Card.Text>{this.state.lat}</Card.Text>
          <Card.Text>{this.state.lon}</Card.Text>
        </Card>
        <img src={this.state.img} />
        {console.log(this.state.img, "line 55")}
        <Form onSubmit={this.handleName}>
          <Form.Label>
            <Form.Control id="city-name" type="text" name="cityName" />
          </Form.Label>
          <button type="submit">Explore!</button>
        </Form>
      </>
    );
  }
}

export default App;
