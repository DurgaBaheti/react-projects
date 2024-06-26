import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components/index";
import service from "../appwrite/config";

function AllPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    service.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          posts :-
          {posts.map((document) => {
            <div key={document.$id} className="p-2 w-1/4">
              <PostCard $id={document.$id} title={document.title} featuredImage={document.featuredImage} />
            </div>;
          })}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;
