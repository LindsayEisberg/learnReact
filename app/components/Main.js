//This needs to be in charge of rendering child routes using this.props.children

var React = require('react');

var Main = React.createClass ({
  render: function () {
    return (
      <div className='main-container'>
      {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
