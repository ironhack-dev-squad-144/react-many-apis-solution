import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import axios from "axios";

export default function PopularGithub() {
  console.log("PopularGithub: render");
  const [repos, setRepos] = useState([]);

  // When we write: useEffect(() => myFunction, [])
  // myFunction is executed only after the 1st render
  useEffect(() => {
    console.log("PopularGithub: useEffect (2nd parameter: [])");
    axios
      .get(
        "https://api.github.com/search/repositories?sort=stars&q=language:javascript"
      )
      .then(response => {
        console.log("DEBUG response.data.items", response.data.items);
        setRepos(response.data.items) // Change the state and re-render the component
      });

    // In this case, the return is not necessary
    // The clean up function is executed when the component is destroyed
    return () => {
      console.log("PopularGithub: clean up useEffect (2nd parameter: [])");
    }
  }, []);

  // When we write: useEffect(() => myFunction)
  // myFunction is executed after each render
  useEffect(() => {
    console.log("PopularGithub: useEffect (no 2nd parameter)");
    return () => {
      console.log("PopularGithub: clean up useEffect (no 2nd parameter)");
    }
  })

  return (
    <div>
      <h1>Popular on GitHub with JavaScript</h1>

      <Table>
        <thead>
          <tr>
            <th>⭐️</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {repos.map(repo => (
            <tr key={repo.id}>
              <td>{repo.stargazers_count}</td>
              <td>
                <a href={repo.html_url}>{repo.full_name}</a>
              </td>
              <td>{repo.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
