var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// function formatDate(date) {
//     return date.toLocaleTimeString();
// }

// function Avatar(props) {
//     return (
//         <img
//             className="Avatar"
//             src={props.user.avatarUrl}
//             alt={props.user.name}
//         />
//     );
// }

// function UserInfo(props) {
//     return (
//         <div className="UserInfo">
//             <Avatar user={props.user} />
//             <div className="UserInfo-name">{props.user.name}</div>
//         </div>
//     );
// }

// function CommentText(props) {
//     return <div className="Comment-text">{props.comment}</div>;
// }

// function CommentDate(props) {
//     return <div className="Comment-date">{formatDate(props.date)}</div>;
// }

// function Comment(props) {
//     return (
//         <div className="Comment">
//             <UserInfo user={props.author} />
//             <CommentText comment={props.text} />
//             <CommentDate date={props.date} />
//         </div>
//     );
// }

// const comment = {
//     date: new Date(),
//     text: "I hope you enjoy learning React!",
//     author: {
//         name: "Hello Kitty",
//         avatarUrl: "https://placekitten.com/g/64/64",
//     },
// };

// <Comment date={comment.date} text={comment.text} author={comment.author} />;

// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             date: new Date(),
//         };
//     }

//     componentDidMount() {
//         this.timerID = setInterval(() => this.tick(), 1000);
//     }

//     componentWillUnmoint() {
//         clearInterval(this.timerID);
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>Настоящее время: {this.state.date.toLocaleTimeString()}</h2>
//             </div>
//         );
//     }

//     tick() {
//         this.setState({date: new Date()})
//     }
// }

// ReactDOM.render(<Clock />, document.getElementById("root"));

// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isToggeOn: false,
//         };
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         this.setState((state) => ({
//             isToggeOn: !state.isToggeOn,
//         }));
//     }

//     render() {
//         return (
//             <button onClick={this.handleClick}>
//                 {this.state.isToggeOn ? "Включен" : "Выключен"}
//             </button>
//         );
//     }
// }

// ReactDOM.render(<Toggle />, document.getElementById("root"));

// function GreetGuest(props) {
//     return <h1>Привет гость!</h1>;
// }

// function GreetStranger(props) {
//     return <h1>Привет незнакомец!</h1>;
// }

// function Greeting(props) {
//     if (props.isStranger) {
//         return <GreetGuest />;
//     } else {
//         return <GreetStranger />;
//     }
// }

// function LoginButton(props) {
//     return <button onClick={props.onClick}>Войти</button>;
// }

// function LogoutButton(props) {
//     return <button onClick={props.onClick}>Выйти</button>;
// }

// class LoginControl extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogoutClick = this.handleLogoutClick.bind(this);
//         this.state = {
//             isLoggedIn: false,
//         };
//     }

//     handleLoginClick() {
//         this.setState({ isLoggedIn: true });
//     }

//     handleLogoutClick() {
//         this.setState({ isLoggedIn: false });
//     }

//     render() {
//         const isLogged = this.state.isLoggedIn;

//         return (
//             <div>
//                 <Greeting isStranger={isLogged} />
//                 {isLogged ? (
//                     <LogoutButton onClick={this.handleLogoutClick} />
//                 ) : (
//                     <LoginButton onClick={this.handleLoginClick} />
//                 )}
//             </div>
//         );
//     }
// }

// ReactDOM.render(<LoginControl />, document.getElementById("root"));

// function ShowList(props) {
//     let list = props.numbers.map((a) => <li key={a.toString()}>{a}</li>);
//     return <ul>{list}</ul>;
// }

// const input = [1,2,3,4,5,6,7,8,9];

// ReactDOM.render(<ShowList numbers={input}/>, document.getElementById('root'))

// class NameForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { value: "картошка" };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({ value: event.target.value });
//     }

//     handleSubmit() {
//         alert("Привет! " + this.state.value);
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Введи свой овощь:
//                     <select value={this.state.value} onChange={this.handleChange}>
//                         <option value="капуста">Капуста</option>
//                         <option value="картошка">Картошка</option>
//                         <option value="имбирь">Имбирь</option>
//                         <option value="морковь">Морковь</option>
//                         <option value="сельдерей">Сельдерей</option>
//                     </select>
//                 </label>

//                 <input type="submit" value="Отправить" />
//             </form>
//         );
//     }
// }

// ReactDOM.render(<NameForm />, document.getElementById("root"));

// class Reservation extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             isGoing: true,
//             numberOfGuests: 2,
//         }
//         this.handleInputChange = this.handleInputChange.bind(this);
//     }

//     handleInputChange(event) {
//         const target = event.target;
//         const value = target.name === "isGoing" ? target.checked : target.value;
//         const name = target.name;

//         this.setState({
//             [name]: value,
//         })
//     }

//     render() {
//         return (
//             <form>
//                 <label>
//                     Пойду:
//                     <input
//                         name="isGoing"
//                         type="checkbox"
//                         checked={this.state.isGoing}
//                         onChange={this.handleInputChange}
//                     />
//                 </label>
//                 <br />
//                 <label>
//                     Количество гостей:
//                     <input
//                         name="numberOfGuests"
//                         type="number"
//                         value={this.state.numberOfGuests}
//                         onChange={this.handleInputChange}
//                     />
//                 </label>
//             </form>
//         )
//     }
// }

// ReactDOM.render(<Reservation />, document.getElementById('root'))

function BoilingVerdict(props) {
    if (props.tempScale === "f") {
        if (props.celsius >= 220) {
            return React.createElement(
                "p",
                null,
                "The water would boil."
            );
        }
        return React.createElement(
            "p",
            null,
            "The water would not boil."
        );
    } else {
        if (props.celsius >= 100) {
            return React.createElement(
                "p",
                null,
                "The water would boil."
            );
        }
        return React.createElement(
            "p",
            null,
            "The water would not boil."
        );
    }
}

var scaleNames = {
    f: "Фаренгейта",
    c: "Цельсия"
};

var TemperatureInput = function (_React$Component) {
    _inherits(TemperatureInput, _React$Component);

    function TemperatureInput(props) {
        _classCallCheck(this, TemperatureInput);

        var _this = _possibleConstructorReturn(this, (TemperatureInput.__proto__ || Object.getPrototypeOf(TemperatureInput)).call(this, props));

        _this.handleChange = _this.handleChange.bind(_this);
        _this.state = { temperature: "" };
        return _this;
    }

    _createClass(TemperatureInput, [{
        key: "handleChange",
        value: function handleChange(e) {
            this.setState({ temperature: e.target.value });
        }
    }, {
        key: "render",
        value: function render() {
            var temperature = this.state.temperature;
            var scale = this.props.scale;
            return React.createElement(
                "fieldset",
                null,
                React.createElement(
                    "legend",
                    null,
                    "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0443 \u0432 \u0433\u0440\u0430\u0434\u0443\u0441\u0430\u0445 ",
                    scaleNames[scale],
                    ":"
                ),
                React.createElement("input", { value: temperature, onChange: this.handleChange }),
                React.createElement(BoilingVerdict, { celsius: parseFloat(temperature), tempScale: scale })
            );
        }
    }]);

    return TemperatureInput;
}(React.Component);

var Calculator = function (_React$Component2) {
    _inherits(Calculator, _React$Component2);

    function Calculator() {
        _classCallCheck(this, Calculator);

        return _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).apply(this, arguments));
    }

    _createClass(Calculator, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(TemperatureInput, { scale: "f" }),
                React.createElement(TemperatureInput, { scale: "c" })
            );
        }
    }]);

    return Calculator;
}(React.Component);

ReactDOM.render(React.createElement(Calculator, null), document.getElementById("root"));