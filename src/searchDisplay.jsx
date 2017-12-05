import React from 'react'
import Paginator from './paginator.jsx'




export default class SearchView extends React.Component{
    constructor(props){
        super(props)
        this.state={
            index: 0
        }
    }

    selectIndex(index){
        let state = this.state
        state.index = index
        this.setState(state)
    }
    // resultsDisplay will be a 2d array [[...ten items], [...ten items], [...ten items]]
    render(){
        console.log(this.props.resultsDisplay, 'DISPLAY')
    return(
            <div>{
                this.props.resultsDisplay[this.state.index].map((result)=>{
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
                <Paginator pageCount ={ this.props.resultsDisplay.length } selectIndex= {this.selectIndex.bind(this)} />
            </div>
        )
    }




    
} 