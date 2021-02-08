import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import style from './App.module.css';
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";

export default class App extends React.Component {
  render() {
    return (
        <div className={style.App}>
          <Layout>
              <Switch>
                  <Route path="/checkout" component={Checkout} />
                  <Route path="/orders" component={Orders} />
                  <Route path="/" exact component={BurgerBuilder} />
              </Switch>
          </Layout>
        </div>
    );
  }
}