// @ts-expect-error: React not used
import React from "react";

function SinglePost({ title, body }: { title: string; body: string }) {
  return (
    <div blog-post>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

export default SinglePost;
