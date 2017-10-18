import React from 'react'
import axios from 'axios'

export default class Notes extends React.Component{
    constructor(props){
        super(props)
        this.state = { notes: []}
    }

    onChange(event){
        this.setState({notes:event.target.value})
    }
    
     render(){
        return (
        <div>
            <form id='notes'>
                <textarea onChange={this.onChange.bind(this)} placeholder='Add notes to project' id='text' form='notes' rows="4" cols="50">
                     
                </textarea>
                
                <button type='button'  onClick={ () =>{
                    console.log('OUTSIDE')
                    
                    axios.put(`/api/project/${this.props.project.id}`, {notes: this.state.notes})
                    .then((response)=>{
                        console.log(Array.isArray(response.data.info), 'isarray')
                        let state = this.state;
                        state.notes.push(...response.data.info)
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
