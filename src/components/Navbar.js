import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ModalPortal from './ModalPortal';
import MenuPortal from './MenuPortal';
import Modal from './Modal';
import Menu from './Menu';
import {FaBars} from 'react-icons/fa';
import {IconContext} from "react-icons";
import {NavbarContext, showModal} from  './NavbarContext';

class Navbar extends React.Component{

  constructor(props){
    super(props);
    this.state = showModal;
  }

  handleClick = (event) => {

    const currentClass = event.currentTarget.className;
    const targetClass = event.target.className;

    // console.log(this.state);
    // console.log(this.context);
    // console.log(event.currentTarget);
    // console.log(event.target);

    this.setState(state => {
      const {showPort, showMenu} = state;

      switch(currentClass){
        case "portfolio":
        case "portfolio-handler":
            if(targetClass === "modal" || targetClass === "close")
              showModal.showPort = !showPort;
            else
              showModal.showPort = true;  
        break;
        case "menu":
        case "menu-handler":
          switch(targetClass){
            case "portfolio":
                showModal.showPort = true; 
            break;
            case "services":
            break;
            case "about":
            break;
            default:
              showModal.showMenu = !showMenu;
            break;
          }
        break;
        default:
        break;
      }

      return showModal;

    });

  }

  render(){

    const {showPort, showMenu} = this.state;
    return(

      <div className="navbar">
        <div className="logo"> 
          <Link to='/' className="logo-link"> Extend Web Design </Link> 
        </div>
        <div className="navbuttons-container">
          <div className="navbuttons-menu">
            <IconContext.Provider value={{size: "2.5em"}}>
              <button className="menu" onClick={this.handleClick}>
              <FaBars/>
              </button>
            </IconContext.Provider>
          </div>
          <div className="navbuttons">
            <button className="portfolio" onClick={this.handleClick}> Portfolio </button>
            <button className="services"> Services </button>
            <button className="about"> About </button>
            <Link to='/contact'><button> Contact </button></Link>
            </div>
          </div>
          {
            <NavbarContext.Provider value={this.context}>
              <NavbarContext.Consumer>
                {value => {return(<div>{value.showMenu.toString()}</div>);}}
              </NavbarContext.Consumer>
            </NavbarContext.Provider>
          }
          {
            showPort && 
            <div className="portfolio-handler" onClick={this.handleClick}>
              <ModalPortal>
                <Modal/>
              </ModalPortal>
            </div>
          }
          {
            showMenu && 
            <div className="menu-handler" onClick={this.handleClick}>
              <MenuPortal>
                <Menu toggleMenu={this.handleClick}/>
              </MenuPortal>
            </div>
          }
      </div>

    );

  }

}

Navbar.contextType = NavbarContext;

export default Navbar;
