import React, { useState } from "react";
import MainHeader from "./Components/MainHeader";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
function App() {
  const [listArr, setListArr] = useState([]);
  const saveListInformationHandler = (data) => {
    let listData = {
      listItem: data,
      id: Math.random().toString(),
    };
    setListArr((prevState) => [...prevState, listData]);
  };

  return (
    <React.Fragment>
      <MainHeader />
      <AddTodo onSaveListInformation={saveListInformationHandler} />
      <TodoList data={listArr} className="mt-[-55px]  z-3" />
    </React.Fragment>
  );
}

export default App;
