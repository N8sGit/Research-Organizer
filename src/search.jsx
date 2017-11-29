import React from "react"
import PaperView from './paperView.jsx'
import axios from 'axios'


export default class Searchview extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            authorValue: '',
            titleValue: '',
            searchResults: [],
            papers: [],
            paperSelected: undefined,
            emptyResponse: ''
        };
        this.updateInputValue.bind(this)
    }
  
    updateInputValue(event, property){
        let state = this.state
         state[property] = event.target.value
         this.setState(state)
    }


    componentDidMount(){
            this.props.get(`/api/paper/${this.props.project.id}`).then((response) =>{
                console.log(response, 'response')
              let state = this.state;
              state.papers.push(...response.data.info)
              this.props.setCount(state.papers.length)
              this.setState(state)
            })
          }

    componentWillUnmount(){
        this.props.setCount(this.state.papers.length)
    }

    render(){
       
       let paperDisplay = this.state.papers
       let resultsDisplay = this.state.searchResults
        return (
        <div>

        <div>{paperDisplay.map((paper, index) =>{
                  return (
                <div>
                    <div onClick={ () => {
                      let state = this.state
                      state.paperSelected = paper
                      paper.dropdown = !paper.dropdown
                      this.setState(state)
                      } 
                    }> 
                        {paper.name}
                        
                    </div>
                        <div>{paper.dropdown ? <PaperView paper={this.state.paperSelected}></PaperView> : console.log('')}</div>
                    
                        <form> 
                            <button type='button' onClick= {()=>{
                                let i = index
                                paperDisplay.splice(i,1)
                                this.setState(this.state)
                                this.props.updateParentState('-')
                            }
                        }> 
                                Remove
                            </button>
                        </form>   
                </div>
                  )
              }
            )
          }
          <p>Saved Papers</p>
          </div>
           
            
            <form>
                <input value={this.state.authorValue}  onChange= {event => this.updateInputValue(event, 'authorValue')}>
                    Search by author 
                </input>
                <input value={this.state.titleValue} onChange = {event => this.updateInputValue(event, 'titleValue')}>
                    Search by title
                </input>

                <button type='button' onClick = { () => {
               this.props.post('/api/search', {  author:this.state.authorValue, title: this.state.titleValue})
                    .then((response)=>{
                        if(!this.state.authorValue && !this.state.titleValue) return 
                        let state = this.state;
                        console.log(response, 'resposnds')
                        if(!response) state.emptyResponse = 'No results found.' 
                        else state.searchResults = [...response.data.items]
                        this.setState(state)
                    })
                }
            }>
                Search!
                </button>
            </form>

            <form>
                <button type='button' onClick ={() =>{
                        let state = this.state
                        state.searchResults = []
                        this.setState(state)
                    }
                }> 
                Clear Results
                </button>
            </form>

            <div id='resultsDisplay'>
               {
                !this.state.searchResults.length && this.state.titleValue && this.state.authorValue ?
                <p>{this.state.emptyResponse}</p>:
                
                resultsDisplay.map((result)=>{
                    return(
                     <div class ='searchResultCard'>
                        <ul>
                            <li> Title: {result.title} </li>
                            <li>  <a href={result.id}> Link to abstract  </a></li>
                        </ul>
                        <p>{result.summary}</p> 
                        <form> 
                            <button type='button' onClick= {()=>{
                                this.props.post('/api/paper', {name: result.title, projectId: this.props.project.id, datePublished: result.published, url: result.id,
                                 abstract: result.summary})
                                 .then((response)=>{
                                    let state = this.state
                                    let alreadySaved = state.papers.some(function(value){
                                         return value.name === result.title
                                        })
                                    if(alreadySaved) return
                                    state.papers.push(response.data.info)
                                    this.setState(state)
                                    this.props.updateParentState('+')
                                })
                             }
                            }> 

                                    
                                Save
                            </button>
                        </form>   
                    </div>
                    )
                })

               } 
            
            </div>
        
        </div> 
        )
    }
} 


  

