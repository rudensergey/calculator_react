import React from "react";

export default class MainPart extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChangeSum(+(e.target.value + "").replace(/\D/gi, ""));
    }

    render() {
        return (
            <div className="calculator__sum">
                <h6 className="text__form">
                    Сумма, которую хотите инвестировать, $
                </h6>
                <input
                    value={this.props.sum}
                    maxLength={11}
                    className="calculator__input"
                    autoComplete="off"
                    pattern="[0-9]*"
                    inputMode="decimal"
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}
