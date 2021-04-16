import React, { Component } from 'react';

const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val && (valid = false)
  );
  return valid;
}

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: null,
      subject: null,
      message: null,
      errors: {
        email: false,
        subject: false,
        message: false,
      },
      submitted: false
    };
  }
 
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
  
    switch (name) {
      case 'email': 
        errors.email = 
          (!validEmailRegex.test(value) && event.target.value != "");
        break;
      case 'subject': 
        errors.subject = 
          value.length <= 0
        break;
      case 'message': 
        errors.message = 
          value.length <= 0
        break;
      default:
        break;
    }
  
    this.setState({errors, [name]: value});
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors) && this.state.email) {
      this.setState({submitted: true})
    }else{
      console.error('Invalid Form')
    }
  }
  render () {
    const {errors} = this.state;
    console.log('submitted: ', this.state.submitted)
    return (
      <div>
        {!this.state.submitted && 
         <form className={this.state.submitted ? 'hidden' : ''} onSubmit={this.handleSubmit} noValidate >
            <fieldset className={errors.email ? 'error' : ''}>
              <label htmlFor="email">Email <span><em>Must use a valid email.</em></span></label>
              <input type='email' name='email' onChange={this.handleChange} noValidate />
            </fieldset>
            <fieldset className={errors.subject ? 'error' : ''}>
              <label htmlFor="subject">Subject <span><em>Subject is required.</em></span></label>
              <input type='text' name='subject' onChange={this.handleChange} noValidate />
            </fieldset>
            <fieldset className={errors.message ? 'error' : ''}>
              <label htmlFor="message">Message <span><em>Message is required.</em></span></label>
              <textarea rows="8" name='message' onChange={this.handleChange} noValidate />
            </fieldset>
            <fieldset className='submit'>
              <button className="button">Submit</button>
            </fieldset>
          </form>
        }
        {this.state.submitted && 
          <div className={"success " + (this.state.submitted ? '' : 'hidden')}>
            <h2>Thank you for reaching out to us!</h2>
            <p>Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum.</p>
          </div>
        }
      </div>
    )
  }
}

export default Form;