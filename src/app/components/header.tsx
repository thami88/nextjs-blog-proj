import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="border-black/10 border-b h-[40px] flex items-center justify-between px-5">
      <div>Logo</div>
      <ul className="flex items-center gap-3">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/posts"}>Posts</Link>
        </li>
      </ul>
    </div>
  );
}
