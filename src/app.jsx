var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
import rd3 from 'react-d3';
import home from './home.jsx'
import footer from './footer.jsx'
import nav from './navbar.jsx'
import axios from 'axios'


var Main = React.createClass({

   post: function(route, data = {}){ 
    axios.post(route, data)
      .then((response)=>{
        console.log(response, 'response')
        let state = this.state
        this.setState({})

      })
      .catch((error)=>{
        console.log(error)
      })
  },

render: function() {
    return (
    <div>
      <div>
        <nav/>  
      </div>
      
      <div>
      <h1> Welcome to Research Organizer, where the knowledge you need is always at hand. </h1>
        <ol>
          <ul> <p> To get started, simply click the start project button to add a project </p> </ul>
          <ul> <p> Search and save articles using the archive search api </p> </ul>
          <ul> <p> Collect papers to save to the project folders. </p> </ul>
        </ol>

      <div>
        <button onClick = { () =>{this.post('/', {name:'example2'})}}>
          Test me!
        </button>
      </div>

      <div className='display'> 


      </div>


      </div>
       
      <div>
        <footer/> 
      </div>
   </div>
    );
  }
});

ReactDOM.render(
  <Main />,
  document.getElementById('content')
);


