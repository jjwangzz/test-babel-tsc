var MyButton = function (props) { return React.createElement("button", null, props.children); };
function App() {
    return (React.createElement("h1", null,
        React.createElement(MyButton, null, "Hello World")));
}
