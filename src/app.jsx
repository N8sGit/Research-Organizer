var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
import rd3 from 'react-d3';
import home from '/home.jsx'


var Main = React.createClass({

  render: function() {
    return (
      <div>
        <h1> Welcome to Research Organizer, where the knowledge you need is always at hand. </h1>
        <ol>
          <ul> <p> To get started, simply click the start project button to add a project </p> </ul>
          <ul> <p> Search and save articles using the archive search api </p> </ul>
          <ul> <p> Collect papers to save to the project folders. </p> </ul>
        </ol>
      </div>
    );
  }
});

ReactDOM.render(
  <Main />,
  document.getElementById('content')
);
