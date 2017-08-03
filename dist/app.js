'use strict';

var _reactD = require('react-d3');

var _reactD2 = _interopRequireDefault(_reactD);

var _home = require('/home.jsx');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');


var Main = React.createClass({
  displayName: 'Main',


  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        ' Welcome to Research Organizer, where the knowledge you need is always at hand. '
      ),
      React.createElement(
        'ol',
        null,
        React.createElement(
          'ul',
          null,
          ' ',
          React.createElement(
            'p',
            null,
            ' To get started, simply click the start project button to add a project '
          ),
          ' '
        ),
        React.createElement(
          'ul',
          null,
          ' ',
          React.createElement(
            'p',
            null,
            ' Search and save articles using the archive search api '
          ),
          ' '
        ),
        React.createElement(
          'ul',
          null,
          ' ',
          React.createElement(
            'p',
            null,
            ' Collect papers to save to the project folders. '
          ),
          ' '
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(Main, null), document.getElementById('content'));