import React from 'react';

export default class Option extends React.Component {
    render() {
        return (
            <div className="option">
                <p className="option__text">{this.props.option}</p>
                <button className="button button--link"
                    onClick={(e) => { this.props.handleRemoveSingle(this.props.option) }}>Remove
                </button>
            </div>
        );
    }
}