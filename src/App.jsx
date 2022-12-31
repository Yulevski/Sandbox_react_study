/* eslint react-hooks/exhaustive-deps: off*/
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    //関数定義
    setNum(num + 1);
  };

  //numがsetnumで更新される
  const [num, setNum] = useState(0); //num変数、setnum変数を操作する関数,初期値0
  const [faceShowFlag, setFaceShowFlag] = useState(true);
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  //空の配列を渡すと最初の一回だけ関数のなかを通る。
  //配列の中の変数numが変化したときだけ中を通る。
  //関数の中で使われた変数は全て書いた方が良い。
  //numを監視する関数
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>hello</h1>
      {/* コンポーネントにPropsとして渡す 名前定義=propsとして渡したい要素*/}
      <ColorfulMessage color="blue"> how are you? </ColorfulMessage>
      <ColorfulMessage color="pink">I am fine </ColorfulMessage>
      <button onClick={onClickCountUp}>countup!</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^^♪</p>}
    </> //{jsが書ける}{オブジェクトとしてスタイル定義}
  );
};

export default App; //他のファイルでも使えるようになる
