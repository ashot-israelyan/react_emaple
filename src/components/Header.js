import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"/>
                    <span className="icon-bar"/>
                    <span className="icon-bar"/>
                </button>
                <a className="navbar-brand" href="#">PicsArt React</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li className="active">
                        <Link to="/"> Articles</Link>
                    </li>
                    <li>
                        <Link to="/article/create">Create Article</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);