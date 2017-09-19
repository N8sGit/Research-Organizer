import React from 'react'

export default class SingleView extends React.Component {
    
   
     render() {
         console.log(this.props.project, 'project')
       return (
       <div> 
         <div> 
               <p> {this.props.project.name} </p>
         </div>

        <div id='paper-slider'>
            <button onClick = { () => {
               this.post('/api/paper', {name:'new paper}'})
                .then((response)=>{
                        let state = this.state;
                        state.paper.push(response.data.info)
                        this.setState(state) 
                    })
                }
            }>
            Test me!
            </button>
        
        </div>
    </div>
        )
     }
   
}

