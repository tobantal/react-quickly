class Content extends React.Component {
  render() {
    let number = 1;
    return React.createElement(
      "div",
      null,
      React.createElement(Button, { buttonLabel: "Start", className: "btn btn-info" }),
      React.createElement(Button, { className: "btn btn-danger" }),
      React.createElement(Button, { title: number }),
      React.createElement(Button, { className: "btn btn-primary" }),
      React.createElement(Button, { email: "not-a-valid-email" }),
      React.createElement(Button, { email: "hi@azat.co" })
    );
  }
}