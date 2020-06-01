import React from "react";
import { ThemeContext } from "./themecontext.js";

export default function Result(props) {
    return (
        <ThemeContext.Consumer>
            {(value) => (
                <div className="calculator__result">
                    <h6
                        className="text__form theme-switcher"
                        style={{
                            color: value === "light" ? "white" : "#FFFFFF",
                        }}
                    >
                        Результат:
                    </h6>
                    <p
                        id="result"
                        className="text__result theme-switcher"
                        style={{ color: "white" }}
                    >
                        {props.result}
                    </p>
                </div>
            )}
        </ThemeContext.Consumer>
    );
}
