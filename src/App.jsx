import React from "react";
import axios from "axios";
import { Form, Card } from "react-bootstrap";
import Movies from "./assets/Movies";



const url = import.meta.env.VITE_BACKENDURL || "http://localhost:4001";
const mapKey = import.meta.env.VITE_MAP_API_KEY;
console.log(mapKey)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      lat: "",
      lon: "",
      img: "",
      movieData: [], // https://image.tmdb.org/t/p/w500
      weatherData: [],
    };
  }
componentDidMount(){
  let callBackEnd = async() => {
    console.log()
   
  
  };
  callBackEnd();
}
  handleName = async (event) => {
    event.preventDefault();
    try {
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
        `https://maps.locationiq.com/v3/staticmap?key=${mapKey}&center=${lat},${lon}&zoom=<zoom>&size=<width>x<height>&format=<format>&maptype=<MapType>&markers=icon:<icon>|<latitude>,<longitude>&markers=icon:<icon>|<latitude>,<longitude>`,
        { responseType: "arraybuffer" }
      );
      let binary = "";
      const bytes = new Uint8Array(result.data);
      bytes.forEach((byte) => (binary += String.fromCharCode(byte)));
      const base64String = window.btoa(binary);

      this.setState({
        img: `data:image/png;base64,${base64String}`,
      });
      this.setState({location});
    } catch (error) {
      console.error({
        error: "Unable to geocode",
      });
    }
    try{
      let weatherData = await axios.get(`${url}/weather?lat=${this.state.lat}&lon=${this.state.lon}`)
      console.log(weatherData);
      this.setState({weatherData: weatherData.data});
    } catch(error){
      console.error({
        error: "Unable to retrieve weather data"
      })
    }
    try {
      let movieData = await axios.get(`${url}/movies?cityname=${this.state.cityName}`)
     this.setState({movieData: movieData.data})
 } catch(error) {
      console.error(error.error)
    }
  };
  render() {
    return (
      <>
        <Card className="card">
          <Card.Title>{this.state.location}</Card.Title>
          <Card.Text>{this.state.lat}</Card.Text>
          <Card.Text>{this.state.lon}</Card.Text>
        </Card>
        <div className="movie-card">
        {this.state.movieData.map((movie, index) => (
        <Movies 
        key={index} 
        title={movie.title}
         description={movie.overview}
          avgVotes={movie.average}
           totalVotes={movie.total}
            popularity={movie.popularity}
             release={movie.release} 
              />
         ))}

        </div>
        TODO weather component...
        <img src={this.state.img} alt="Weather"/>
         
        <Form onSubmit={this.handleName}>
          <Form.Label>
            <Form.Control id="city-name" type="text" name="cityName" />
          </Form.Label>
          <button type="submit">Explore!</button>
        </Form>
      </>
    )
  }
}

export default App;
