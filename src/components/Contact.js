import React, { Component } from 'react';
import axios from 'axios';
import './Contact.css';

class Contact extends Component{

    constructor(props){
        super(props);
        this.state = {
            user_name: '', 
            user_email: '', 
            user_msg: ''
        };
    }

    componentDidMount(){};

    componentWillUnmount(){};

    postContact = async (e) => {

        try{

        e.preventDefault();

        await axios.post('http://localhost:3001/api/post',
        {
            user_name: this.state.user_name,
            user_email: this.state.user_email,
            user_msg: this.state.user_msg
        });

        }catch(error){
            console.log("error:", error)
        }

    }

    handleChange(field, e){
        let fields = this.state;
        fields[field] = e.target.value;
        this.setState(fields);
    }

    render(){

        return(
            <div className='Contact-Container'>
                <form name="Contact-Form" onSubmit={this.postContact}>
                    <span>Name:</span><br/>
                    <input type="text" placeholder="Enter your first and last name" onChange={this.handleChange.bind(this, "user_name")} required/>
                    <br/><span>Email:</span><br/>
                    <input type="email" placeholder="Enter email" onChange={this.handleChange.bind(this, "user_email")} required/>
                    <br/>
                    <input type="text" placeholder="body" onChange={this.handleChange.bind(this, "user_msg")} required/>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );

    }

}

export default Contact;