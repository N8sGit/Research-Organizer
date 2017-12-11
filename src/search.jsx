import React from "react"
import PaperView from './paperView.jsx'
import SearchDisplay from './searchDisplay.jsx'
import axios from 'axios'


export default class Searchview extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            authorValue: 'john smith',
            titleValue: 'computer science',
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

    updatePapers(items){
        let state = this.state
        let alreadySaved = state.papers.some(function(value){
            return value.name === result.title
        })
        if(alreadySaved) return
        state.papers.push(items)
        this.setState(state)
    }

    put(route, data={}){
        return axios.put(route, data)
            .catch((error)=>{
                console.log(error)
            }) 
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
       console.log(paperDisplay)
       let resultsDisplay = this.state.searchResults
       console.log(this.state.searchResults, 'search results')
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
                        {!paper.dropdown? <p className="fa fa-angle-down" aria-hidden="true">{paper.name} </p> : 
                        <p className='fa fa-angle-up' aria-hidden='true'>{paper.name} </p>}
                        
                    </div>
                        <div>{paper.dropdown ? <PaperView paper={this.state.paperSelected}></PaperView> : console.log('')}</div>
                    
                        <form> 
                            <button type='button' onClick= {()=>{
                                console.log(this.props.project.id, 'prjejti id')
                                let i = index
                                paperDisplay.splice(i,1)
                                this.setState(this.state)
                                this.props.updateParentState('-')
                                this.put(`/api/project/remove/${this.props.project.id}`, {paperId: paper.id})
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
                        let state = this.state;
                        if(!state.authorValue && !state.titleValue) return 
                        console.log(response, 'resposnds')
                        if(!response) {
                            state.emptyResponse = 'No results found.'
                            this.setState(state)    
                        }
                        else {
                            
                            state.searchResults = [...response.data.items]}
                            console.log(state.searchResults)
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
                    <p>{this.state.emptyResponse}</p>
                    :
                     <SearchDisplay papers={this.state.papers} updatePapers={this.updatePapers.bind(this)} project={this.props.project} post={this.props.post} 
                     resultsDisplay={this.state.searchResults} updateParentState={this.props.updateParentState} />
                } 
            </div>
        
        </div> 
        )
    }
} 


  

