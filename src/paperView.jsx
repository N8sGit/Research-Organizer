import React from 'react'


export default class paperView extends React.Component{
    constructor(props){
        super(props)
    
    }
     render(){
        return(
            <div>
                <ul>
                <li>{this.props.paper.abstract}</li>
                <li>  <a href={this.props.paper.id}> {this.props.paper.url} </a></li>
                </ul>
            </div>
        )
    }


}