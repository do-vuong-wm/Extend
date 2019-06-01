import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){

        return(
            <section className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>Header Title</h2>
                        <span className="close">&times;</span>
                    </div>
                    <div className="modal-body">
                        {
                        this.props.children
                        }   
                    </div>
                    <div className="modal-footer">

                    </div>
                </div>
            </section>
        );

    }

}

export default Modal;