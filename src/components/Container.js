import React, { Component } from 'react';
import './Container.css';

class Container extends Component {

    constructor(props){
        super(props);
        this.state = {
            styles: ''
        };
    }

    componentDidMount(){
        this.morphType();
    }

    componentDidUpdate(prevProps){
        if(this.props !== prevProps)
            this.morphType();
    }

    componentWillUnmount(){
    }

    morphType = () => {
        const {type} = this.props;
        // const {styles} = this.state;
        // const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        // const scrollPos = window.pageYOffset;

        let style = "";

        switch(type){
            case 'fixedNavbar':
                // let visible = false;
                // typeStyle.backgroundColor = '#59c2ff';
                // typeStyle.position = 'fixed';

                // if(scrollPos > 45 + height*(0.005) && visible === false){
                //     visible = true;
                // }else if(scrollPos <= 45 + height*(0.005) && visible === true){
                //     visible = false;
                // }
                
                // if(visible){
                //     typeStyle.top = 0;
                // }else if(!visible){
                //     typeStyle.top = -(45 + height*(0.006));
                // }

            break;
            case 'staticNavbar':
                style = "static-navbar";
            break
            case 'innerContent':
                style = "inner-content";
            break;
            default:
            break;
        }

        this.setState({styles: style});

    }

    render(){

        const {styles} = this.state;

        return(

            <section className={`container ${styles}`}>
                {this.props.children}
            </section>

        );

    }

}

export default Container;