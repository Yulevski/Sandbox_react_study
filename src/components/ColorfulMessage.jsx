import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props; //props.color etcと書かなくてよい
  const contentSyle = {
    //propsの色を指定
    // color: color,
    color,
    fontSize: "18px"
  };

  return <p style={contentSyle}>{children}</p>;
  //変数を定義するとPropsとして受け取れる
  // const contentSyle = {
  //   //propsの色を指定
  //   color: props.color,
  //   fontSize: "18px"
  // };

  // return <p style={contentSyle}>{props.children}</p>;
  //childrenで<>で囲まれたテキストを取り入れる
};

export default ColorfulMessage;
