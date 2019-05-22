import React, { Component, Fragment } from 'react';
import Header from './Header';
import Services from './Services';
import About from './About';
import Container from './Container';

class Home extends Component{

    render(){
        return(
            <Fragment>

                <Container>
                    <Header/>
                </Container>

                <Container>
                    <Services/>
                </Container>

                <Container>
                    <About/>
                </Container>
                
            </Fragment>
        );
    }

}

export default Home;