import React, { Component } from 'react';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      subject: '',
      message: '',
      emailError: false,
      subjectError: false,
      messageError: false,
      emailValid: false,
      subjectValid: false,
      messageValid: false,
      formValid: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserInput = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  validateField(fieldName, value) {
    let email = this.state.emailValid;
    let subject = this.state.subjectValid;
    let message = this.state.messageValid;

    switch(fieldName) {
      case 'email':
        var mailformat = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
        email = value.match(mailformat) ? true : false;
        if(value.match(mailformat)){
          email = true;
          this.state.emailError = false;
        } else {
          email = false;
          this.state.emailError = true;
        }
        break;
      case 'subject':
        const subjectValue = value.trim() != '';
        if(subjectValue){
          subject = true;
          this.state.subjectError = false;
        } else {
          subject = false;
          this.state.subjectError = true;
        }
        break;
      case 'message':
        const messageValue = value.trim() != '';
        if(messageValue){
          message = true;
          this.state.messageError = false;
        } else {
          message = false;
          this.state.messageError = true;
        }
        break;
      default:
        break;
    }
    this.setState(
      {
        emailValid: email,
        subjectValid: subject,
        messageValid: message
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.subjectValid && this.state.messageValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  handleSubmit(e) {
    alert('submitted');
    e.preventDefault();
    const fields = ['email', 'subject', 'message'];    
    fields.forEach(element => this.validateField(element, this.state[element]));
    if(this.state.formValid){
      alert('congratulations! You submitted a form!');
    } else {
      alert('what is wrong with this thing?!');
    }
  }

  render () {
    return (
      <form className="contact-form">
        <h2>Sign up</h2>
        <fieldset className={this.state.emailError ? 'error' : ''}>
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" name="email"
            value={this.state.email}
            onChange={this.handleUserInput}  />
        </fieldset>
        <fieldset className={this.state.subjectError ? 'error' : ''}>
          <label htmlFor="subject">Subject</label>
          <p className={"error--text " + (this.state.subjectError ? 'show' : 'hidden')}>Please enter a subject</p>
          <input type="subject" className="form-control" name="subject"
            value={this.state.subject}
            onChange={this.handleUserInput}  />
        </fieldset>
        <fieldset className={this.state.messageError ? 'error' : ''}>
          <label htmlFor="message">Message</label>
          <p className={"error--text " + (this.state.messageError ? 'show' : 'hidden')}>Please enter a message</p>
          <textarea type="message" className="form-control" name="message"
            value={this.state.message}
            onChange={this.handleUserInput}  />
        </fieldset>
        <button className="btn btn-primary" onClick={this.handleSubmit}>Sign up</button>
      </form>
    )
  }
}

export default Form;