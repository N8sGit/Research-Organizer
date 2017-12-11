import React from 'react'
import PaperNote from './paperNote'


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
                <PaperNote paper={this.props.paper}> </PaperNote>
            </div>
        )
    }


}

