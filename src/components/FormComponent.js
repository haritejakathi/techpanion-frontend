import React, { Component } from 'react';
import apiService from '../services/apiService';

class FormComponent extends Component {
  state = {
    country: '',
    bankKey: '',
    bankAccountNumber: '',
    reference: '',
    // additional form fields...
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    apiService.submitForm(this.state)
      .then(response => {
        console.log('Form submitted', response);
        // handle response
      })
      .catch(error => {
        console.error('Error submitting form', error);
        // handle error
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="country" value={this.state.country} onChange={this.handleChange} />
        <input type="text" name="bankKey" value={this.state.bankKey} onChange={this.handleChange} />
        <input type="text" name="bankAccountNumber" value={this.state.bankAccountNumber} onChange={this.handleChange} />
        <input type="text" name="reference" value={this.state.reference} onChange={this.handleChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FormComponent;
