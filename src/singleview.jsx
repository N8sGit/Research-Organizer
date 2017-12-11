import React from 'react'
import Notes from './notes.jsx'
import Search from './search.jsx'

export default class SingleView extends React.Component {
       constructor(props){
          super(props)
          this.state = {
            paperCount: 0,
            authorCount:0
          }
       }
       updateCount(direction){
        let state = this.state  
        if(direction ==='+') state.paperCount++
        if(direction ==='-') state.paperCount--
        this.setState(state)
       }

       setCount(num){
          let state = this.state
          state.paperCount = num
          this.setState(state)
       }

       
  render() {
       return (
       <div> 
         <div> 
               <p> {this.props.project.name} </p>
               <p> {this.state.paperCount + ' projects saved'}</p>
         </div>

        <div id='paper-slider'>
         
          
          
          <div id='notebox'>
            <Notes project ={this.props.project}/>
          </div>


          <div id='search'>
            <Search project={this.props.project} setCount ={this.setCount.bind(this)} updateParentState={this.updateCount.bind(this)} 
            post={this.props.post} get ={this.props.get} />
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

