import React from "react";
import { ModeToggle } from "./toggle";
import { Button } from "./ui/button";
import Link from "next/link";

function Header() {
  return (
    <div className="border-b-3 border-gray-700 rounded-xl flex justify-between">
      <Link href="/">
        <div className="m-2 text-xl font-bold cursor-pointer">AI-Notes</div>
      </Link>

      <div className="justify-between flex ">
        <div className="m-2">
          <ModeToggle />
        </div>
        <div className="m-2">
          <Link href="/login">
            <Button className="cursor-pointer">Login</Button>
          </Link>
        </div>
        <div className="m-2 mr-2">
          <Link href="/signup">
            <Button className="cursor-pointer">Signup</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
