import React, { useState } from "react";
import MainHeader from "./Components/MainHeader";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
function App() {
  const [listArr, setListArr] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const copyListArr = listArr.slice();
  let completed, active;
  let listData = {};

  //DELETE TODO
  let filteredArr = [];
  const deleteTodo = (id) => {
    filteredArr = copyListArr.filter((item) => {
      return item.id !== id;
    });
    setListArr(filteredArr);
  };
  //CLEAR COMPLETED ITEMS
  const deleteCompleted = () => {
    setListArr(active);
  };
  //CHANGE STATUS WHEN CHECKBOX IS CHECKED

  const changeStatus = (id) => {
    copyListArr.forEach((item) => {
      if (item.id === id) {
        return (item.status = !item.status);
      }
    });
  };

  //////////////////FILTER/////////////////////
  //FILTER AND RENDER ACTIVE LIST ITEMS
  let activesArr = copyListArr.filter((item) => {
    return !item.status;
  });
  active = activesArr;

  const renderActives = () => {
    setFilterStatus("active");
  };
  //FILTER AND RENDER COMPLETED LIST ITEMS
  let completedArr = copyListArr.filter((item) => {
    return item.status;
  });
  completed = completedArr;

  const renderCompleted = () => {
    setFilterStatus("completed");
  };
  //FILTER AND RENDER ALL LIST ITEMS

  const renderAll = () => {
    setFilterStatus("all");
  };

  //GENERATE AND UPDATE TODO LIST
  const saveListInformationHandler = (data) => {
    listData = {
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
        data={
          filterStatus === "all"
            ? listArr
            : filterStatus === "active"
            ? active
            : completed
        }
        className="mt-[-55px]  z-3"
        onDeleteTodo={deleteTodo}
        onChangeStatus={changeStatus}
        onRenderActives={renderActives}
        onRenderCompleted={renderCompleted}
        onDeleteCompleted={deleteCompleted}
        onRenderAll={renderAll}
      />
    </React.Fragment>
  );
}

export default App;
