import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var MyButton = function (props) { return _jsx("button", { children: props.children }); };
export function App() {
    return (_jsxs("h1", { children: [_jsx(MyButton, { children: "Hello World" }), _jsx("jj", { name: "jj", children: _jsx("span", { children: "asd" }) })] }));
}
