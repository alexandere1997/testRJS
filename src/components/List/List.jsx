import React, { Component } from 'react';
import "./List.css"
import Search from '../Search/Search';
export default class List extends Component {


    state = {
        term: ''
    }

    onSearchChange = (term) => {
        this.setState({ term });
    };

    search(items, term) {
        if(term.length === 0) {
          return items;
        }
    
        return items.filter((item) => {
          return item.Name
                .toLowerCase()
                .indexOf(term.toLowerCase()) > -1;
        });
      }


    render() {
        const {term} = this.state
        const {mass} = this.props;
        let arr = [];
        console.log(term)
        let push = Object.keys(mass).map((keyName, i) => {
            arr.push(mass[keyName])
        })
        const visibleItem = this.search(arr, term)
        let items = visibleItem.map(items => {
            let name = items.Name;
            let id = items.ID;
            let nominal = items.Nominal
            let Value = items.Value;
            let Previous = items.Previous;
            let CharCode = items.CharCode;
            let app__arrow = "app__arrow_top";
            let app__price_right = "app__price_right";
            let arrow = "↑";
            let minus = Previous - Value;
            let pluss = Value - Previous;
            let res;
            if(Previous < Value) {
                app__arrow = "app__arrow_top";
                app__price_right = "app__price_right";
                arrow = "↑";
                res = pluss.toFixed(5);
            }
            else if(Previous > Value) {
                app__arrow = "app__arrow_top_c";
                app__price_right = "app__price_right_c";
                arrow = "↓";
                res = minus.toFixed(5);
            }
            return(
            <div className="app__item" key={id}>
                <h3 className="app__title">{name}</h3>
                <div className="app__inner">
                    <div className="app__left">
                        <span className="app__id">{nominal}</span>
                        <p className="app__name">{CharCode}</p>
                        <p className="app__arrow">&harr;</p>
                        <p className="app__price">{Value} <span className="app__name">RUB</span></p>
                    </div>
                    <div className="app__right">
                        <span className={app__arrow}>{arrow}</span>
                        <p className={app__price_right}>{res}</p>
                    </div>
                </div>
            </div>
            )
        } )
        //const visibleItem = this.search(arr, term)
        return (
        <div className="app__lists">
            < Search onSearchChange={this.onSearchChange}/>
            {items}
        </div>
        )
    }
}