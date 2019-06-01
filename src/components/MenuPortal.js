import {Component} from 'react';
import ReactDom from 'react-dom';

class MenuPortal extends Component{

    constructor(props){
        super(props);
        this.state = {};
        this.el = document.createElement("div");
        this.el.className = "menu-portal";
        this.menuRoot = document.getElementById("menu-root"); 
    }

    componentDidMount(){
        this.menuRoot.appendChild(this.el);
    }

    componentWillUnmount(){
        this.menuRoot.removeChild(this.el);
    }

    render(){
        return ReactDom.createPortal(this.props.children, this.el);
    }

}

export default MenuPortal;