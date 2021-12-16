import React from "react";
import MyDropDown from "./drop_down_menu";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
export default function Main() {
  return (
    <main>
      <link
        href="https://fonts.googleapis.com/css?family=Josefin+Sans"
        rel="stylesheet"
      />
      <div class="container-fluid " />

      <div class="background">
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
      </div>
      <header>
        <section class="header-content ">
          <div class="">
          <div className="flex justify-center "> <img src="./logo.png"/></div>
          <p>
            {" "}
            Welcome to our studio. We are a passionated group of people, making
            high quality products designed to make your life easier.
          </p>
          <Menu>
            <a
              href="/sign_up_user"
              className="inline-flex  justify-center p-[10px] text-sm font-bold text-purple-600 no-underline bg-white border border-gray-300 shadow-sm rounded-3xl  foxtnt-medium w-36 hover:duration-300 hover:rounded-none focus:ring-offset-gray-100 "
            >
              Sign up
            </a>
          </Menu>

          <Menu>
            <a
              href="/login"
              className="inline-flex  justify-center p-[10px] text-sm font-bold text-purple-600 no-underline bg-white border border-gray-300 shadow-sm rounded-3xl  foxtnt-medium w-36 hover:duration-300 hover:rounded-none focus:ring-offset-gray-100 "
            >
              Login
            </a>
          </Menu>
          </div>
         
        </section>
      </header>
      <div />
    </main>
  );
}
