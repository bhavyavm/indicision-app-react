class ToggleComponent extends React.Component {
    constructor(props) {
      super(props);
      this.handleVisibility = this.handleVisibility.bind(this);
      this.state = {
        visibility: false
      }
    }
  
    handleVisibility() {
      this.setState((prevState) => {
        return (
          {
            visibility: !prevState.visibility
          }
        )
      })
    }
  
    render() {
      return (
        <div>
          <h3>Toggle Example</h3>
          <button onClick={this.handleVisibility}>{(this.state.visibility) ? 'Hide Details' : 'Show Details'}</button>
          {this.state.visibility && (
            <div>
              <p>You are seeing the hidden things</p>
            </div>)
            }
        </div>
      )
    }
  }
  
  ReactDOM.render(<ToggleComponent />, document.getElementById('app'));