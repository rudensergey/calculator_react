import React from "react";

export default class MainPart extends React.Component {
    handleChange = (e) => {
        this.props.onChangeSum(+(e.target.value + "").replace(/\D/gi, ""));
    };

    render() {
        return (
            <div className="calculator__sum">
                <h6 className="text__form" style={{ color: "#B2B2B2" }}>
                    Сумма, которую хотите инвестировать, $
                </h6>
                <input
                    style={{
                        color: "#333333",
                        border: "4px solid #BDD0D1",
                    }}
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
