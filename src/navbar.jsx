import React from 'react'



export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="menu">
        <ul id='navInfo'>
          <li> className='project'><a> </a> </li>
          <li className='navList'><a >Home</a></li>
          <li className='navList'><a >News</a></li>
          <li className='navList'><a >Contact</a></li>
          <li className='navList'><a >About</a></li>
        </ul>
      </div>
    )
  }
}
