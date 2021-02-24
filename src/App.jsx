import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './form.css'
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from './components/Contact';
import About from './components/About';
import AdminLogin from './components/AdminLogin';
import CustomerLogin from './components/CustomerLogin'
import Register from './components/Register';
import CreditCardHomePage from './components/CreditCardHomePage';
import ViewCustomer from './components/ViewCreditCardDetails'
import TransactionComponent from './components/TransactionComponent';
import ViewAllUsers from './components/ViewAllUsers';
import ViewCreditCardDetails from './components/ViewCreditCardDetails'
import AddAdmin from './components/AddAdmin';
import ViewAdmin from './components/ViewAdmin';
import DeleteAdmin from './components/DeleteAdmin';
import WelcomePageCreditCard from './components/WelcomePageCreditCard';
import ApplyCreditCardPage from './components/ApplyCreditCardPage';
import CardDetails from './components/CardDetails';
import ViewCardDetails from './components/ViewCardDetails';
import ListOfTransactions from './components/ListOfTransactions';
import HomeHeader from './components/HomeHeader';
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className="">
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route exact path="/adminLogin/:userName/:userPassword" component={AdminLogin}></Route>
            <Route exact path="/adminLogin" component={AdminLogin}></Route>
            <Route exact path="/viewAdmins" component={ViewAllUsers}></Route>
            <Route exact path="/customerLogin" component={CustomerLogin}></Route>
            <Route exact path="/registerCustomer" component={Register}></Route>
            <Route exact path="/creditCardHomePage" component={CreditCardHomePage}></Route>
            <Route exact path="/viewCustomer" component={ViewCreditCardDetails}></Route>
            <Route exact path="/addAdmin" component={AddAdmin}></Route>
            <Route exact path="/viewAnAdmin/:id" component={ViewAdmin}></Route>
            <Route exact path="/deleteAnAdmin/:id" component={DeleteAdmin}></Route>
            <Route exact path="/welcomePage" component={WelcomePageCreditCard}></Route>
            <Route exact path="/applyCreditCard" component={ApplyCreditCardPage}></Route>
            <Route exact path="/applyCreditCard/:salary/:customerId" component={ApplyCreditCardPage}></Route>
            <Route exact path="/goldCard/:creditcardNumber" component={CardDetails}></Route>
            <Route exact path="/goldCard" component={CardDetails}></Route>
            <Route exact path="/transactionPage" component={TransactionComponent}></Route>
            <Route exact path="/viewCreditCardDetails" component={ViewCardDetails}></Route>
            <Route exact path="/listOfTransactions/:ccid" component={ListOfTransactions}></Route>

          </Switch>
        </div>
       
      </Router>
    </div>
  );
}

export default App;
