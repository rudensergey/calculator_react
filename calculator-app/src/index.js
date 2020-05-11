import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./style.css";
import "./calculator.css";
import "./mobile.css";
import Mark from './mark.png';
class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checkbox: false
        }

        this.hadleCheckbox = this.hadleCheckbox.bind(this)
    }

    hadleCheckbox() {
        this.state.checkbox ? this.setState({checkbox: false}) : this.setState({checkbox: true})
        console.log(this.state.checkbox)
    }

    render() {
        return (
            <div className="calculator__box">
                <h2 className="text__topic" onClick={this.hadleCheckbox}>
                    Калькулятор дохода Affilate Coin
                </h2>
                <MainPart />
                <Term />
                <Checkbox checkbox={this.hadleCheckbox} checked={this.state.checkbox}/>
                <Result />
                <div className="calculator__result__background"></div>
            </div>
        );
    }
}

class MainPart extends React.Component {
    render() {
        return (
            <div className="calculator__sum">
                <h6 className="text__form">
                    Сумма, которую хотите инвестировать, $
                </h6>
                <input
                    className="calculator__input"
                    id="sum"
                    autoComplete="off"
                    value="0"
                    type="number"
                    pattern="[0-9]*"
                    inputMode="decimal"
                />
            </div>
        );
    }
}

class Term extends React.Component {
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
                    <div id="toggle" className="term__toggle"></div>
                </div>
            </div>
        );
    }
}

class Checkbox extends React.Component {
    constructor(props){
        super(props)
        this.mark = "markNone"
        this.checkboxColor = "checkmarkNoActive"
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault()
        console.log("checkbox click")
        this.props.checkbox()
        this.mark === "mark" ? this.mark = "markNone" : this.mark = "mark";
        this.checkboxColor === "checkmarkNoActive" ? this.checkboxColor = "checkmarkActive" : this.checkboxColor = "checkmarkNoActive";
    }

    render() {
        return (
            <div className="calculator__checkbox">
                <img src={Mark} className={this.mark} alt="React Logo" />
                <label onClick={this.handleClick} id="checkboxLayout" className="container text__form">
                    Учесть рост курса AFFILATE
                    <input id="checkboxInput" type="checkbox" defaultChecked={this.props.checked}/>
                    <span className={this.checkboxColor}></span>
                </label>
            </div>
        );
    }
}

class Result extends React.Component {
    render() {
        return (
            <div className="calculator__result">
                <h6 className="text__form">Результат:</h6>
                <p id="result" className="text__result">
                    0.00$
                </p>
            </div>
        );
    }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
