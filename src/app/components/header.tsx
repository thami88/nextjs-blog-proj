import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="border-black/10 border-b h-[40px] flex items-center justify-between px-5">
      <Link href={"/"}>
        <Image 
         src="https://res.cloudinary.com/dx6ecncex/image/upload/f_auto,q_90/profile-6_kwgap2.png"
         alt="logo"
         width={30}
         height={30}
         className="rounded-full" 
         priority
         />
      </Link>
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
