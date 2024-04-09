import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [social, setSocial] = useState([
    {
      icon: "/icons/telegram.svg",
      tooltip: "Telegram",
      link: "https://t.me/mahi_mohrechi",
    },
    {
      icon: "/icons/gmail.svg",
      tooltip: "Email",
      link: "mailto:f.mohrechi78@gmail.com",
    },
    {
      icon: "/icons/github.svg",
      tooltip: "Github",
      link: "https://github.com/f-mohrechi",
    },
    {
      icon: "/icons/google.svg",
      tooltip: "Google",
      link: "https://f-mohrechi.com",
    },
    {
      icon: "/icons/linkedin.svg",
      tooltip: "Linkedin",
      link: "https://linkedin.com/in/faeze_mohrechi",
    },
    {
      icon: "/icons/instagram.svg",
      tooltip: "Instagram",
      link: "https://instagram.com/mahi_mohrechi",
    },
  ]);

  return (
    <div className="px-20 text-white py-10 bg-main-800">
      <div className="grid grid-cols-3 gap-x-16 items-start">
        <div className="col-span-2">
          <h2 className="text-3xl font-bold">
            About &nbsp; <span className="main-gradient">Upify</span>
          </h2>
          <div className="max-w-[450px] pt-4">
            <p className="text-dark-200 text-lg">
              "Upify" is a dynamic web music player crafted with React.js,
              designed to elevate learning through immersive audio experiences.
              With its sleek interface and intuitive controls, Upify offers
              users a seamless way to discover, play, and organize their
              favorite tunes.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <div className="pt-4">
            <Link
              className="text-dark-200 text-lg hover:text-main-500 transition-all ease-linear delay-75"
              to={"/about"}
            >
              About
            </Link>
          </div>
          <div className="columns-2 max-w-40">
            {social.map((item, index) => {
              return (
                <div className="flex justify-center items-center h-16 w-16">
                  <Link to={item.link}>
                    <img
                      src={item.icon}
                      title={item.tooltip}
                      alt={item.tooltip}
                      className="w-6 h-6 grayscale hover:grayscale-0 brightness-200 hover:brightness-100 transition-all ease-linear delay-75"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
