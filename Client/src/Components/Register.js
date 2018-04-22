import React, { Component } from 'react';
import {registerUser} from '../api.js';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '', 
            email: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.register = this.register.bind(this);
    } 
    
    handleChange(event) {

        console.log('name is : ' + event.target.name)
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    
    handleSubmit(event) {
        
        event.preventDefault();
    }
    
    finishRegistration(err, res) {
        console.log(res) 
    }

    register(e) {
        
        registerUser(this.state, this.finishRegistration)
    }
    

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Register</h2>
                    <div className="form">
                        <div className="container">
                            <div>
                                <label id="label" className="register-label">
                                Name:
                                </label>
                                <input name="name" className="text" type="text" value={this.state.name} onChange={this.handleChange}/>
                            </div>
                            <div>
                                <label id="label" className="email-label">
                                Email:
                                </label>
                                <input name="email" className="text" type="text" value={this.state.email} onChange={this.handleChange}/>
                            </div>
                        </div>
                        
                        <input className="submit" type="submit" value="Submit" onClick={this.register} />
                    </div>  
                </form>
                
            </div>
        );
    }

}

export default Register;


