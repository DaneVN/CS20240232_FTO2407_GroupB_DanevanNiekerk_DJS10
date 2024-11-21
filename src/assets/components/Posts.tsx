import React from "react";
import { useState } from "react";
import SinglePost from "./SinglePost";

function Posts() {
  //logic for api call and data fetching
  const [Error, setError] = useState(null);
  let postArray: object[];
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      postArray = data;
    })
    .catch((err) => {
      setError(err);
    });

  React.useEffect(() => {
    console.log(postArray);
  });

  return (
    <>
      <SinglePost title="" body=""></SinglePost>
      {Error && (
        <div api-error>
          <h2>Looks like something went wrong with the server.</h2>
          <h4> Please try again in a few minutes.</h4>
        </div>
      )}
    </>
  );
}
export default Posts;
