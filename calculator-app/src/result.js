import React from "react";
import { ThemeContext } from "./themecontext.js";

export default function Result(props) {
    return (
        <ThemeContext.Consumer>
            {(value) => (
                <div className="calculator__result">
                    <h6
                        className="text__form"
                        style={{
                            color: value === "light" ? "white" : "#FFFFFF",
                        }}
                    >
                        Результат:
                    </h6>
                    <p
                        id="result"
                        className="text__result"
                        style={{ color: "white" }}
                    >
                        {props.result}
                    </p>
                </div>
            )}
        </ThemeContext.Consumer>
    );
}
