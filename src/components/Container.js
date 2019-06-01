import React, { Component } from 'react';
import './Container.css';

class Container extends Component {

    constructor(props){
        super(props);
        this.state = {
            styles: {
                position: '',
                top: '',
                backgroundColor: '',
                padding: '',
                display: '',
                right: '',
                left: '',
                zIndex: ''
            }
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
        const {styles} = this.state;
        const {type} = this.props;
        const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        const scrollPos = window.pageYOffset;
        
        let typeStyle = {};

        switch(type){
            case 'fixedNavbar':

                let visible = false;
                typeStyle.backgroundColor = '#59c2ff';
                typeStyle.position = 'fixed';

                if(scrollPos > 45 + height*(0.005) && visible === false){
                    visible = true;
                }else if(scrollPos <= 45 + height*(0.005) && visible === true){
                    visible = false;
                }
                
                if(visible){
                    typeStyle.top = 0;
                }else if(!visible){
                    typeStyle.top = -(45 + height*(0.006));
                }

            break;
            case 'staticNavbar':
                typeStyle.position = "sticky";
                typeStyle.top = 0;
                typeStyle.zIndex = 1;
                typeStyle.backgroundColor = "#59c2ff";
            break
            case 'innerContent':
                typeStyle.padding = 15;
            break;
            default:
            break;
        }

        const newStyles = Object.assign({...styles}, typeStyle);

        this.setState({styles: newStyles});

    }

    render(){

        const {styles} = this.state;

        return(

            <section className="container" style={{display: styles.display, position: styles.position, top: styles.top, backgroundColor: styles.backgroundColor, padding: styles.padding, zIndex: styles.zIndex}}>
                {this.props.children}
            </section>

        );

    }

}

export default Container;