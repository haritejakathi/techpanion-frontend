import React, { Component } from 'react';
import apiService from '../services/apiService';

class InvoiceDetailsComponent extends Component {
  state = {
    invoiceDetails: null,
  };

  componentDidMount() {
    apiService.getInvoiceDetails()
      .then(response => this.setState({ invoiceDetails: response.data }))
      .catch(error => console.error('Error fetching invoice details', error));
  }

  render() {
    const { invoiceDetails } = this.state;
    return (
      <div>
        {invoiceDetails ? (
          <div>
            <p>Currency: {invoiceDetails.currency}</p>
            <p>Amount: {invoiceDetails.amount}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default InvoiceDetailsComponent;
