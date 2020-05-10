var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    calculator__box: {
        minWidth: "320px",
        maxWidth: "650px",
        height: "650px",
        margin: "0px auto",
        borderRadius: "3px",
        background: "#FFFFFF",
        boxShadow: "0px 9px 14px rgba(0, 0, 0, 0.09)",
        display: "grid",
        gridTemplateColumns: "7% 86% 7%",
        gridTemplateRows: "5% 20% 20% 25% 10% 20%"
    },

    text__topic: {
        fontSize: "57px",
        fontWeight: "bold",
        cursor: "default",
        gridColumn: "2 / 3",
        gridRow: "2 / 3"
    },

    text__form: {
        color: "#B2B2B2",
        fontSize: "19px",
        fontWeight: "bold",
        cursor: "default"
    },

    calculator__sum: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        gridColumn: "2 / 3",
        gridRow: "3 / 4"
    },

    calculator__result: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gridColumn: "2 / 3",
        gridRow: "6 / 7",
        zIndex: "2"
    },

    calculator__result__text__form: {
        color: "white",
        opacity: "0.7",
        cursor: "default"
    },

    text__result: {
        color: "white",
        fontSize: "30px",
        fontWeight: "bold",
        cursor: "default"
    },

    calculator__result__background: {
        height: "100%",
        width: "100%",
        borderRadius: "0px 0px 3px 3px",
        gridColumn: "1 / -1",
        gridRow: "6 / 7",
        background: "#4D8D8D",
        zIndex: "1"
    }
};

var Calculator = function (_React$Component) {
    _inherits(Calculator, _React$Component);

    function Calculator(props) {
        _classCallCheck(this, Calculator);

        return _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this, props));
    }

    _createClass(Calculator, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { style: styles.calculator__box },
                React.createElement(
                    "h2",
                    { style: styles.text__topic },
                    "\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440 \u0434\u043E\u0445\u043E\u0434\u0430 Affilate Coin"
                ),
                React.createElement(MainPart, null),
                React.createElement(Result, null),
                React.createElement("div", { style: styles.calculator__result__background })
            );
        }
    }]);

    return Calculator;
}(React.Component);

var MainPart = function (_React$Component2) {
    _inherits(MainPart, _React$Component2);

    function MainPart(props) {
        _classCallCheck(this, MainPart);

        return _possibleConstructorReturn(this, (MainPart.__proto__ || Object.getPrototypeOf(MainPart)).call(this, props));
    }

    _createClass(MainPart, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { style: styles.calculator__sum },
                React.createElement(
                    "h6",
                    { style: styles.text__form },
                    "\u0421\u0443\u043C\u043C\u0430, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0445\u043E\u0442\u0438\u0442\u0435 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C, $"
                ),
                React.createElement("input", {
                    id: "sum",
                    "class": "calculator__input",
                    autocomplete: "off",
                    value: "0",
                    type: "number",
                    pattern: "[0-9]*",
                    inputmode: "decimal"
                })
            );
        }
    }]);

    return MainPart;
}(React.Component);

var Result = function (_React$Component3) {
    _inherits(Result, _React$Component3);

    function Result(props) {
        _classCallCheck(this, Result);

        return _possibleConstructorReturn(this, (Result.__proto__ || Object.getPrototypeOf(Result)).call(this, props));
    }

    _createClass(Result, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { style: styles.calculator__result },
                React.createElement(
                    "h6",
                    { style: Object.assign({}, styles.text__form, styles.calculator__result__text__form) },
                    "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442:"
                ),
                React.createElement(
                    "p",
                    { id: "result", style: styles.text__result },
                    "0.00$"
                )
            );
        }
    }]);

    return Result;
}(React.Component);

ReactDOM.render(React.createElement(Calculator, null), document.getElementById("root"));

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

// const scaleNames = {
//     c: "Celsius",
//     f: "Fahrenheit",
// };

// function toCelsius(fahrenheit) {
//     return ((fahrenheit - 32) * 5) / 9;
// }

// function toFahrenheit(celsius) {
//     return (celsius * 9) / 5 + 32;
// }

// function tryConvert(temperature, convert) {
//     const input = parseFloat(temperature);
//     if (Number.isNaN(input)) {
//         return "";
//     }
//     const output = convert(input);
//     const rounded = Math.round(output * 1000) / 1000;
//     return rounded.toString();
// }

