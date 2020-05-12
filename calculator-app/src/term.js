import React from "react";

export default class Term extends React.Component {
    constructor(props) {
        super(props);

        this.handleMouseDrag = this.handleMouseDrag.bind(this);
        this.handleTouchDrag = this.handleTouchDrag.bind(this);
    }

    handleTouchDrag(event) {
        console.log("touch");

        var toggle = document.getElementById("toggle");
        var timeline = document.getElementById("timeline");
        let self = this;

        event.preventDefault();

        var touchLoc = event.targetTouches[0];
        var shiftX = touchLoc.clientX - toggle.getBoundingClientRect().left;

        document.addEventListener("touchmove", onMouseMove);
        document.addEventListener("touchend", onMouseUp);

        function onMouseMove(e) {
            var touchLocation = e.targetTouches[0];

            var newLeft =
                touchLocation.clientX -
                shiftX -
                timeline.getBoundingClientRect().left;

            var coords = timeline.getBoundingClientRect();

            var point =
                (coords.left + coords.width - 18 - (coords.left + 36)) / 345;

            self.props.onChangeTerm(
                Math.round(
                    (touchLocation.clientX - (coords.left + 36)) / point
                ) + 30
            );

            // курсор вышел из слайдера => оставить бегунок в его границах.
            if (newLeft < 0) newLeft = 0;
            var rightEdge = timeline.offsetWidth - toggle.offsetWidth;
            if (newLeft > rightEdge) newLeft = rightEdge;

            toggle.style.left = newLeft + "px";
        }

        function onMouseUp() {
            document.removeEventListener("touchmove", onMouseMove);
            document.removeEventListener("touchend", onMouseUp);
        }
    }

    handleMouseDrag(event) {
        var toggle = document.getElementById("toggle");
        var timeline = document.getElementById("timeline");
        const self = this;

        event.preventDefault();

        var shiftX = event.clientX - toggle.getBoundingClientRect().left;

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);

        function onMouseMove(event) {
            var newLeft =
                event.clientX - shiftX - timeline.getBoundingClientRect().left;

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

        function onMouseUp() {
            document.removeEventListener("mouseup", onMouseUp);
            document.removeEventListener("mousemove", onMouseMove);
        }
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
                        30
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
