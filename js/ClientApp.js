var div = React.DOM.div
var h1 = React.DOM.h1


var MyTitle = React.createClass({
  render: function(){
    return (
      div(null,
        h1(null, "Check out this component")
      )
    )
  }
})

var MyFirstComponent = React.createClass({
  // createClass is blueprint of new type of component
  render: function () {
    return (

      div(null, [
          React.createElement(MyTitle),
          React.createElement(MyTitle),
          React.createElement(MyTitle),
          React.createElement(MyTitle)
        ]
      )
    )
  }
})
ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
