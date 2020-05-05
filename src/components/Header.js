import React from 'react';
// import React, {Component} from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                    <h1 className="header__title">{this.props.appData.title}</h1>
                    {this.props.appData.subtitle && <h3 className="header__subtitle">{this.props.appData.subtitle}</h3>}
                </div>
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

export default Header;