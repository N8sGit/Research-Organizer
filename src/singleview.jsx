import React from 'react'
import Notes from './notes.jsx'
import Search from './search.jsx'

export default class SingleView extends React.Component {
       constructor(props){
          super(props)
       }
       
  render() {
       return (
       <div> 
         <div> 
               <p> {this.props.project.name} </p>
         </div>

        <div id='paper-slider'>
         
          
          
          <div id='notebox'>
            <Notes project ={this.props.project} post = {this.props.post}/>
          </div>


          <div id='search'>
            <Search project={this.props.project} post={this.props.post} get ={this.props.get} />
          </div>
        
        </div>
            <div className='toMain' onClick={()=>{
                    this.props.goToMain()
                }
            }> 
                <p> Return to Projects </p>
            </div>
    </div>
        )
     }
   
}

