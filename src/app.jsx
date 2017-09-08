var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
import rd3 from 'react-d3';
import home from './home.jsx'
import footer from './footer.jsx'
import nav from './navbar.jsx'
import axios from 'axios'


var Main = React.createClass({

  getInitialState: function() {
    return {projects:[], papers:[]};
  },

  componentDidMount: function(){
    this.get('/api/project')
  },

  get: function(route, data = {}){
    axios.get(route,data)
      .then((response) =>{
        let state = this.state;
        state.projects.push(response.data)
        this.setState(state)
      })
  },

   post: function(route, data = {}){ 
    axios.post(route, data)
      .then((response)=>{
        let state = this.state;
        state.projects.push(response.data.info)
        this.setState(state) 
      })
      .catch((error)=>{
        console.log(error)
      })
  },

   

render: function() {
  
  let projectsDisplay = this.state.projects;
 
  console.log(projectsDisplay)
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
        <button onClick = { () => {this.post('/', {name:'example2'})}}>
          Test me!
        </button>
      </div>

      <div className='mainDisplay'> 
      
      <div>{projectsDisplay.map(function(project){
              return <div> {project.name} </div>
            }
          )
        }
      </div>

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

//
