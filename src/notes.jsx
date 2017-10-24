import React from 'react'
import axios from 'axios'

export default class Notes extends React.Component{
    constructor(props){
        super(props)
        this.state = {note: this.props.project.note}
    }

    onChange(event){
        this.setState({note:event.target.value})
    }
     render(){
        return (
        <div>
            <form id='notes'>
                <textarea onChange={this.onChange.bind(this)} placeholder='Add notes to project' value={this.props.project.note} id='text' form='notes' rows="5" cols="50">
                    
                </textarea>
                
                <button type='button'  onClick={ () =>{
                    axios.put(`/api/project/${this.props.project.id}`, {note: this.state.note})
                    .then((response)=>{
                        let state = this.state;
                        this.setState(state)
                    })
                }}>
                    Add note!
                </button>
            </form>

         </div>    
        )
    }
}
