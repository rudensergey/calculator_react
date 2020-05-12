import React from "react";
import Mark from "./mark.png";

export default class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.mark = "markNone";
        this.checkboxColor = "checkmarkNoActive";
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.checkbox();
        this.mark === "mark" ? (this.mark = "markNone") : (this.mark = "mark");
        this.checkboxColor === "checkmarkNoActive"
            ? (this.checkboxColor = "checkmarkActive")
            : (this.checkboxColor = "checkmarkNoActive");
    }

    render() {
        return (
            <div className="calculator__checkbox">
                <img src={Mark} className={this.mark} alt="React Logo" />
                <label
                    onClick={this.handleClick}
                    id="checkboxLayout"
                    className="container text__form"
                >
                    Учесть рост курса AFFILATE
                    <input
                        id="checkboxInput"
                        type="checkbox"
                        defaultChecked={this.props.checked}
                    />
                    <span className={this.checkboxColor}></span>
                </label>
            </div>
        );
    }
}
