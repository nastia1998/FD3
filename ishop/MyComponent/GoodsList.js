let GoodsList = React.createClass({
  displayName: "GoodsList",

  render: function () {
    return React.DOM.div(
      { className: "GoodsListFrame" },
      React.DOM.h1(null, "Hello everyone"),
      React.DOM.div({ className: "GoodsListText" }, "First Project")
    );
  },
});
