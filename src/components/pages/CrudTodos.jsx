import React from "react";

export default function CrudTodos() {
  return (
    <div>
      <h1>CRUD TODOs</h1>
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
