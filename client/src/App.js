import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Appbar from './components/AppbarEn';
import Main_En from './components/English/Main_En';
import Main_Sp from './components/Spanish/Main_Sp';
import Footer from './components/Footer';
import Leaders_En from './components/English/Leaders_En';
import Ministry_En from './components/English/Ministry_En';
import Socials_En from './components/English/Socials_En';
import FounderEn from './components/English/FounderEn';
import AppbarSp from './components/AppbarSp';
import FooterSp from './components/FooterSp';
import PastorsEn from './components/English/PastorsEn';
import JoinUsEn from './components/English/JoinUsEn';
import ClassesEn from './components/English/ClassesEn';
import { createTheme, ThemeProvider } from '@mui/material';
import OurBeliefs from './components/English/OurBeliefs';
let location = window.location.href.split('/');

const theme = createTheme({
  primary: { main: '#8C000B', second: '#9E2832' },
  secondary: { main: 'white' },
  accent: { main: '#E8E3D6', second: '#D6CDB5' },
  typography: { fontFamily: 'QuincyCF, sans-serif' },
});
class App extends Component {
  render() {
    let appbar;
    let footer;
    if (location[3] === 'en') {
      appbar = <Appbar />;
      document.title = 'Christian Tabernacle';
      footer = <Footer />;
    } else if (location[3] === 'sp') {
      appbar = <AppbarSp />;
      document.title = 'Tabernaculo Christiano';
      footer = <FooterSp />;
    } else {
      appbar = <div></div>;
      footer = <div></div>;
    }
    return (
      <div className="page-container">
        <ThemeProvider theme={theme}>
          <div className="content-wrap">
            <Router>
              {appbar}
              <Route exact path="/" component={Welcome} />
              {/* English Routes */}

              <Route exact path="/en" component={Main_En} />
              <Route exact path="/en/our founder" component={FounderEn} />
              <Route exact path="/en/our team" component={Leaders_En} />
              <Route exact path="/en/ministries" component={Ministry_En} />
              <Route exact path="/en/pastors" component={PastorsEn} />
              <Route exact path="/en/socials" component={Socials_En} />
              <Route exact path="/en/our services" component={JoinUsEn} />
              <Route exact path="/en/our bible studies" component={ClassesEn} />
              <Route exact path="/en/our beliefs" component={OurBeliefs} />
              {/* Spanish Routes */}
              <Route exact path="/sp" component={Main_Sp} />
            </Router>
          </div>
          {footer}
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
