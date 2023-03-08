import React from "react";
import { useSelector } from "react-redux";
import MemoryCard from "./Post/Post";

const Posts = ({ currentId, setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const sortedPosts = [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className="cardsContainer">
      {posts.length === 0 ? (
        <h1>Add New Post</h1>
      ) : (
        <>
          {sortedPosts.map((post) => (
            <div key={post._id}>
              <MemoryCard currentId={currentId} setCurrentId={setCurrentId} post={post} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Posts;
