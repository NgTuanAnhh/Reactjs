import React, { useState } from 'react';

import ToDoList from './components/ToDoList/ToDoList';
import ToDoInput from './components/ToDoInput/ToDoInput';
import './App.css';

function App() {

  const [toDoDatas, setToDoDatas] = useState([
    {text: 'Có làm thì mới có ăn', id: 'jn1'},
    {text: 'Không làm mà đòi ăn', id: 'jn2'},
    {text: 'Thì chỉ có ăn ..., ăn ...', id: 'jn3'}
  ])

  const addToDoHandler = (enterText) => {
    // const updateData = [{text: enterText, id: Math.random().toString()}];
    // const listToDoData = [...updateData, ...toDoDatas]
    // setToDoDatas(todo => {
    //   const updateDatas = [...todo]
    //   updateDatas.unshift({text: enterText, id: Math.random().toString()})
    //   return updateDatas
    // })
    setToDoDatas(todo => {
      // const uppdate = [...todo, {text: enterText, id: Math.random().toString()}]
      // console.log(uppdate)
      return [{text: enterText, id: Math.random().toString()}, ...todo]
    })
  }

  const deleteItemHandler = (toDoId) => {
    // setToDoDatas(todo => {
    //   const updateDatas = todo.filter(todo => todo.id !== toDoId)
    //   return updateDatas
    // })
    setToDoDatas(todo => {
      return todo.filter(todo => todo.id !== toDoId);
    })
  }

  let content = (<p style={{ textAlign: 'center' }}>No to do found. Maybe add one?</p>);

  if(toDoDatas.length > 0){
    content = (<ToDoList items={toDoDatas} onDeleteItem={deleteItemHandler}/>)
  }

  return (
    <div>
      <section id='todo-form'>
        <ToDoInput addToDO={addToDoHandler}/>
      </section>
      <section id='todo-form'>
        {content}
      </section>
    </div>
  );
}

export default App;
