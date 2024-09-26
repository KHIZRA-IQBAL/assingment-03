"use client";

import { usePathname } from "next/navigation";
import { posts, Post as PostType } from "../../../../blog/data/posts";
import { useState } from "react";

export default function IndividualPost() {
  const Pathname = usePathname();
  const  id  = Pathname.split("/").pop();

  // Ensure the id is defined and a string
  const post: PostType | undefined = posts.find(
    (individual) => individual.id === id
  );

  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const submitFunction = () => {
    if (newComment.trim()) {
      setComments((beforeComments) => [...beforeComments, newComment]);
      setNewComment("");
    }
  };

  // Handle loading state when `id` is not yet available
  if (!Pathname.split("/").pop()) {
    return <div>Loading...</div>;
  }

  // Handle the case where the post is not found
  if (!post) {
    return <div>Post not found!</div>;
  }

  return (
    <div className=" bg-teal-950 h-screen text-stone-50  ">
      <h1 className="text-center text-4xl">{post.title}</h1>
      <p className=" text-center pt-5 text-2xl pb-10">{post.content}</p>
      <div className="flex flex-col gap-3 justify-center items-center"> 
        <h2 className="text-3xl">Comments</h2>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              submitFunction();
            }
          }}
         className="text-black"/>
         <br />
        <button onClick={submitFunction} className="border  rounded-lg pl-5 pr-5">Submit</button>
      </div>
    </div>
  );
}