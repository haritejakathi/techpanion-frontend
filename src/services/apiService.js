import axios from 'axios';

const apiService = {
  getInvoiceDetails: () => axios.get('/api/invoice-details'),
  submitForm: (data) => axios.post('/api/submit-form', data),
  getActionHistory: () => axios.get('/api/action-history'),
};

export default apiService;
