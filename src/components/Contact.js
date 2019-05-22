import React, { Component } from 'react';
import axios from 'axios';
import './Contact.css';

class Contact extends Component{

    constructor(props){
        super(props);
        this.state = {
            fields: {
                firstName: '',
                lastName: '',
                userEmail: '', 
                userMsg: ''
            },
            success: '',
            errors: {
                name: '',
                email: '',
                msg: ''
            }
        };
    }

    componentDidMount(){};

    componentWillUnmount(){};

    handleValidation(){
        
        const { errors } = this.state;
        console.log(errors);
        return true;
    }

    handleSubmit = async (event) => {

        try{

        event.preventDefault();

        const { fields } = this.state;

        if(this.handleValidation()){

            await axios.post('http://localhost:3001/api/post',
            {
                user_name: fields.firstName + " " + fields.lastName,
                user_email: fields.userEmail,
                user_msg: fields.userMsg
            });

            this.setState({
                fields: {
                    firstName: '',
                    lastName: '',
                    userEmail: '',
                    userMsg: ''
                },
                success: <span style={{color: 'limegreen', width: '100%', height: 'auto', textAlign: 'center'}}>Your form has been submitted!</span>
            });

            //this.props.history.push('/'); //redirects

        }else{

            this.setState();

        }

        }catch(error){
            console.log("error:", error)
        }

    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState( state => {
            if(state.success === ''){
                return ({fields: {...state.fields, [name]: value}});
            }else{
                return ({fields: {...state.fields, [name]: value}, success:''});
            }
        }
        );
    }

    render(){

        const { fields, success, errors } = this.state;

        return(
            <div className='Contact-Container'>
                <form name="Contact-Form" onSubmit={this.handleSubmit}>
                    {success}
                    <label className="firstName-Input">
                        <span>First Name:</span>
                        <input type="text" name="firstName" placeholder="First Name" value={fields.firstName} onChange={this.handleChange} required/>
                        {errors['name']}
                    </label>
                    <label className="lastName-Input">
                        <span>Last Name:</span>
                        <input type="text" name="lastName" placeholder="Last Name" value={fields.lastName} onChange={this.handleChange} required/>
                        {errors['name']}
                    </label>
                    <label className="userEmail-Input">
                        <span>Email:</span>
                        <input type="email" name="userEmail" placeholder="Email" value={fields.userEmail} onChange={this.handleChange} required/>
                        {errors['email']}
                    </label>
                    <label className="userMsg-Input">
                        <span>Message:</span>
                        <textarea name="userMsg" value={fields.userMsg} onChange={this.handleChange} required/>
                        {errors['msg']}
                    </label>
                    <label className="Submit-Input">
                        <input type="submit" value="Submit"/>
                    </label>
                </form>
            </div>
        );

    }

}

export default Contact;