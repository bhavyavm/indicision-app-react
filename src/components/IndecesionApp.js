import React from 'react';
import AddOptions from './AddOptions';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

class IndecesionApp extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.handleRemoveAllOptions = this.handleRemoveAllOptions.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleAction = this.handleAction.bind(this)
    //     this.handleRemoveSingle = this.handleRemoveSingle.bind(this);
    //     this.state = {
    //         options: props.options
    //     }
    // }
    //another way setting the default props
    // static defaultProps = {
    //     options: []
    // }


    //using transform-class-properties
    state = {
        options: [],
        selectedOption: undefined
    }
    componentDidMount = () => {
        console.log(this.state);
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
    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.options.length !== this.state.options.length) {
            localStorage.setItem('options', JSON.stringify(this.state.options));
        }
    }
    //life cycle methods ---start
    componentWillUnmount = () => {
        console.log("componentWillUnmount");
    }
    handleRemoveAllOptions = () => {
        this.setState(() => ({ options: [] }));
    }
    handleRemoveSingle = (option) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((item) => (option != item))
        }));
    }
    //life cycle methods ---end

    handleAddOption = (option = '') => {
        option = option.trim();
        if (!option) {
            return 'Enter a valid option';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'The option already exists'
        }
        this.setState((prevState) => ({ options: [...prevState.options, option] }));
    }
    handleAction = () => {
        const random = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[random];
        this.setState(() => ({ selectedOption: option }));
    }
    closeActionModal = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }

    render() {
        const app = {
            title: 'Indecesion App',
            subtitle: 'App Header here'
        }
        return (
            <div>
                <Header appData={app} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handleAction={this.handleAction} />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            removeAll={this.handleRemoveAllOptions}
                            handleRemoveSingle={this.handleRemoveSingle}
                        />
                        <AddOptions addOption={this.handleAddOption} />
                    </div>
                    <OptionModal selectedOption={this.state.selectedOption} closeActionModal={this.closeActionModal} />
                </div>
            </div>
        )
    }
}
// setting the default props
IndecesionApp.defaultProps = {
    options: []
}
export default IndecesionApp;