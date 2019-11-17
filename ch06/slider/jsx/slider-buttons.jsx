class SliderButtons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {sliderValue: 0}
    this.handleSlide = this.handleSlide.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSlide(event, ui) {
    this.setState({sliderValue: ui.value})
  }
  handleChange(value) {
    return ()=> {
      $('#slider').slider('value', this.state.sliderValue + value)
      this.setState({sliderValue: this.state.sliderValue + value})
    }
  }
  componentDidMount() {
    $('#slider').on('slide', this.handleSlide)
  }
  componentWillUnmount() {
    $('#slider').off('slide', this.handleSlide)
  }
  render() {
   let lessThan1 = this.state.sliderValue < 1
   let lessMessage = lessThan1 ? "X" :  "1 Less (" + (this.state.sliderValue - 1) + ")"
   let blueStyle = {color: 'blue'}
   let moreThan99 = this.state.sliderValue > 99
   let moreMessage = moreThan99 ? "X" : "1 More (" + (this.state.sliderValue + 1) + ")"

    return <div>
      <button disabled={lessThan1}
        className="btn default-btn"
        onClick={this.handleChange(-1)} 
	style={blueStyle}>
	{lessMessage}
      </button>
      <button disabled={moreThan99}
        className="btn default-btn"
        onClick={this.handleChange(1)} 
	style={blueStyle}>
	{moreMessage}
      </button>
    </div>
  }
}
