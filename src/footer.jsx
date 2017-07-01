import React from 'react'

export default class Footer extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className='footer'>
        <p>The premier research organizing engine</p>
        <p><small>Copyright 2017 by Nathan Anecone.</small></p>
      </div>
    )
  }

}
