import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return 'still deciding';
            case false:
                return (
                    <li><a href='auth/google'>Login with Google</a></li>
                );
            default:
                return <li><a>Logout</a></li>;
        }
    }


    render() {
        console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Emaily</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/auth/google">{this.renderContent()}</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(auth) {
    return { auth };
}

export default connect()(Header);