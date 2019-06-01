import React, {Component, useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';
import {NavbarContext} from './NavbarContext';

// hook component
function Menu(props){

    const [mql, setMql] = useState(window.matchMedia('(max-width: 700px)'));
    const navbar = useContext(NavbarContext);

    useEffect(() => {

        mql.addListener(MediaHandler);

        return (() => mql.removeListener(MediaHandler));

    });

    function MediaHandler(event){
        if(!event.matches && navbar.showMenu){
            props.toggleMenu({
                target: {className: "menu"},
                currentTarget: {className: "menu"}
            });
        }
    }

    return(
        <div className="menu-container">
            <div className="portfolio" >
                Portfolio {navbar.showPort.toString()}
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

// class Menu extends Component {

//     constructor(props){
//         super(props);
//         this.state = {};
//         this.mql = window.matchMedia('(max-width: 700px)');
//     }

//     componentDidMount(){

//         this.mql.addListener(this.MediaHandler);

//     }
    
//     componentWillUnmount(){

//         this.mql.removeListener(this.MediaHandler);

//     }

//     MediaHandler = (event) => {
//         console.log(this.props);
//         if(!event.matches && this.context.showMenu){
//             console.log("here");
//             this.props.toggleMenu({
//                 target: {className: "menu"},
//                 currentTarget: {className: "menu"}
//             });
//         }
//     }

//     render(){
//         return(
//             <div className="menu-container">
//                 <div className="portfolio" >
//                     Portfolio {this.context.showPort.toString()}
//                 </div>
//                 <div className="services">
//                     Services
//                 </div>
//                 <div className="about">
//                     About
//                 </div>
//                 <Link to='/contact'>
//                     <div className="contact">
//                             Contact
//                     </div>
//                 </Link>    
//             </div>
//         );
//     }

// }

// Menu.contextType = NavbarContext;

export default Menu;