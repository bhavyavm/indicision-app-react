class MainComponent extends React.Component {
  render() {
      const counter = 1;
      return (
          <div>
              <CounterComponent counter={counter} />
          </div>
      )
  }
}
//state less component
// const MainComponent = () => {
//     const counter = 0;
//     return (
//         <div>
//             <CounterComponent counter={counter} />
//         </div>
//     )
// }

class CounterComponent extends React.Component {
  constructor(props) {
      super(props);
      this.handleAddcounter = this.handleAddcounter.bind(this);
      this.handleSubtractCounter = this.handleSubtractCounter.bind(this);
      this.handleResetCounter = this.handleResetCounter.bind(this);
      this.state = {
          count: 0
      }
      // this.state = {
      //     count: props.counter
      // }
  }
  componentDidMount() {
      try {
          const stringCount = localStorage.getItem('count');
          const count = parseInt(stringCount, 10);
          if (!isNaN(count)) {
              this.setState(() => ({ count }))
          }
      } catch (e) {

      }
  }
  componentDidUpdate(prevState) {
      if (prevState.count !== this.state.count) {
          localStorage.setItem('count', this.state.count)
      }
      console.log("componentOnUpdate");
  }
  componentWillUnmount() {
      console.log("componentWillUnmount");
  }
  handleAddcounter() {
      this.setState((prevState) => {
          return {
              count: prevState.count + 1
          }
      })
  }
  handleSubtractCounter() {
      this.setState((prevState) => {
          return (
              {
                  count: prevState.count - 1,
              }
          )
      })
  }
  handleResetCounter() {
      this.setState({ count: 0 })
      // this.setState(() => {
      //   return (
      //     {
      //       count: 0
      //     }
      //   )
      // })
  }
  render() {
      return (
          <div>
              <h3>Counter Example App</h3>
              <p>Count value is : {this.state.count}</p>
              <button onClick={this.handleAddcounter}>add +</button>
              <button onClick={this.handleSubtractCounter}>subtract -</button>
              <button onClick={this.handleResetCounter} >reset</button>
          </div>
      )
  }
}
// CounterComponent.defaultProps = {
//     counter: 0
// }

ReactDOM.render(<MainComponent />, document.getElementById('app'));