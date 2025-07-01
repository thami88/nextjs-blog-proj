import React from "react";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <div className="text-center pt-12">
      <h1 className="text-3xl capitalize font-bold mb-4">Welcome to My Blog</h1>
      <p className="text-[16px]">This is next js blog</p>

      <div className="flex justify-center gap-3 mt-4">
        <ul className="flex items-center gap-3">
          <li>
            <RegisterLink className="bg-blue-500 text-white px-3 py-1 rounded-md">
              Register
            </RegisterLink>
          </li>
          <li>
            <LoginLink className="bg-blue-500 text-white px-3 py-1 rounded-md">
              Login
            </LoginLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
