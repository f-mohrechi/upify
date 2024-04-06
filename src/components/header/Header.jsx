import React from "react";
import SearchInput from "../textField/SearchInput";
import { Link } from "react-router-dom";
import PrimaryButton from "../buttons/PrimaryButton";

export default function Header() {
  return (
    <div className="px-4 py-7 flex items-center justify-between w-full text-white">
      <div>
        <SearchInput />
      </div>

      <div className="flex items-center gap-x-16">
        <div className="flex items-center gap-x-16 w-full">
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>

        <div>
          <PrimaryButton text={"Register"} />
        </div>
      </div>
    </div>
  );
}
