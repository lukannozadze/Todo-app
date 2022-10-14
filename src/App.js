import React, { useState } from "react";
import MainHeader from "./Components/MainHeader";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
function App() {
  const [listArr, setListArr] = useState([]);

  const copyListArr = listArr.slice();
  let filteredArr = [];
  const deleteTodo = (id) => {
    filteredArr = copyListArr.filter((item) => {
      return item.id !== id;
    });
    setListArr(filteredArr);
  };
  const saveListInformationHandler = (data) => {
    console.log(data);
    let listData = {
      listItem: data.listItem,
      id: data.id,
      status: data.status,
    };
    setListArr((prevState) => [...prevState, listData]);
  };

  return (
    <React.Fragment>
      <MainHeader />
      <AddTodo onSaveListInformation={saveListInformationHandler} />
      <TodoList
        data={listArr}
        className="mt-[-55px]  z-3"
        onDeleteTodo={deleteTodo}
      />
    </React.Fragment>
  );
}

export default App;
