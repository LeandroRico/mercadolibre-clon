import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Products from '../components/Products';
import ProductDetails from '../components/ProductDetails';
import NotFound from '../components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Products} />
        <Route exact path='/categories/:categoryId' component={Products} />
        <Route exact path='/product-details/:id' component={ProductDetails} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
