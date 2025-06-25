import React from "react";
import { PrismaClient } from "@/generated/prisma";
// name of the folder is the route

const prisma = new PrismaClient();
export default async function Page() {
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
    </div>
  );
}
