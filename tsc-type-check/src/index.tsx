declare global {
  export namespace JSX {
    /**
     * 可以主动声明JSX.IntrinsicElements接口，并且向里面添加了 jj。
     * 但要注意的是，我们声明的种种类型，只针对类型检查。它仅仅保证了tsc在进行类型检查的正确性。而实际编译后的代码，因为会生成诸如：React.createElement("jj", ...)或_jsx('jj', ...)等调用的js代码。不难想到在实际运行过程中，React内部是无法处理这个所谓的jj的“内置标签”的，它就不明白这个"jj"是什么，所以在运行时一定会有错误。
     */
    interface IntrinsicElements {
      jj: { name: string; children?: Element };
    }
  }
}
const MyButton = (props) => <button>{props.children}</button>;

export function App() {
  return (
    <h1>
      <MyButton>Hello World</MyButton>
      <jj name="jj">
        <span>asd</span>
      </jj>
    </h1>
  );
}
