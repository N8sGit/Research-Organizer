import React from 'react'

export default class singleView extends React.Component {
    
   
     render() {
         console.log(this.props.projectView, 'project')
       return (
         <div> 
               <p> Hello world </p>
         </div>
       )
     }
   }

