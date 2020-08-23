import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className="container-fluid p-2 header fixed-top">
                <div className="m-0 text-center">
                    <Link to="/" className="text-decoration-none brandLogo">
                        Doggstagram 
                    </Link>
                </div>
            </div>
        )
    }
}
