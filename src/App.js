import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Training from './components/pages/Training';
import Nutrition from './components/pages/Nutrition';
import Contact from './components/pages/Contact';
import Register from './components/pages/Register';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/training" component={Training} />
          <Route path="/nutrition" component={Nutrition} />
          <Route path="/contact" component={Contact} />
          <Route path="/register" component={Register} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
