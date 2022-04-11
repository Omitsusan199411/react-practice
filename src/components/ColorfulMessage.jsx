import React from "react";

// App.jsxからpropsを受け取るコンポーネント
const ColorfulMessage = (props) => {
  // オブジェクトの分割代入
  const { color, children } = props;
  const contentStyle = {
    color: color,
    fontSize: "18px"
  };
  return (
    // props.childrenはColorfulMessage.jsxから<ColorfulMessage>タグで囲った中身が格納されている
    <p style={contentStyle}>{children}</p>
  );
};

export default ColorfulMessage;
