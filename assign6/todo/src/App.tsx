import { FormEvent, useState } from "react";

function App() {
  const [todoList, setTodoList] = useState<string[]>([]);

  function ShowList() {
    let arr = [...todoList];
    let list = arr.map((item, index) => (
      <li key={index}>
        {item}<button onClick={e => handleDelete(index)}>delete</button>
      </li>));
    return (
      <ul>
        {list}
      </ul>
    )
  }

  function formHandle(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    let form = evt.currentTarget;
    let formData = new FormData(form);
    let formJson: any = Object.fromEntries(formData.entries());

    let arr = [...todoList];
    arr.push(formJson.todo);

    setTodoList(arr);
  }

  function handleDelete(index: number) {
    let arr = [...todoList];
    let arrx = [];
    for (let i = 0; i < arr.length; i++) {
      if (i == index) {
        continue;
      } else {
        arrx.push(arr[i]);
      }
    }
    setTodoList(arrx);
  }

  return (
    <div className="app">
      <h3>TODO List applicartion</h3>
      <form onSubmit={formHandle}>
        <input type="text" name="todo" />
        <input type="submit" value="submit" name="submit" />
      </form>
      <ShowList />
    </div>
  )
}

export default App;