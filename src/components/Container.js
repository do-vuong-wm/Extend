import React, { Component } from 'react';
import './Container.css';

class Container extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){

        return(

            <div className="Container">
                {this.props.children}
            </div>

        );

    }

}

export default Container;