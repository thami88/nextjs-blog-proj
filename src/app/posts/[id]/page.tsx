import { PrismaClient } from "@/generated/prisma";
import React from "react";

const prisma = new PrismaClient();
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
  });
  if (!post) {
    return (
      <div className="text-center pt-12">
        <h1 className="text-3xl capitalize font-bold mb-4">Post not found</h1>
      </div>
    );
  }
  return (
    <div className="text-center pt-12">
      <h1 className="text-3xl capitalize font-bold mb-4">{post.title}</h1>
      <p className="whitespace-pre-wrap mt-4">{post.content}</p>
    </div>
  );
}
