import React, { useState, useRef } from "react";
import { TimerApp } from "./component/Timer";
import CounterContext from "./store/CounterContext";
import AppTheme from "./ToggleTheme/AppTheme";
import CounterReducerApp from "./CounterReducer/CounterReducerApp";
import InputProject from "./component/InputProject";
import { AddButton } from "./component/AddButton";
import { TableDisplay } from "./component/Table";
import GetComponent from "./component/FetchGetComponent";
import PostComponent from "./component/FetchPostComponent";
import PutComponent from "./component/FetchPutComponent";
import DeleteComponent from "./component/FetchDeleteComponent";
import StateLogin from "./component/StateLogin";
import RefLogin from "./component/RefLogin";
import Header from "./component/HeaderComponent";

const ContextProviderComponent = () => {
  const [total, setTotal] = useState(0);
  const [entername, setEnterName] = useState(null);
  const inputRef = useRef();
  const [data, setData] = useState([]);

  // const location = useLocation();
  // console.log("location", location);

  const OnAddChange = (userName, userAge) => {
    setData((prevData) => {
      return [
        ...prevData,
        { firstname: userName, age: userAge, id: Math.random().toString() },
      ];
    });
    console.log("data", data);
  };

  const handleNameChange = () => {
    setEnterName(inputRef.current.value);
    inputRef.current.value = "";
  };
  return (
    <div>
      <Header />
      <CounterContext.Provider value={{ total, setTotal }}>
        <h1>Working form by using State</h1>
        <StateLogin />
        <hr />
        <h1>Working with Form and UserInput</h1>
        <RefLogin />
        <hr />
        <h1>Delete Method using api</h1>
        <DeleteComponent />
        <hr />
        <h1>Put Data using api</h1>
        <PutComponent />
        <hr />
        <h1>Post Data using api</h1>
        <PostComponent />
        <hr />
        <h1>Get Data using api</h1>
        <GetComponent />
        <hr />

        <h1>
          Whatever we write in input. It display on the screen when button click
          by using useState and callBack
        </h1>
        <AddButton OnButtonAdd={OnAddChange} />
        <TableDisplay data={data} />
        <hr />
        <h1>Input Project using useState</h1>
        <InputProject />
        <hr />
        <h1>Counter App using reducer</h1>
        <CounterReducerApp />
        <hr />
        <h1>Theme Toggle using Context</h1>
        <AppTheme />
        <hr />
        <h1>Name Change by using event "when input change"</h1>
        <p>welcome {entername ?? "unknown"}</p>
        <input ref={inputRef} type="text" />
        <button onClick={handleNameChange}>NameChange</button>
        <hr />
        <h1>Timer Change</h1>
        <TimerApp title="easy" targetTime={1} />
        <TimerApp title="medium" targetTime={5} />
        <TimerApp title="hard" targetTime={10} />
        <TimerApp title="very hard" targetTime={20} />
      </CounterContext.Provider>
    </div>
  );
};

export default ContextProviderComponent;
