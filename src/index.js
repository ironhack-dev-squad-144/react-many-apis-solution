import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'

// Enable the routing in the App component
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));