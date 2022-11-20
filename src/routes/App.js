import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import NotFound from "../pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/css/styles.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" />
        <Route exact path="/products" component={Products} />
        <Route
          exact
          path="/products/categories/:categoryId"
          component={Products}
        />
        <Route exact path="/product-details/:id" component={ProductDetails} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
