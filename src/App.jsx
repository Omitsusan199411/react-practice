// 関数コンポーネントでuseState()関数、useEffect()を使用するためにreactの中のuseStateをimportする
// useStateを使用する場合は無限ループに気をつけること
import React, { useEffect, useState } from "react";
// defalut exportではなく、exportで子コンポーネント呼び出す場合は、{}で子コンポーネントを囲む必要がある。
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  // stateの定義。コンポーネントが持つ可変的（動的な）な状態・データ
  // 配列の分割代入。numはstateの変数名、setNumはstate(num)の状態を動的に変更（更新）するための関数
  // useState(初期値)は関数コンポーネントでstateを管理するための機能。（管理とは保持、更新のこと）
  // const [state, stateを更新する関数] = useState(初期値);で定義する。
  // stateの変数の値が変更されると、必ず再レンダリングされる
  const [num, setNum] = useState(0);
  // faceShowFragがtrueの時のみ、絵文字を表示させる
  const [faceShowFlag, setFaceShowFrag] = useState(false);

  const onClickButtonCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFrag(!faceShowFlag);
  };

  // useEffect()である変数の状態（[]の中の変数）が変われば、処理が実行される(関心の分離)
  // []の中に設定された変数のState値が変われば、useEffect()関数の処理が走る。（numの値が変わればuseEffect内の処理が走る）
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFrag(true);
      } else {
        faceShowFlag && setFaceShowFrag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

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
      {/* ボタンをクリックするとカウントアップ */}
      <button onClick={onClickButtonCountUp}>カウントアップ</button>
      <br />
      {/* ボタンをクリックすると絵文字の表示 */}
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      {/* numはuseStateの変数 */}
      <p>{num}</p>
      {/* 論理演算子、左がtrueの時に右側を返す */}
      {faceShowFlag && <p>(^ ^)</p>}
    </>
  );
};

// 他のファイルからこのファイルを呼び出せることを明言する(exportする)
export default App;
