import React from 'react'
import axios from 'axios'

export default class Notes extends React.Component{
    constructor(props){
        super(props)
        this.state = { notes:[], note: ''}
    }

    onChange(event){
        this.setState({note:event.target.value})
    }
    
     render(){
        return (
        <div>
            <form id='notes'>
                <textarea onChange={this.onChange.bind(this)} placeholder='Add notes to project' id='text' form='notes' rows="4" cols="50">
                     
                </textarea>
                
                <button type='button'  onClick={ () =>{
                    console.log('OUTSIDE')
                    
                    axios.put(`/api/project/${this.props.project.id}`, {note: this.state.note})
                    .then((response)=>{
                        console.log(response)
                        let state = this.state;
                        console.log(state.note)
                        state.notes.push(state.note)
                        this.setState(state)
                    })
                }}>
                    Add note!
                </button>
            </form>

            <div id='notesScroll'>

            </div>    



        </div>    
        )
    }
}
