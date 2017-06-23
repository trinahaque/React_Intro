import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './myTitle'

var div = React.DOM.div

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  // createClass is blueprint of new type of component
  render: function () {
    return (
      div(null, [
          // React.createElement(MyTitle, null), MyTitleFactory replaces that
          MyTitleFactory({title: "what is prop?", color: 'rebeccapurple'}),
          MyTitleFactory({title: "prop prop", color: 'peru'}),
          MyTitleFactory({title: "ppppppp", color: 'blue'}),
          MyTitleFactory({title: "ha-ha-ha", color: 'green'})
        ]
      )
    )
  }
})
ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
