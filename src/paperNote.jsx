import React from 'react'
import axios from 'axios'

export default class Notes extends React.Component{
    constructor(props){
        super(props)
        this.state = {note: this.props.paper.note}
    }

    onChange(event){
        this.setState({note:event.target.value})
    }
     render(){
        return (
        <div>
            <form id='notes'>
                <textarea onChange={this.onChange.bind(this)} placeholder='Add notes to paper' value={this.state.note} id='text' form='note2' rows="5" cols="50">
                    
                </textarea>
                
                <button type='button'  onClick={ () =>{
                    axios.put(`/api/paper/${this.props.paper.id}`, {note: this.state.note})
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