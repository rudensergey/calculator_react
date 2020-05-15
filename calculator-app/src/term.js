import React from "react";

export default class Term extends React.Component {
    constructor(props) {
        super(props);

        this.handleMouseDrag = this.handleMouseDrag.bind(this);
        this.handleTouchDrag = this.handleTouchDrag.bind(this);
        this.handleTerm = this.handleTerm.bind(this);
    }

    handleTerm(event, touch) {
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
    }

    handleTouchDrag(event) {
        this.handleTerm(event, true);
    }

    handleMouseDrag(event) {
        this.handleTerm(event, false);
    }

    render() {
        return (
            <div className="calculator__term">
                <h6 className="text__form">
                    Укажите срок инвестирования, дней
                </h6>

                <div className="term__timeline">
                    <h6>30</h6>
                    <h6 id="term__current" className="term__current">
                        {this.props.term}
                    </h6>
                    <h6>365</h6>
                </div>

                <div id="timeline" className="term__line">
                    <div
                        id="toggle"
                        className="term__toggle"
                        onTouchStart={this.handleTouchDrag}
                        onMouseDown={this.handleMouseDrag}
                    ></div>
                </div>
            </div>
        );
    }
}
