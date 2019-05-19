import React, { Component, Fragment } from 'react';
import Header from './Header';
import Services from './Services';
import About from './About';

class Home extends Component{

    render(){
        return(
            <Fragment>
                <Header/>
                <Services/>
                <About/>
            </Fragment>
        );
    }

}

export default Home;