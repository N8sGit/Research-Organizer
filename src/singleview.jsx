import React from 'react'
import Notes from './notes.jsx'
import Search from './search.jsx'

export default class SingleView extends React.Component {
        constructor(props){
            super(props)
            this.state = { papers: []}
        }

        componentDidMount(){
            this.props.get('/api/paper').then((response) =>{
              let state = this.state;
              state.papers.push(...response.data.info)
              this.setState(state)
            })
          }


    
   
     render() {
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
                    console.log(response.data, 'data')
                        let state = this.state;
                        this.state.papers.push(response.data.info)
                        this.setState(state) 
                    })
                    console.log(this.state.papers, 'papers')
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
          
          <div id='notebox'>
            <Notes project ={this.props.project} post = {this.props.post}/>
          </div>


          <div id='search'>
            <Search post={this.props.post} />
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

