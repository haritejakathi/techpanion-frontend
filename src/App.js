import React, { Component } from 'react';
import './styles/App.css';
import ImageComponent from './components/ImageComponent';
import FormComponent from './components/FormComponent';
import InvoiceDetailsComponent from './components/InvoiceDetailsComponent';
import ActionHistoryComponent from './components/ActionHistoryComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="left">
          <ImageComponent />
        </div>
        <div className="right">
          <FormComponent />
          <InvoiceDetailsComponent />
          <ActionHistoryComponent />
        </div>
      </div>
    );
  }
}

export default App;
