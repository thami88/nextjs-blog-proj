import UpvoteButton from "@/app/components/upvote-button";
import { PrismaClient } from "@/generated/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound, redirect } from "next/navigation";
import React from "react";

const prisma = new PrismaClient();

export default async function Page(props: {
  params: Promise<{ id: string }>;
}) {

  // Check if the user is authenticated
  // If not authenticated, redirect to the login page
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    return redirect("/api/auth/login");
  }

  const { id } = await props.params;
  const numericId = Number(id);

  if (isNaN(numericId)) {
    return notFound(); // or throw new Error("Invalid post ID")
  }
  const post = await prisma.post.findUnique({
    where: { id: numericId },
  });

  if (!post) {
    return notFound();
  }
  
  return (
    <div className="text-center pt-12">
      <h1 className="text-3xl capitalize font-bold mb-4">{post.title}</h1>
      <p className="whitespace-pre-wrap mt-4">{post.content}</p>
      <UpvoteButton/>
    </div>
  );
}
