import React from 'react';
import './App.css';
import { Navigation } from './components/Navigation'

import LandingPage from './views/LandingPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Products from './views/product/Products'
import ProductDetails from './views/product/ProductDetails'
import NotFound from './views/NotFound'


function App() {
  return (
    <BrowserRouter>
      <div>

        <Navigation />

          <div className="container mt-3">
            <Switch>
              
              <Route path="/" exact component={LandingPage} />
              <Route path="/products" exact component={Products} />
              <Route path="/products/details/:id" exact component={ProductDetails} />

              <Route path="*" component={NotFound} />
            </Switch>
          </div>

      </div>
    </BrowserRouter>
  );
}

export default App;