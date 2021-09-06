import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import AboutUs from "./pages/AboutUs/AboutUs";
import FooterComponent from "./Components/Footer/FooterComponent";
import Header from "./Components/Header/Header.jsx";
import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";
import Sale from "./pages/Sale/Sale"

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="main-container">
          <Switch>
            <Route exact path="/aboutUs" component={AboutUs} />
            <Route exact path="/productList" component={ProductList} />
            <Route exact path="/sale" component={Sale} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </>
  );
}

export default App;
