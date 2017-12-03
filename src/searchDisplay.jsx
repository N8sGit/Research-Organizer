import React from 'react'





export default class SearchView extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.resultsDisplay)
    return(
            <div>{
                this.props.resultsDisplay.map((result)=>{
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
        )
    }




    
} 