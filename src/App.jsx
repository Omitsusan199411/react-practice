import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert("Hi");
  // returnでJSX構文(HTML要素)を返す。複数のHTMLコードがある場合はreturnの後に()を付ける
  return (
    <>
      {/* jsx記法でjavascriptを記述する場合はその記述を{}で囲む */}
      <h1 style={{ color: "red" }}>こんちにちは！</h1>
      {/* propｓはコンポーネントタグに属性として埋め込む */}
      {/* colorはprops */}
      {/* 下記はprops(引数のようなもの)をコンポーネント(ColorfulMessage)に渡す */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

// 他のファイルからこのファイルを呼び出せることを明言する(exportする)
export default App;
