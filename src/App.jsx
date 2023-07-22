import React from 'react'
import Axios from 'axios'

class App extends React

handleName = async() => {
  let result = await axios.get("https://us1.locationiq.com/v1/search.php");
   console.log(result)

}
render() {
  return (
    <>
    <button onClick={this.handleName}>Explore!</button>
    </>
  )
}

 export default App;