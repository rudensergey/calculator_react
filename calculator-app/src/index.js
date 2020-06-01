import React from "react";
import ReactDOM from "react-dom";
import Calculator from "./calculator.js";
import { ThemeContext } from "./themecontext.js";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { theme: "light" };
    }

    componentDidMount = () => {
        setInterval(() => {
            this.state.theme === "light"
                ? this.setState({ theme: "dark" })
                : this.setState({ theme: "light" });
        }, 2000);
    };

    render() {
        return (
            <ThemeContext.Provider value={this.state.theme}>
                <Calculator />
            </ThemeContext.Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
