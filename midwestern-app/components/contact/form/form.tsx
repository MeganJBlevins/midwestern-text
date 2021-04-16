import React, { Component } from 'react';
import { IProps, IState, IInput } from './interface';


const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

class Form extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      email: '',
      subject: '',
      message: '',
      emailErrors: false,
      subjectErrors: false,
      messageErrors: false,
      submitted: false,
      errors: []
    };
  }
 
  handleChange = (name: IInput["name"], value: IInput["value"]) => {

    switch (name) {
      case 'email': 
        this.setState({ email: value });
        if(!validEmailRegex.test(value)){
          this.setState({ emailErrors: true})
        }
        break;
      case 'subject': 
        this.setState({ subject: value });
        break;
      case 'message': 
        this.setState({ message: value });
        break;
      default:
        break;
    }
  }
  
  handleSubmit = (event: React.FormEvent) => {
    this.setState({ emailErrors: false, subjectErrors: false, messageErrors: false });

    event.preventDefault();
    if(this.state.emailErrors || this.state.messageErrors || this.state.subjectErrors || this.state.subject == '' || this.state.subject == '') {


      if(!validEmailRegex.test(this.state.email)){
        this.setState({ emailErrors: true });
      }

      if(this.state.subject == ''){
        this.setState({ subjectErrors: true });
      }
      if (this.state.message == '') {
        this.setState({ messageErrors: true });
      }

      console.error('Invalid Form')   

    } else {
      this.setState({submitted: true})
    }
  }
  render () {
    return (
      <div>
        {!this.state.submitted && 
         <form className={this.state.submitted ? 'hidden' : ''} onSubmit={this.handleSubmit} noValidate >
            <fieldset className={this.state.emailErrors ? 'error' : ''}>
              <label htmlFor="email">Email <span><em>Must use a valid email.</em></span></label>
              <input type='email' name='email' onChange={(ev: React.ChangeEvent<HTMLInputElement>,): void => this.handleChange("email", ev.target.value)} />
            </fieldset>
            <fieldset className={this.state.subjectErrors ? 'error' : ''}>
              <label htmlFor="subject">Subject <span><em>Subject is required.</em></span></label>
              <input type='text' name='subject' onChange={(ev: React.ChangeEvent<HTMLInputElement>,): void => this.handleChange("subject", ev.target.value)} />
            </fieldset>
            <fieldset className={this.state.messageErrors ? 'error' : ''}>
              <label htmlFor="message">Message <span><em>Message is required.</em></span></label>
              <textarea rows={8} name='message' onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>,): void => this.handleChange("message", ev.target.value)}/>
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