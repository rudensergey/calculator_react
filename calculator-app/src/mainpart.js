import React from "react";
import { ThemeContext } from "./themecontext.js";

export default class MainPart extends React.Component {
    handleChange = (e) => {
        this.props.onChangeSum(+(e.target.value + "").replace(/\D/gi, ""));
    };

    render() {
        return (
            <ThemeContext.Consumer>
                {(value) => (
                    <div className="calculator__sum">
                        <h6
                            className="text__form theme-switcher"
                            style={{
                                color:
                                    value === "light"
                                        ? "#B2B2B2"
                                        : "rgba(255, 255, 255, 0.7)",
                            }}
                        >
                            Сумма, которую хотите инвестировать, $
                        </h6>
                        <input
                            style={{
                                color:
                                    value === "light" ? "#333333" : "#FFFFFF",
                                border:
                                    value === "light"
                                        ? "4px solid #BDD0D1"
                                        : "4px solid #79CAB5",
                                backgroundColor:
                                    value === "light" ? "#FFFFFF" : "#35393F",
                            }}
                            value={this.props.sum}
                            maxLength={11}
                            className="calculator__input theme-switcher"
                            autoComplete="off"
                            pattern="[0-9]*"
                            inputMode="decimal"
                            onChange={this.handleChange}
                        />
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}
