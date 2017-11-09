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
    return {projects:[], papers:[], inputValue:''};
  },

  componentDidMount: function(){
    this.get('/api/project').then((response) =>{
      let state = this.state;
      state.projects.push(...response.data.info)
      this.setState(state)
    })
  },

  componentWillMount: function(){
    this.goToMain = this.goToMain.bind(this);
  },

  goToMain : function(){
    let state = this.state;
    this.state.projectSelected = null
    this.setState(state)
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

  updateInputValue: function(event){
    this.setState({
      inputValue: event.target.value
    })
  },
   

render: function() {
  
  let projectsDisplay = this.state.projects;
 
  if(this.state.projectSelected) {
      return <SingleView project = {this.state.projectSelected} get={this.get} post ={this.post} goToMain = {this.goToMain}/>
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
            <form>
            <input value={this.state.inputValue} placeholder='name for project' onChange={event => this.updateInputValue(event)}>

            </input>

            <button onClick = { () => {
          this.post('/', {name: this.state.inputValue})
            .then((response)=>{
              let state = this.state;
              state.projects.push(response.data.info)
              this.setState(state) 
              })
                }
          }>
              Create Project
            </button>
            
            </form>
          </div>

          <div className='mainDisplay'> 
          
            <div>{
                projectsDisplay.map((project) =>{
                  
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
              })
            }
            </div>
          </div>
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

