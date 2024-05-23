import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../buttons/PrimaryButton";

export default function Header() {
  return (
    <div className="px-20 py-7 flex items-center justify-end w-full text-white bg-gradient">
      <div className="flex items-center gap-x-16">
        <div className="flex items-center gap-x-16 w-full">
          <Link
            to={"/about"}
            className="hover:text-rose-400 transition-all ease-linear delay-75 border-b border-b-transparent hover:border-b-rose-400"
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className="hover:text-rose-400 transition-all ease-linear delay-75 border-b border-b-transparent hover:border-b-rose-400"
          >
            Contact
          </Link>
        </div>

        <div>
          <PrimaryButton text={"Register"} />
        </div>
      </div>
    </div>
  );
}
