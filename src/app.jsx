var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
import rd3 from 'react-d3';
import Home from './home.jsx'
import Footer from './footer.jsx'
import Nav from './navbar.jsx'
import SingleView from './singleview.jsx'
import axios from 'axios'


var Main = React.createClass({

  getInitialState: function() {
    return {projects:[], papers:[]};
  },

  getDefaultProps: function() {
      return {
    
      }
    },

  componentDidMount: function(){
    this.get('/api/project').then((response) =>{
      let state = this.state;
      state.projects.push(...response.data.info)
      this.setState(state)
    })
  },

  get: function(route, data = {}){
    return axios.get(route,data)
      .catch((error)=>{
        console.log(error)
      })
  },

   post: function(route, data = {}){ 
    return axios.post(route, data)
      .catch((error)=>{
        console.log(error)
      })
  },

   

render: function() {
  
  let projectsDisplay = this.state.projects;
 
  console.log(projectsDisplay)
  
  if(this.state.projectSelected) {
    return <SingleView project = {this.state.projectSelected} get={this.get} post ={this.post}/>
      
    
  } 
  else {
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
            <button onClick = { () => {
          this.post('/', {name:'example2'})
            .then((response)=>{
              let state = this.state;
              state.projects.push(response.data.info)
              this.setState(state) 
              })
                }
          }>
              Test me!
            </button>
          </div>

          <div className='mainDisplay'> 
          
          <div>{projectsDisplay.map((project) =>{
                  
                  return (
                    <div onClick={ () => {
                      let state = this.state
                      this.state.projectSelected = project 
                      this.setState(state)
                      } 
                    }> 
                      {
                        project.name
                      } 
                    </div>
                  )
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
  }
})

ReactDOM.render(
  <Main />,
  document.getElementById('content')
)

