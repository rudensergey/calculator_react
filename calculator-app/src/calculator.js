import React from "react";

import MainPart from "./mainpart";
import Term from "./term";
import Checkbox from "./checkbox";
import Result from "./result";

import "./style/style.css";
import "./style/calculator.css";
import "./style/mobile.css";
import { ThemeContext } from "./themecontext";

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkbox: false,
            sum: "0",
            result: "0.00$",
            term: 30,
        };
    }

    handleSum = (value) => {
        this.setState({ sum: value }, () => this.showResult());
    };

    handleTerm = (d) => {
        let days = d;
        days < 30 && (days = 30);
        days > 365 && (days = 365);
        this.setState({ term: days }, () => this.showResult());
    };

    hadleCheckbox = () => {
        this.state.checkbox
            ? this.setState({ checkbox: false }, () => this.showResult())
            : this.setState({ checkbox: true }, () => this.showResult());
    };

    showResult = () => {
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
    };

    render() {
        return (
            <ThemeContext.Consumer>
                {(value) => (
                    <div
                        className="calculator__box"
                        style={{
                            backgroundColor:
                                value === "light" ? "#FFFFFF" : "#060A0F",
                        }}
                    >
                        <h2
                            className="text__topic"
                            style={{
                                color:
                                    value === "light" ? "#3F3F3F" : "#FFFFFF",
                            }}
                            onClick={this.hadleCheckbox}
                        >
                            Калькулятор дохода Affilate Coin
                        </h2>
                        <MainPart
                            sum={this.state.sum}
                            onChangeSum={this.handleSum}
                        />
                        <Term
                            onChangeTerm={this.handleTerm}
                            term={this.state.term}
                        />
                        <Checkbox
                            checkbox={this.hadleCheckbox}
                            checked={this.state.checkbox}
                        />
                        <Result result={this.state.result} />
                        <div
                            className="calculator__result__background"
                            style={{
                                background:
                                    value === "light" ? "#4D8D8D" : "#52AA91",
                            }}
                        ></div>
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}
