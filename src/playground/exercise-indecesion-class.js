const appOption = {
  name: 'indecesion',
  title: 'new',
  getProps() {
    return this.title
  }
}
console.log(appOption.getProps());
const getPropFn = appOption.getProps.bind({ title: 'fafafa' });
console.log(getPropFn());


class IndecesionApp extends React.Component {
  render() {
    const app = {
      title: 'Indecesion App',
      subtitle: 'App Header here'
    }
    const options = ['one', 'two', 'three']
    return (
      <div>
        <Header appData={app} />
        <Options options={options} />
        <AddOptions />
        <Action />
      </div>
    )
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.appData.title}</h1>
        <h3>{this.props.appData.subtitle}</h3>
      </div>
    );
  }
}
class Action extends React.Component {
  handleGetRandomOption() {
    const random = Math.random();
    alert(random);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleGetRandomOption}>What should i do?</button>
      </div>
    );
  }
}
class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveOptions=this.handleRemoveOptions.bind(this);
  }
  handleRemoveOptions() {
    console.log(this.props.options);
    //this.props.options = [];
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveOptions}>Remove All</button>
        <h5>Here are your options</h5>
        <ol>
          {
            this.props.options.map((item, index) => <Option key={index} option={item} />)
          }
        </ol>
      </div>
    );
  }
}
class Option extends React.Component {
  render() {
    return <li>{this.props.option}</li>
  }
}

class AddOptions extends React.Component {
  handleFormSubmit(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div>
        <h5>Add more options from here</h5>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="option" />
          <button type="submit">Add option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecesionApp />, document.getElementById('app'))