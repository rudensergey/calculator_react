import React from "react";
import { ThemeContext } from "./themecontext.js";

export default class Term extends React.Component {
    handleTerm = (event, touch) => {
        var toggle = document.getElementById("toggle");
        var timeline = document.getElementById("timeline");
        var shiftX;
        const self = this;
        event.preventDefault();

        if (touch) {
            var touchLoc = event.targetTouches[0];
            shiftX = touchLoc.clientX - toggle.getBoundingClientRect().left;

            document.addEventListener("touchmove", onMouseMove);
            document.addEventListener("touchend", onMouseUp);

            function onMouseUp() {
                document.removeEventListener("touchmove", onMouseMove);
                document.removeEventListener("touchend", onMouseUp);
            }
        } else {
            shiftX = event.clientX - toggle.getBoundingClientRect().left;

            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);

            function onMouseUp() {
                document.removeEventListener("mouseup", onMouseUp);
                document.removeEventListener("mousemove", onMouseMove);
            }
        }

        function onMouseMove(event) {
            var newLeft;

            if (touch) {
                var touchLocation = event.targetTouches[0];

                newLeft =
                    touchLocation.clientX -
                    shiftX -
                    timeline.getBoundingClientRect().left;
            } else {
                newLeft =
                    event.clientX -
                    shiftX -
                    timeline.getBoundingClientRect().left;
            }

            var coords = timeline.getBoundingClientRect();

            var point =
                (coords.left + coords.width - 18 - (coords.left + 36)) / 335;

            self.props.onChangeTerm(
                Math.round((event.clientX - (coords.left + 36)) / point) + 30
            );

            if (newLeft < 0) newLeft = 0;
            var rightEdge = timeline.offsetWidth - toggle.offsetWidth;
            if (newLeft > rightEdge) newLeft = rightEdge;

            toggle.style.left = newLeft + "px";
        }
    };

    handleTouchDrag = (event) => {
        this.handleTerm(event, true);
    };

    handleMouseDrag = (event) => {
        this.handleTerm(event, false);
    };

    render() {
        return (
            <ThemeContext.Consumer>
                {(value) => (
                    <div className="calculator__term">
                        <h6
                            className="text__form theme-switcher"
                            style={{
                                color:
                                    value === "light"
                                        ? "#444444"
                                        : "rgba(255, 255, 255, 0.7)",
                            }}
                        >
                            Укажите срок инвестирования, дней
                        </h6>

                        <div className="term__timeline ">
                            <h6
                                className="theme-switcher"
                                style={{
                                    color:
                                        value === "light"
                                            ? "#b2b2b2"
                                            : "rgba(255, 255, 255, 0.3)",
                                }}
                            >
                                30
                            </h6>
                            <h6
                                id="term__current"
                                className="term__current theme-switcher"
                                style={{
                                    color:
                                        value === "light"
                                            ? "#3f3f3f"
                                            : "rgba(255, 255, 255, 0.7)",
                                }}
                            >
                                {this.props.term}
                            </h6>
                            <h6
                                className="theme-switcher"
                                style={{
                                    color:
                                        value === "light"
                                            ? "#b2b2b2"
                                            : "rgba(255, 255, 255, 0.3)",
                                }}
                            >
                                365
                            </h6>
                        </div>

                        <div
                            id="timeline"
                            className="term__line theme-switcher"
                            style={{
                                backgroundColor:
                                    value === "light"
                                        ? "#c4c4c4"
                                        : "rgba(255, 255, 255, 0.2)",
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor:
                                        value === "light"
                                            ? "#ffffff"
                                            : "#35393F",
                                    border:
                                        value === "light"
                                            ? "3px solid #4d8d8d"
                                            : "3px solid #52AA91",
                                }}
                                id="toggle"
                                className="term__toggle"
                                onTouchStart={this.handleTouchDrag}
                                onMouseDown={this.handleMouseDrag}
                            ></div>
                        </div>
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}
