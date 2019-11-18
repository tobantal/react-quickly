class Content extends React.Component {
  render() {
    let number = 1
    return (
      <div>
        <Button buttonLabel="Start" className="btn btn-info"/>
        <Button className="btn btn-danger"/>
        <Button title={number}/>
        <Button className="btn btn-primary"/>
        <Button email="not-a-valid-email"/>
        <Button email="hi@azat.co"/>
      </div>
    )
  }
}
