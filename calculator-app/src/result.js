import React from "react";

export default class Result extends React.Component {
    render() {
        return (
            <div className="calculator__result">
                <h6 className="text__form">Результат:</h6>
                <p id="result" className="text__result">
                    {this.props.result}
                </p>
            </div>
        );
    }
}
