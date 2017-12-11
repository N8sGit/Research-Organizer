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
    render(){
        console.log(this.props.resultsDisplay, 'DISPLAY')
    return(
            <div>{
                this.props.resultsDisplay[this.state.index].map((result)=>{
                    return(
                     <div className ='searchResultCard'>
                        <ul>
                            <p className="fa fa-caret-right" aria-hidden="true"> Title: {result.title} </p>
                            <p className='fa fa-link' aria-hidden='true'>  <a href={result.id}> Link to abstract  </a></p>
                        </ul>
                        <p className="fa fa-file-text-o" aria-hidden="true">{' '+ result.summary}</p> 
                            <form> 
                                <button type='button' onClick= {()=>{
                                    this.props.post('/api/paper', {name: result.title, projectId: this.props.project.id, datePublished: result.published, url: result.id,
                                    abstract: result.summary})
                                    .then((response)=>{
                                        this.props.updatePapers(response.data.info)
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