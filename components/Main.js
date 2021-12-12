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
          <h1>Welcome</h1>
          <p>
            {" "}
            Welcome to our studio. We are a passionated group of people, making
            high quality products designed to make your life easier.
          </p>
          <MyDropDown />

          <Menu>
            <a href="/login" className='links'>
              <Menu.Button className="inline-flex justify-center p-2 font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm ptext-sm p-11w-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                login
              </Menu.Button>
            </a>
          </Menu>
        </section>
      </header>
      <div />
    </main>
  );
}
