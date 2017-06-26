import React from 'react'



export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props)
  }
  console.log(this.props.name)
  render() {
    return (
      <div className="menu">
        <ul id='navInfo'>
          <li> className='project'><a href=`${this.props.name}`> </a> </li>
          <li className='navList'><a href="default.asp">Home</a></li>
          <li className='navList'><a href="news.asp">News</a></li>
          <li className='navList'><a href="contact.asp">Contact</a></li>
          <li className='navList'><a href="about.asp">About</a></li>
        </ul>
      </div>
    )
  }
}
