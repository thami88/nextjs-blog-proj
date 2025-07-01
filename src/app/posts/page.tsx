import React from "react";
import { PrismaClient } from "@/generated/prisma";
import { createPost } from "@/actions/action";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
// name of the folder is the route

const prisma = new PrismaClient();
export default async function Page() {

  // Check if the user is authenticated
  // If not authenticated, redirect to the login page
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    return redirect("/api/auth/login");
  }
  const posts = await prisma.post.findMany();
  return (
    <div className="text-center pt-12">
      <h1 className="text-3xl capitalize font-bold mb-4">Post</h1>
      <ul>
        {posts.map((post: { id: number; title: string }) => (
          <li key={post.id} className="mb-2">
            <a
              href={`/posts/${post.id}`}
              className="text-blue-500 hover:underline"
            >
              {post.title}
            </a>
          </li>
        ))}
      </ul>

      <form action={createPost} className="max-w-[400px] mx-auto mt-24">

        <input
          type="text"
          placeholder="Title"
          name="title"
          className="border p-2 mb-2 w-full"
        />

        <textarea
          placeholder="Content"
          name="content"
          className="border p-2 mb-2 w-full"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-1 rounded-md"
        >
          create post
        </button>

      </form>
      
    </div>
  );
}
