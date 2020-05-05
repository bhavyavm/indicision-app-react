import React, { Component } from 'react';
import Option from './Option'

export default class Options extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="widget-header">
                    <h3 className="widget-header__title">Your Options</h3>
                    <button className="button button--link" onClick={this.props.removeAll} disabled={this.props.options.length == 0}>Remove All</button>
                </div>
                {this.props.options.length == 0 && <p>Please add an option to get started</p>}
                {
                    this.props.options.map((item, index) => {
                        return (<Option key={index} option={item} handleRemoveSingle={this.props.handleRemoveSingle} />)
                    })
                }
            </div>
        );
    }
}

//state less function ,if we are not using the life cycles
// const Options = (props) => {
//     return (
//         <div>
//             <button onClick={props.removeAll} disabled={props.options.length == 0}>Remove All</button>
//             <h5>Here are your options</h5>
//             {props.options.length == 0 && <p>Please add an option to get started</p>}
//             <ol>
//                 {
//                     props.options.map((item, index) => {
//                         return (<Option key={index} option={item} handleRemoveSingle={props.handleRemoveSingle} />)
//                     })
//                 }
//             </ol>
//         </div>
//     );
// }

// export default Options;
