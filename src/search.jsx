import React from "react"
import PaperView from './paperView.jsx'


export default class Searchview extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            authorValue: '',
            titleValue: '',
            searchResults: [],
            papers: [],
            paperSelected: undefined
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
              this.setState(state)
            })
          }

    render(){
       
       let paperDisplay = this.state.papers
       let resultsDisplay = this.state.searchResults
        return (
        <div>

        <div>{paperDisplay.map((paper) =>{
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
                        if(!response.data.items){state.searchResults.push('Sorry, no results found!')}
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
                this.state.searchResults.length && typeof this.state.searchResults[0] === 'string' && this.state.titleValue && this.state.authorValue ?
                <p>{this.state.searchResults[0]}</p>:
                
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
                                     this.state.papers.push(response.data.info)
                                     this.setState(state)
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


  

