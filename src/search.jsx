import React from "react"


export default class Searchview extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            authorValue: '',
            titleValue: ''
        };
        this.updateInputValue.bind(this)
    }
  
    updateInputValue(event, property){
        let state = this.state
         state[property] = event.target.value
         this.setState(state)
         console.log(state)
    }

    render(){
        console.log(this.state.authorValue, 'why this not showing up')
        console.log(this.state.titleValue)
        return (
        <div>
            <form>
                <input value={this.state.authorValue}  onChange= {event => this.updateInputValue(event, 'authorValue')}>
                    Search by author 
                </input>
                <input value={this.state.titleValue} onChange = {event => this.updateInputValue(event, 'titleValue')}>
                    Search by title
                </input>

                <button onClick = { () => {
               this.props.post('/api/search', {  author:this.state.authorValue, title: this.state.titleValue})
                    .then((response)=>{
                        let state = this.state;
                        this.setState(state)
                        console.log(response, 'response') 
                    })
                }
            }>
                Search!
                </button>
            </form>
        </div> 
        )
    }
} 


  