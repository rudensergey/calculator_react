import React from "react";
import Mark from "./media/mark.png";

export default class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.mark = "markNone";
        this.checkboxColor = "checkmarkNoActive";
    }

    handleClick = (e) => {
        e.preventDefault();
        this.props.checkbox();
        this.mark === "mark" ? (this.mark = "markNone") : (this.mark = "mark");
        this.checkboxColor === "checkmarkNoActive"
            ? (this.checkboxColor = "checkmarkActive")
            : (this.checkboxColor = "checkmarkNoActive");
    };

    render() {
        return (
            <div className="calculator__checkbox">
                <img src={Mark} className={this.mark} alt="React Logo" />
                <label
                    style={{ color: "#3F3F3F" }}
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
                    <span
                        style={{
                            backgroundColor:
                                (this.checkboxColor === "checkmarkNoActive"
                                    ? "rgb(231, 231, 231)"
                                    : "#4D8D8D"),
                        }}
                        className={this.checkboxColor}
                    ></span>
                </label>
            </div>
        );
    }
}
