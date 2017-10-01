import React from 'react'

export default class Notes extends React.Component{
    constructor(props){
        super(props)
        this.state = { notes: ''}
    }

    onChange(event){
        this.setState({notes:event.target.value})
    }
    
     render(){
        
        return (
        <div>
            <form id='notes'>
                <textarea onChange={this.onChange.bind(this)} id='text' form='notes' rows="4" cols="50">
                    Add notes to this project here 
                </textarea>
                <button  type="submit" value="Submit">
                    Add note!
                </button>
            </form>
        </div>    
        )
    }
}