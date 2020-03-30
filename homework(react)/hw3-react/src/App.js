import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProductsContextProvider } from './context/products';
import { CartContextProvider } from './context/cart';
import { FavContextProvider } from './context/favourites';


import {
  Homepage,
  Cart,
  Favourites
} from './pages';

function App() {

  return (
    <Router>
      <ProductsContextProvider>
        
          <CartContextProvider>
            <FavContextProvider>

            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/products" component={Homepage} />
              <Route path="/cart" component={Cart} />
              <Route path="/favourites" component={Favourites} />

            </Switch>

            </FavContextProvider>
          </CartContextProvider>
        
      </ProductsContextProvider>
    </Router>
  );
}

export default App;
