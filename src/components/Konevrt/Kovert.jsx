import React, { Component } from 'react';
import "./Konvert.css"
export default class Konvert extends Component {

    state = {
        active: false,
        aciveFuncOne: false,
        aciveFuncTWo: true,
        values: 57.3364,
        names: "AUD",
        valueRight: 1,
        nameRigth: "RUB",
        defaultNumber: 1,
        data__name: "AUD",
        dataTitle: "Австралийский доллар",
        titleRight: "Российский рубль",
        defaults: 57.3364
    }


    inputChange = (e) => {
        this.setState(() => {
            return{
                valueRight: e.target.value
            }
        })
    }
    clickButton = () => {
        this.setState(() => {
            return {
                active: !this.state.active
            }
        })
    }
    clickItem = (e) => {
        let valuee = e.target.dataset.value
        let namee = e.target.dataset.name;
        let title = e.target.dataset.title;
        let defaults = e.target.dataset.default;
        this.setState(() => {
            return{
                values: valuee,
                names: namee,
                dataTitle: title,
                defaults: defaults,
                active: !this.state.active,
                nameRigth: "RUB", 
                titleRight: "Российский рубль",
                aciveFuncOne: false,
                aciveFuncTWo: true,
                data__name: namee
            }
        })
    }
    clikcRightArrow = () => {
        this.setState(() => {
            return {
                values: (this.state.defaultNumber / this.state.values).toFixed(5),
                valueRight: this.state.defaultNumber,
                nameRigth: this.state.data__name,
                names: "RUB",
                titleRight: this.state.dataTitle,
                dataTitle: this.state.titleRight,
                aciveFuncOne: true,
                aciveFuncTWo: false
            }
        })
    }
    clikcLeftArrow = () => {
        this.setState(() => {
            return {
                valueRight: this.state.defaultNumber,
                nameRigth: "RUB",
                names: this.state.data__name,
                values: this.state.defaults, 
                titleRight: this.state.dataTitle,
                dataTitle: this.state.titleRight,
                aciveFuncOne: false,
                aciveFuncTWo: true
            }
        })
    }

    render() {
        const {active,
               names, 
               values, 
               valueRight, 
               nameRigth, 
               data__name, 
               dataTitle, 
               titleRight, 
               aciveFuncOne,
               aciveFuncTWo} = this.state;
        const {mass} = this.props;

        let price = valueRight * values
        let arr = [];
        let pushh = Object.keys(mass).map((keyName, i) => {
            arr.push(mass[keyName])
        })
        let list = arr.map(item => {
            return(
                <div className="app__add" key={item.ID}>
                    <p onClick={this.clickItem} 
                       data-title={item.Name} 
                       data-name={item.CharCode} 
                       data-default={item.Value} 
                       data-value={item.Value} 
                       className="app__namess">{item.CharCode}</p>
                </div>
            )
        })

        let act = "app__listss"
        if(active) {
            act += " app__act"
        }

        let act_func;
        if(aciveFuncOne){
            act_func = this.clikcLeftArrow
        }

        let act_func_two;
        if(aciveFuncTWo) {
            act_func_two = this.clikcRightArrow
        }
        return (
        <div className="app__konvert">
            <div className="app__wrap">
                <h3 className="app__title">{dataTitle}</h3>
                <div className="app__wrapper">
                    <div className="app__names">
                        <p className="app__name" data-datanames={data__name}>{names}</p>
                        <p className="app__button" onClick={this.clickButton}>▼</p>
                    </div>
                    <input className="app__inputs" 
                           type="text" 
                           onInput={this.inputChange} 
                           value={valueRight}/>
                </div>
                <div className={act}>
                {list}
                </div>
            </div>
            <div className="app__lines">
                <p className="app__arrow_left" onClick={act_func}>←</p>
                <p className="app__arrow_right" onClick={act_func_two}>→</p>
            </div>
            <div className="app__wrap">
            <h3 className="app__title">{titleRight}</h3>
                <div className="app__wrapper">
                    <div className="app__names">
                        <p className="app__name">{nameRigth}</p>
                        <p className="app__button">▼</p>
                    </div>
                    <input className="app__inputs" type="text" value={price}/>
                </div>
            </div>
        </div>
        )
    }
}