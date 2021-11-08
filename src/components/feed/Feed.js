import React, { useEffect } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import { useState } from "react";
import "./feed.css";
import axios from "axios";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res =  username
        ? await axios.get("/posts/profile/" + username)
         : await axios.get("posts/timeline/616e9501332479d6f44a1477");
         console.log(res);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
