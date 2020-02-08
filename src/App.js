import React from 'react';
import './App.scss';
import {Switch,Route,Redirect} from "react-router-dom";

import HomePage from "../src/pages/homepage/homepage.component";
import ShopPage from "../src/pages/shop/shop.component";
import SignInOutPage from "../src/pages/sign-in-out/sign-in-out-page.component";
import CheckOutPage from "../src/pages/checkout/checkout.component";

import Header from "../src/components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import {connect} from "react-redux";

import {setCurrentUser} from "./redux/user/user.actions";

import {createStructuredSelector} from "reselect";

import {selectCurrentUser} from "./redux/user/user.selectors";

class App extends React.Component{

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef= await createUserProfileDocument(userAuth);

        console.log(this.props.setCurrentUser);

        userRef.onSnapshot(snapshot => {
          this.props.setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          });
        });

      } 
      
        this.props.setCurrentUser(userAuth);
      
       
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
      return (
      <div>
        <Header />
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
          <Route path={process.env.PUBLIC_URL + '/checkout'} component={CheckOutPage} />
          <Route path={process.env.PUBLIC_URL + '/shop'} component={ShopPage} />
          <Route exact path={process.env.PUBLIC_URL + '/sign-in-out'}  render={() => this.props.currentUser ? (<Redirect to={process.env.PUBLIC_URL + '/'} />) : (<SignInOutPage />)} />
        </Switch>
      </div>
    );
  }
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps,mapDispatchToProps)(App);
