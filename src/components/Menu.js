import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';
import {NavbarContext} from './NavbarContext';

class Menu extends Component {

    constructor(props){
        super(props);
        this.state = {};
        this.mql = window.matchMedia('(max-width: 700px)');
    }

    componentDidMount(){

        this.mql.addListener(this.MediaHandler);

    }
    
    componentWillUnmount(){

        this.mql.removeListener(this.MediaHandler);

    }

    MediaHandler = (event) => {
        console.log(this.props);
        if(!event.matches && this.context.showMenu){
            console.log("here");
            this.props.toggleMenu({
                target: {className: "menu"},
                currentTarget: {className: "menu"}
            });
        }
    }

    render(){
        return(
            <div className="menu-container">
                <div className="portfolio" >
                    Portfolio {this.context.showPort.toString()}
                </div>
                <div className="services">
                    Services
                </div>
                <div className="about">
                    About
                </div>
                <Link to='/contact'>
                    <div className="contact">
                            Contact
                    </div>
                </Link>    
            </div>
        );
    }

}

Menu.contextType = NavbarContext;

export default Menu;