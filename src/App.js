import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    //ini state
    this.state = { vehicleData: null};
  }

  //lifecycle for data load
  componentDidMount(){
    Axios.get("http://localhost:3001/vehicles")
      .then(res => {
        console.log(res.data);
        this.setState({vehicleData: res.data});
      })
      .catch(err => console.log(err));
  }
    render() {
      return (
        <div className = "App">

        </div>
      )
    }
}

export default App;
