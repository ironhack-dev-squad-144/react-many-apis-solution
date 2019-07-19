import React, { useState, useEffect } from "react";
import { Table, Input, Label } from "reactstrap";
import axios from "axios";

export default function PopularGithub() {
  console.log("PopularGithub: render");
  const [repos, setRepos] = useState([]);
  const [language, setLanguage] = useState("javascript");
  const [page, setPage] = useState(1);

  // When we write: useEffect(() => myFunction, [language,page])
  // myFunction is executed after the 1st render and when language or page is changed
  useEffect(() => {
    console.log("PopularGithub: useEffect (2nd parameter: [])");
    axios
      .get(
        "https://api.github.com/search/repositories?sort=stars&per_page=50&q=language:" +
          language +
          "&page=" +
          page
      )
      .then(response => {
        console.log("DEBUG response.data.items", response.data.items);
        setRepos(response.data.items); // Change the state and re-render the component
      });

    // In this case, the return is not necessary
    // The clean up function is executed when the component is destroyed
    return () => {
      console.log("PopularGithub: clean up useEffect (2nd parameter: [])");
    };
  }, [language,page]);

  // When we write: useEffect(() => myFunction)
  // myFunction is executed after each render
  useEffect(() => {
    console.log("PopularGithub: useEffect (no 2nd parameter)");
    return () => {
      console.log("PopularGithub: clean up useEffect (no 2nd parameter)");
    };
  });

  function handleLanguageChange(e) {
    setRepos([]);
    setLanguage(e.target.value);
  }

  function handlePageChange(e) {
    setRepos([]);
    setPage(e.target.value)
  }

  return (
    <div>
      <h1>Popular on GitHub</h1>

      <div className="my-5">
        <Label>Select a language</Label>
        <Input
          type="select"
          name="language"
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="css">CSS</option>
          <option value="html">HTML</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="ruby">Ruby</option>
        </Input>
        <Label>Select a page</Label>
        <Input
          type="number"
          name="page"
          value={page}
          onChange={handlePageChange}
        />
      </div>

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
