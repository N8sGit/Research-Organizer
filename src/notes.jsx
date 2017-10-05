import React from 'react'

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
                <textarea onChange={this.onChange.bind(this)} id='text' form='notes' rows="4" cols="50">
                    Add notes to this project here 
                </textarea>
                
                <button  type="submit" on onClick={ () =>{
                    this.props.post('/api/project/:project_id', {notes: this.state.notes})
                    .then((response)=>{
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
