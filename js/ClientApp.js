var div = React.DOM.div
var h1 = React.DOM.h1


var MyTitle = React.createClass({
  render: function(){
    return (
      div(null,
        h1({style: {color: this.props.color, fontWeight: 'bold'}}, this.props.title)
      )
    )
  }
})


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
