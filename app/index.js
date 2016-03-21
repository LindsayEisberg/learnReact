var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
      render: function() { //every component needs this render method. Specifies the UI. returns JSX
        return (
           <div> Hello World! </div>
         )
        }
      });

    ReactDOM.render( //grab element and render hello world
      < HelloWorld / > ,
      document.getElementById('app')
    );