// function BoilingVerdict(props) {
//     if (props.celsius >= 100) {
//         return <p>The water would boil.</p>;
//     }
//     return <p>The water would not boil.</p>;
// }

// class TemperatureInput extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange(e) {
//         this.props.onTemperatureChange(e.target.value);
//     }

//     render() {
//         const temperature = this.props.temperature;
//         const scale = this.props.scale;
//         return (
//             <fieldset>
//                 <legend>Enter temperature in {scaleNames[scale]}:</legend>
//                 <input value={temperature} onChange={this.handleChange} />
//             </fieldset>
//         );
//     }
// }

// class Calculator extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//         this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//         this.state = { temperature: "", scale: "c" };
//     }

//     handleCelsiusChange(temperature) {
//         this.setState({ scale: "c", temperature });
//     }

//     handleFahrenheitChange(temperature) {
//         this.setState({ scale: "f", temperature });
//     }

//     render() {
//         const scale = this.state.scale;
//         const temperature = this.state.temperature;
//         const celsius =
//             scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
//         const fahrenheit =
//             scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

//         return (
//             <div>
//                 <TemperatureInput
//                     scale="c"
//                     temperature={celsius}
//                     onTemperatureChange={this.handleCelsiusChange}
//                 />
//                 <TemperatureInput
//                     scale="f"
//                     temperature={fahrenheit}
//                     onTemperatureChange={this.handleFahrenheitChange}
//                 />
//                 <BoilingVerdict celsius={parseFloat(celsius)} />
//             </div>
//         );
//     }
// }

// ReactDOM.render(<Calculator />, document.getElementById("root"));

// class ProductCategoryRow extends React.Component {
//     render() {
//         const category = this.props.category;
//         return (
//             <tr>
//                 <th colSpan="2">{category}</th>
//             </tr>
//         );
//     }
// }

// class ProductRow extends React.Component {
//     render() {
//         const product = this.props.product;
//         const name = product.stocked ? (
//             product.name
//         ) : (
//             <span style={{ color: "red" }}>{product.name}</span>
//         );

//         return (
//             <tr>
//                 <td>{name}</td>
//                 <td>{product.price}</td>
//             </tr>
//         );
//     }
// }

// class ProductTable extends React.Component {
//     render() {
//         const rows = [];
//         let lastCategory = null;

//         this.props.products.forEach((product) => {
//             if (product.category !== lastCategory) {
//                 rows.push(
//                     <ProductCategoryRow
//                         category={product.category}
//                         key={product.category}
//                     />
//                 );
//             }
//             rows.push(<ProductRow product={product} key={product.name} />);
//             lastCategory = product.category;
//         });

//         return (
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Price</th>
//                     </tr>
//                 </thead>
//                 <tbody>{rows}</tbody>
//             </table>
//         );
//     }
// }

// class SearchBar extends React.Component {
//     render() {
//         return (
//             <form>
//                 <input type="text" placeholder="Search..." />
//                 <p>
//                     <input type="checkbox" /> Only show products in stock
//                 </p>
//             </form>
//         );
//     }
// }

// class FilterableProductTable extends React.Component {
//     render() {
//         return (
//             <div>
//                 <SearchBar />
//                 <ProductTable products={this.props.products} />
//             </div>
//         );
//     }
// }

// const PRODUCTS = [
//     {
//         category: "Sporting Goods",
//         price: "$49.99",
//         stocked: true,
//         name: "Football",
//     },
//     {
//         category: "Sporting Goods",
//         price: "$9.99",
//         stocked: true,
//         name: "Baseball",
//     },
//     {
//         category: "Sporting Goods",
//         price: "$29.99",
//         stocked: false,
//         name: "Basketball",
//     },
//     {
//         category: "Electronics",
//         price: "$99.99",
//         stocked: true,
//         name: "iPod Touch",
//     },
//     {
//         category: "Electronics",
//         price: "$399.99",
//         stocked: false,
//         name: "iPhone 5",
//     },
//     {
//         category: "Electronics",
//         price: "$199.99",
//         stocked: true,
//         name: "Nexus 7",
//     },
// ];

// ReactDOM.render(
//     <FilterableProductTable products={PRODUCTS} />,
//     document.getElementById("root")
// );