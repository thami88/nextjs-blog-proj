"use client";
import React from "react";

export default function UpvoteButton() {
  return (
    <button
      onClick={() => {
        console.log(`Upvoting post with ID:`);
        alert("Upvoted!")
      }}
      className="bg-blue-500 text-white px-3 py-1 rounded-md mt-4"
    >
      upvote
    </button>
  );
}
