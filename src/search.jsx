import React from "react"


export default class Searchview extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            authorValue: '',
            titleValue: ''
        };
    }
  
    updateInputValue(event, property){
        this.setState({
            property: event.target.value
        })
    }

    render(){
        return (
        <div>
            <form>
                <input value={this.state.authorValue} onChange= {event => this.updateInputValue(event, this.state['authorValue'])}>
                    Search by author 
                </input>
                <input value={this.state.titleValue} onChange = {event => this.updateInputValue(event, this.state['titleValue'])}>
                    Search by title
                </input>

            </form>
        </div> 
        )
    }
} 


// class MyComponent extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         inputValue: ''
//       };
//     }
  
//     render: function() {
//       return (
//         //...
//         <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
//         //...
//       );
//     },
  
//     updateInputValue: function(evt) {
//       this.setState({
//         inputValue: evt.target.value
//       });
//     }
//   });
  