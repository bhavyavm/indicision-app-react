import React from 'react';
export default class AddOptions extends React.Component {
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
                <h5>Add more options from heree</h5>
                {this.state.error && <p>{this.state.error}</p>}
                <form className="add-option"  onSubmit={this.handleFormSubmit}>
                    <input className="add-option__input" type="text" name="option" />
                    <button className="button" type="submit">Add option</button>
                </form>
            </div>
        );
    }
}