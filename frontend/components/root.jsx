import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';
import Header from './header/header';
import Footer from './footer/footer';


const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Header />
      <App />
      <Footer />
    </HashRouter>
  </Provider>
);

export default Root;