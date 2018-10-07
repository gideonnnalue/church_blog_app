import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import HomePage from './containers/HomePage/HomePage';


class App extends Component {
  
  render() {   

    return (
      <Layout>
        <HomePage />
      </Layout>
    );
  }
}

export default App;
