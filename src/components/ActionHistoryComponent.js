import React, { Component } from 'react';
import apiService from '../services/apiService';

class ActionHistoryComponent extends Component {
  state = {
    history: [],
  };

  componentDidMount() {
    apiService.getActionHistory()
      .then(response => this.setState({ history: response.data }))
      .catch(error => console.error('Error fetching action history', error));
  }

  render() {
    return (
      <div>
        <h2>Action History</h2>
        <ul>
          {this.state.history.map((action, index) => (
            <li key={index}>{action}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ActionHistoryComponent;
