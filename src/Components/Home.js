import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import '../css/home.css';


export default class Home extends Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                <div className="header__top">
                    <Link href="#">
                        <img src={logo} alt="logo" />{""} Telegram Bot
                    </Link>
                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__link">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="menu__link">
                                <Link to="/event">Events</Link>
                            </li>
                            <li className="menu__link">
                                <Link to="/certificates">Certificates</Link>
                            </li>
                            <li className="menu__link">
                                <Link to="/signin">SignIn</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                </div>
            </div>
        );
    }
}