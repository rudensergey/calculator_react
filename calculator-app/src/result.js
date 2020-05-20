import React from "react";

export default function Result(props) {
    return (
        <div className="calculator__result">
            <h6 className="text__form">Результат:</h6>
            <p id="result" className="text__result">
                {props.result}
            </p>
        </div>
    );
}
