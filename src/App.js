import { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Preloader from './component/common/Preloader/Preloader';
import Footer from './component/Footer/Footer';
import HeaderContainer from './component/Header/HeaderContainer';
import Main from './component/Main/Main';
import { initializeApp } from './redux/app-reducer';

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <>
        <HeaderContainer />
        <Main />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);



