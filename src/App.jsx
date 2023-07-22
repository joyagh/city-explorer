import React from 'react'
import axios from 'axios'

let mapKey = import.meta.env.VITE_MAP_API_KEY;
console.log(mapKey);

class App extends React.Component{

handleName = async() =>{
  let result = await axios.get(`https://us1.locationiq.com/v1/search?key=${mapKey}&q=smyrna&format=json`);
   console.log(result)

}
render() {
  return (
    <>
    <button onClick={this.handleName}>Explore!</button>
    </>
  )}
}


 export default App;