import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Home from './Pages/HomeMain/Home/Home';
import MainService from './Pages/MainService/MainService';
import About from './Pages/About/About';
import Footer from './Pages/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import Booking from './Pages/Booking/Booking';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute'
import NotFound from './Pages/NotFound/NotFound';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/service">
              <MainService></MainService>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
