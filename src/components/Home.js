import React, { Component, Fragment } from 'react';
import Header from './Header';
import Services from './Services';
import About from './About';
import Container from './Container';

class Home extends Component{

    render(){
        return(
            <Fragment>

                <Container type="innerContent">
                    <Header/>
                </Container>

                <Container type="innerContent">
                    <Services/>
                </Container>

                <Container type="innerContent">
                    <About/>
                </Container>
                
            </Fragment>
        );
    }

}

export default Home;