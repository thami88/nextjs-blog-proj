"use server";

import React from "react";
import { PrismaClient } from "@/generated/prisma";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function createPost(formdata: FormData) {
  const title = formdata.get("title");
  const content = formdata.get("content");

  await prisma.post.create({
    data: {
      title: title ? String(title) : "",
      content: content ? String(content) : "",
    },
  });

  revalidatePath("/posts");
}
