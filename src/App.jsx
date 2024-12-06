import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Logo from './Pages/Logo';
import Category from './Pages/Category';
import Review from './Pages/Review';
import Login from './Pages/Login';
import WoenMain from './Pages/WomenMain';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import Faqs from './Pages/Faqs';
import BuynowCard from './Components/BuynowCard';
import OrderDetails from './Components/OrderDetails';
import Signup from './Pages/Signup';

function App() {
  return (
    <>
      <Router>
        <Header />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
              <Logo />
              <Category />
              <Review />
            </Route>
            <Route path="/about">
              <AboutUs />
            </Route> 
            <Route path="/category">
              <WoenMain/>
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/buynow/:id">
              <BuynowCard />
            </Route>
            <Route path="/orderdetails/">
              <OrderDetails />
            </Route>
            <Route path="/faqs">
              <Faqs/>
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
