import React from 'react'

export default class SingleView extends React.Component {
        constructor(props){
            super(props)
            this.state = { papers: []}
        }
    
   
     render() {
         console.log(this.props.project, 'project')
         
         let paperDisplay = this.state.papers
       return (
       <div> 
         <div> 
               <p> {this.props.project.name} </p>
         </div>

        <div id='paper-slider'>
            <button onClick = { () => {
               this.props.post('/api/paper', { name: 'example', datePublished:'1997', url: 'www.example.com', 
               abstract: 'blank', projectId: this.props.project.id, reference: 'John Stevenson, 2020'})
                .then((response)=>{
                    console.log(response, 'response')
                    console.log(repsonse.data, 'data')
                        let state = this.state;
                        this.state.papers.push(response.data.info)
                        this.setState(state) 
                    })
                }
            }>
            Test me!
            </button>

            <div>{paperDisplay.map((paper) =>{
                  
                  return (
                    <div onClick={ () => {
                      let state = this.state
                      this.state.paperSelected = paper 
                      this.setState(state)
                      } 
                    }> 
                      {
                        paper.name
                      } 
                    </div>
                  )
              }
            )
          }
          </div>

        
        </div>
    </div>
        )
     }
   
}
