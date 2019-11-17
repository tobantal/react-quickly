class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {counter: 0}
  }
  handleClick(event) {
    this.setState({counter: ++this.state.counter})
    console.log("counter = ", this.state.counter)
  }
  render() {
    return (
      <div>
        <button
          onClick={this.handleClick.bind(this)}
          className="btn btn-danger">
          Don't click me {this.state.counter} times!
        </button>
      </div>
    )
  }
}
