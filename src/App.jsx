// 関数コンポーネントでuseState()関数を使用するためにreactの中のuseStateをimportする
import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButtonCountUp = () => {
    setNum(num + 1);
  };
  // stateの定義。コンポーネントが持つ可変的（動的な）な状態・データ
  // 配列の分割代入。numはstateの変数名、setNumはstate(num)の状態を動的に変更（更新）するための関数
  // useState(初期値)は関数コンポーネントでstateを管理するための機能。（管理とは保持、更新のこと）
  // const [state, stateを更新する関数] = useState(初期値);で定義する。
  const [num, setNum] = useState(0);
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
      <button onClick={onClickButtonCountUp}>カウントアップ</button>
      {/* numはuseStateの変数 */}
      <p>{num}</p>
    </>
  );
};

// 他のファイルからこのファイルを呼び出せることを明言する(exportする)
export default App;
