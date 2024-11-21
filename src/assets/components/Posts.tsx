import React from "react";
import SinglePost from "./SinglePost";
import { Post } from "../interfaces/Post";

function Posts() {
  //logic for api call and data fetching
  const [error, setError] = React.useState<string | null>(null);
  const [posts, setPosts] = React.useState<
    { userId: number; id: number; title: string; body: string }[]
  >([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    // Fetch data when the component mounts
    async function fetchPosts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data: Post[] = await response.json();
        setPosts(data); // Update state with the fetched posts
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message); // Set error message
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error && (
        <div api-error>
          {/* <h2>Something went wrong with the server:</h2>
          <h4>{error}</h4> */}
          <h2>Data fetching failed</h2>
        </div>
      )}

      {/* Render the list of posts */}
      {!loading && !error && (
        <div>
          {posts.map((post) => (
            <SinglePost title={`${post.id}. ${post.title}`} body={post.body} />
          ))}
        </div>
      )}
    </>
  );
}
export default Posts;
