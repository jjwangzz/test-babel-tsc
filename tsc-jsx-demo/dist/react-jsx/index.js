"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var MyButton = function (props) { return (0, jsx_runtime_1.jsx)("button", { children: props.children }); };
function App() {
    return ((0, jsx_runtime_1.jsx)("h1", { children: (0, jsx_runtime_1.jsx)(MyButton, { children: "Hello World" }) }));
}
