import React from "react";
import ReactDOM from "react-dom";
import Calculator from "./calculator.js";
import { ThemeContext } from "./themecontext.js";

import "./style/style.css";
import "./style/calculator.css";
import "./style/mobile.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { theme: "light" };
    }

    changeTheme = () => {
        this.state.theme === "light"
            ? this.setState({ theme: "dark" })
            : this.setState({ theme: "light" });
    };

    render() {
        const { theme } = this.state;

        return (
            <ThemeContext.Provider value={theme}>
                <Calculator />
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <button className="theme-button" onClick={this.changeTheme}>
                        Поменять тему
                    </button>
                </div>
            </ThemeContext.Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
