import logo from './logo.svg';
import './App.css';
import React from 'react';
// import AuthCard from './components/AuthCard';
// import HobbySelector from './components/HobbySelector';
// import HobbySelectorRadio from './components/HobbySelectorRadio';
// import Customers from './components/Customers';
import Parent from './components/simple/Parent';
import ParentCard from './components/intermediate/ParentCard';
import ServerCard from './components/advanced/ServerCard';
import ClientCard from './components/advanced/ClientCard';
//import Navbar from '../../../../../Users/lenovo/Downloads/01_React_JS_Core_Module (1)/03-React-JS-Bootstrap-Tours-Website/src/components/navbar/Navbar';
// import ChangeUsername from './components/ChangeUsername';
// import ChangePassword from './components/ChangePassword';
// import SelectBox from './components/SelectBox';
// import SMSApp from './components/SMSApp';
// import Login from './components/Login';
// import Registration from './components/Registration';
// import Navbar from '../src/components/navbar/Navbar';
// import LandingPage from '../src/components/landing-page/LandingPage';
// import IntroSection from '../src/components/intro-section/IntroSection';
// import TourContainer from '../src/components/tours/TourContainer';
// import Footer from '../src/components/footer/Footer'


class App extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          total : 0
      }
  }

  receiveTotal = (value) => {
      this.setState({
          total : value
      });
  };

  render() {
      return (
          <React.Fragment>
              <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                  <a href="/" className="navbar-brand">React with Components Interaction</a>
              </nav>

              {/*----Simple----*/}
              {/*<Parent/>*/}

              {/*--- Intermediate --- */}
              {/* <ParentCard/>*/}

              {/*------- Advanced ------*/}
              <section className="p-3">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-4">
                              <ClientCard sendTotal={this.receiveTotal}/>
                          </div>
                          <div className="col-md-4">
                              <ServerCard total={this.state.total}/>
                          </div>
                      </div>
                  </div>
              </section>

          </React.Fragment>
      );
  }

}

export default App;

