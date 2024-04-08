import React from "react";
import SearchInput from "../textField/SearchInput";
import { Link } from "react-router-dom";
import PrimaryButton from "../buttons/PrimaryButton";

export default function Header() {
  return (
    <div className="px-20 py-7 flex items-center justify-between w-full text-white bg-gradient">
      <div>
        <SearchInput />
      </div>

      <div className="flex items-center gap-x-16">
        <div className="flex items-center gap-x-16 w-full">
          <Link
            to={"/about"}
            className="hover:text-main-500 transition-all ease-linear delay-75 border-b border-b-transparent hover:border-b-main-500"
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className="hover:text-main-500 transition-all ease-linear delay-75 border-b border-b-transparent hover:border-b-main-500"
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
