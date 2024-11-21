// @ts-expect-error: React not used
import React from "react";

function SinglePost() {
  return (
    <div blog-post>
      <h3>Title</h3>
      <p>details</p>
    </div>
  );
}

export default SinglePost;
