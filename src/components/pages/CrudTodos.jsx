import React, { useState, useEffect } from "react";
import { Button, Input, Table } from "reactstrap";
import axios from "axios";

export default function CrudTodos() {
  const [todos, setTodos] = useState([]);
  const [item, setItem] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/todos").then(response => {
      console.log("TCL: CrudTodos -> response", response);
      setTodos(response.data);
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault(); // Stop the form submission
    // Send a POST request to the server
    axios.post("http://localhost:8000/todos", { item: item }).then(response => {
      console.log(response.data);
      let newTodo = response.data;
      setTodos([...todos, newTodo]);
      setItem("");
    });
  }

  function handleDelete(id) {
    axios.delete("http://localhost:8000/todos/"+id)
    .then(response => {
      console.log(response.data)
      setTodos(todos.filter(todo => id !== todo.id))
    })
  }

  return (
    <div>
      <h1>CRUD TODOs</h1>

      <Table>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.id} {todo.item}</td>
              <td>
                <Button color="danger" outline onClick={() => handleDelete(todo.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
          <tr>
            <td />
            <td />
          </tr>
        </tbody>
      </Table>

      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={item}
          onChange={e => setItem(e.target.value)}
        />
        <Button color="primary" outline>
          Create TODO
        </Button>
      </form>

      <p>You need to:</p>
      <ol>
        <li>
          Execute the following command:{" "}
          <code>json-server --watch db.json --port 8000</code>
        </li>
        <li>
          Test the API with Postman by send the following request:{" "}
          <code>GET http://localhost:8000/todos</code>
        </li>
        <li>Display the list of all TODOs</li>
        <li>
          Add a TODO item by doing the following request:{" "}
          <code>POST http://localhost:8000/todos</code>{" "}
        </li>
        <li>Delete a TODO item</li>
      </ol>
    </div>
  );
}
