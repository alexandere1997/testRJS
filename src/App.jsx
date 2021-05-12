import React, { Component } from 'react';
import './App.css';
import List from './components/List/List';
import Konvert from './components/Konevrt/Kovert';
import getResourse from "./services/services";
import {BrowserRouter as Router, Route} from "react-router-dom";
import { Redirect } from "react-router"
import { Link } from "react-router-dom";


export default class App extends Component {


  state = {
    arr: ""
  }


  componentDidMount = () => {
    getResourse("https://www.cbr-xml-daily.ru/daily_json.js")
    .then(res => {
      this.setState(({ arr }) => {
        return {
          arr: res.Valute
        }
      })
    });
  }

  render() {
    const {arr} = this.state;
    console.log(arr)
    return(
      <Router>
        <div className="app__header">
            <div className="app__items_right">
                <Link to="/">Старт</Link>
                <Link  to="/List">Список</Link>&nbsp;&nbsp;&nbsp;
                <Link  to="/konvert">Конвертация</Link>
            </div>
    </div>
        <Route path="/" render={() => {
            return(
              <div className="app__start">
                  <h2>Информация о валютах</h2>
              </div>
          )
        }} />
        <Route path="/List" render={() => {
          return <List mass={arr}/>
        }}/>
        <Route path="/konvert" render={() => {
          return <Konvert mass={arr}/>
        }} />
        <Redirect push to="/" />
      </Router>
    )
  }
}

