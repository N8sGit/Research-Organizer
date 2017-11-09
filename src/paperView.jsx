import React from 'react'


export default class paperView extends React.Component{
    constructor(props){
        super(props)
    }



    render(){
        return(
            <div>
                <ul>
                <li>{this.props.paper.summary}</li>
                <li>  <a href={this.props.paper.id}> URL:{this.props.paper.id} </a></li>
                </ul>
            </div>
        )
    }


}