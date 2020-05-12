import React from "react";
import ReactDOM from "react-dom";
// import * as serviceWorker from "./serviceWorker";

import "./style.css";
import "./calculator.css";
import "./mobile.css";

import MainPart from "./mainpart";
import Term from "./term";
import Checkbox from "./checkbox";
import Result from "./result";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkbox: false,
            sum: "0",
            result: "0.00$",
            term: 30,
        };

        this.handleSum = this.handleSum.bind(this);
        this.handleTerm = this.handleTerm.bind(this);
        this.hadleCheckbox = this.hadleCheckbox.bind(this);
        this.showResult = this.showResult.bind(this);
    }

    handleSum(value) {
        this.setState({ sum: value }, () => this.showResult());
    }

    handleTerm(d) {
        let days = d;
        days < 30 && (days = 30);
        days > 365 && (days = 365);
        this.setState({ term: days }, () => this.showResult());
    }

    hadleCheckbox() {
        this.state.checkbox
            ? this.setState({ checkbox: false }, () => this.showResult())
            : this.setState({ checkbox: true }, () => this.showResult());
    }

    showResult() {
        let deposit = +this.state.sum;
        let currency = 1;
        let days = this.state.term;
        if (!!this.state.checkbox) currency = 5;
        this.setState({
            result:
                (
                    deposit *
                    Math.pow(1 + 0.0027, days) *
                    ((currency / days) * days)
                ).toFixed(2) + "$",
        });
    }

    render() {
        return (
            <div className="calculator__box">
                <h2 className="text__topic" onClick={this.hadleCheckbox}>
                    Калькулятор дохода Affilate Coin
                </h2>
                <MainPart sum={this.state.sum} onChangeSum={this.handleSum} />
                <Term onChangeTerm={this.handleTerm} />
                <Checkbox
                    checkbox={this.hadleCheckbox}
                    checked={this.state.checkbox}
                />
                <Result result={this.state.result} />
                <div className="calculator__result__background"></div>
            </div>
        );
    }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));