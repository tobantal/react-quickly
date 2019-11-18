class Button extends React.Component {
  render() {
    return <button className="btn btn-primary" >{this.props.buttonLabel}</button>
  }
}
Button.defaultProps = {buttonLabel: 'Submit'}
