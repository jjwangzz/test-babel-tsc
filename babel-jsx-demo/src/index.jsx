const MyButton = (props) => <button>{props.children}</button>;

function App() {
  return (
    <h1>
      <MyButton>Hello World</MyButton>
    </h1>
  );
}
