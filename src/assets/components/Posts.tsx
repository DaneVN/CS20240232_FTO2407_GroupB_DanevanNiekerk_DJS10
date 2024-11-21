import { useState } from "react";
import SinglePost from "./SinglePost";

function Posts() {
  //logic for api call and data fetching
  const [error, setError] = useState(null);

  interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  async function createPosts() {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Responce came back not ok");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        return data.map((item: Post) => (
          <SinglePost
            title={`${item.id}. ${item.title}`}
            body={item.body}
          ></SinglePost>
        ));
      })
      .catch((err) => {
        setError(err);
      });
  }

  return (
    <>
      {createPosts()}
      {error && (
        <div api-error>
          <h2>Looks like something went wrong with the server.</h2>
          <h4> Please try again in a few minutes.</h4>
        </div>
      )}
    </>
  );
}
export default Posts;
