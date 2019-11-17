class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { accountNumber: '' };
  }
  handleChange(event) {
    console.log('Typed: ', event.target.value);
    let newValue = event.target.value.replace(/[^0-9]/g, '');
    if (newValue === this.state.accountNumber) return;
    console.log("New Value!");
    this.setState({ accountNumber: newValue });
  }
  render() {
    return React.createElement(
      'div',
      null,
      'Account Number:',
      React.createElement('input', {
        type: 'text',
        onChange: this.handleChange,
        placeholder: '123456',
        value: this.state.accountNumber }),
      React.createElement('br', null),
      React.createElement(
        'span',
        null,
        this.state.accountNumber.length > 0 ? 'You entered: ' + this.state.accountNumber : ''
      )
    );
  }
}