import './App.css';

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import FooterComponent from './Components/Footer/FooterComponent';
import Header from './Components/Header/Header';

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="main-container">
          <Switch>
            <Route exact path="/aboutUs" component={AboutUs} />
            <Route exact path="/productList" component={ProductList} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </>
  );
}

export default App;
