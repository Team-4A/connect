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
      <div class="container-fluid" />

      <div class="background">
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
      </div>
      <header>
        <section class="header-content">
          <img src='logo.png ' />
          <p>
            {" "}
           Post a Service OR Make an Offer
          </p>
         
          <Menu>
            <a
              href="/sign_up_user"
              className="inline-flex justify-center p-[10px] text-sm font-bold text-purple-600 no-underline bg-white border border-gray-300 shadow-sm rounded-3xl  foxtnt-medium w-36 hover:duration-300 hover:rounded-none focus:ring-offset-gray-100 "
            >
              Sign Up
            </a>
          </Menu>
          <Menu>
            <a
              href="/login"
              className="inline-flex justify-center p-[10px] text-sm font-bold text-purple-600 no-underline bg-white border border-gray-300 shadow-sm rounded-3xl  foxtnt-medium w-36 hover:duration-300 hover:rounded-none focus:ring-offset-gray-100 "
            >
              Login
            </a>
          </Menu>
        </section>
      </header>
      <div />
    </main>
  );
}
