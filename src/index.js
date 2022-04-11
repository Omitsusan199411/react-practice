// package.jsonのdependenciesからimport
import React from "react";
import ReactDom from "react-dom";
import App from "./App.jsx";

// ReactDomオブジェクトのrender();メソッドを使い、コンポーネントを描画していく
ReactDom.render(<App />, document.getElementById("root"));
