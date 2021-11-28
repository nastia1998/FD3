let GoodsList = React.createClass({
  displayName: "GoodsList",

  render: function () {
    let goodsList = [];

    this.props.goodsList.forEach((good) => {
      goodsList.push(
        React.DOM.tr(
          { key: good.inventoryNumber },
          React.DOM.td(null, good.name),
          React.DOM.td(null, good.price),
          React.DOM.td(
            null,
            React.DOM.a({ href: good.url, target: "_blank" }, good.url)
          ),
          React.DOM.td(
            null,
            React.DOM.img({
              className: "GoodsListPhoto",
              src: good.photo,
            })
          ),
          React.DOM.td(null, good.quantity)
        )
      );
    });

    return React.DOM.table(
      { className: "GoodsListTable" },
      React.DOM.caption(null, React.DOM.h2(null, this.props.shopName)),
      React.DOM.thead(
        null,
        React.DOM.tr(
          null,
          React.DOM.th(null, "Good name"),
          React.DOM.th(null, "Price"),
          React.DOM.th(null, "Link to the good"),
          React.DOM.th(null, "Photo"),
          React.DOM.th(null, "Quantity")
        )
      ),
      React.DOM.tbody(null, goodsList)
    );
  },
});
