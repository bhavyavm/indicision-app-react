class IndecesionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAllOptions = this.handleRemoveAllOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleAction = this.handleAction.bind(this)
        this.handleRemoveSingle = this.handleRemoveSingle.bind(this);
        this.state = {
            options: props.options
        }
    }
    componentDidMount() {
        try {
            const prevOptions = localStorage.getItem('options');
            const options = JSON.parse(prevOptions);
            if (prevOptions) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            console.log(e)
        }

    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            localStorage.setItem('options', JSON.stringify(this.state.options));
        }
    }
    //life cycle methods ---start
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    handleRemoveAllOptions() {
        this.setState(() => ({ options: [] }));
    }
    handleRemoveSingle(option) {
        this.setState((prevState) => ({
            options: prevState.options.filter((item) => (option != item))
        }));
    }
    //life cycle methods ---end

    handleAddOption(option = '') {
        option = option.trim();
        if (!option) {
            return 'Enter a valid option';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'The option already exists'
        }
        this.setState((prevState) => ({ options: [...prevState.options, option] }));
    }
    handleAction() {
        const random = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[random])
    }

    render() {
        const app = {
            title: 'Indecesion App',
            subtitle: 'App Header here'
        }
        return (
            <div>
                <Header appData={app} />
                <Options
                    options={this.state.options}
                    removeAll={this.handleRemoveAllOptions}
                    handleRemoveSingle={this.handleRemoveSingle}
                />
                <AddOptions addOption={this.handleAddOption} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handleAction={this.handleAction} />
            </div>
        )
    }
}
// setting the default props
IndecesionApp.defaultProps = {
    options: []
}
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.appData.title}</h1>
                {this.props.appData.subtitle && <h3>{this.props.appData.subtitle}</h3>}
            </div>
        );
    }
}
// setting the default props
Header.defaultProps = {
    appData: {
        title: 'Default App',
        subtitle: 'Default Header here'
    }
}
class Action extends React.Component {
    render() {
        return (
            <div>
                <button disabled={!this.props.hasOptions} onClick={this.props.handleAction}>What should i do?</button>
            </div>
        );
    }
}
//state less function ,if we are not using the life cycles
const Options = (props) => {
    return (
        <div>
            <button onClick={props.removeAll} disabled={props.options.length == 0}>Remove All</button>
            <h5>Here are your options</h5>
            {props.options.length == 0 && <p>Please add an option to get started</p>}
            <ol>
                {
                    props.options.map((item, index) => {
                        return (<Option key={index} option={item} handleRemoveSingle={props.handleRemoveSingle} />)
                    })
                }
            </ol>
        </div>
    );
}
class Option extends React.Component {
    render() {
        return (
            <li>{this.props.option}
                <button
                    onClick={(e) => { this.props.handleRemoveSingle(this.props.option) }}>Remove
                </button>
            </li>
        );
    }
}

class AddOptions extends React.Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleFormSubmit(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.addOption(option);
        this.setState(() => { ({ error }) })
        if (!error) {
            e.target.elements.option.value = '';
        }

    }
    render() {
        return (
            <div>
                <h5>Add more options from here</h5>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" name="option" />
                    <button type="submit">Add option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecesionApp options={[]} />, document.getElementById('app'))