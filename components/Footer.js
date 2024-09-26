import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Footer(props) {
  return (
    <div>
      <div className="">
        <footer className="justify-around text-gray-600 bg-purple-600 body-font">
          <div className="bg-violet-600">
            <div className="container flex flex-col px-5 py-4 mx-1 sm:flex-row">
              <Link href="/" passHref>
                <img src="/logo.png " className="max-h-12" alt="" />
              </Link>

              <div className="flex gap-4 ml-72">
                <h4 className="text-white">
                  Make an offer get a{" "}
                  <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-purple-600">
                    Service
                  </span>
                </h4>
              </div>
              <div className="grid grid-cols-1 text-white divide-y divide-yellow-500"></div>
              <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                
                <a
                  className="ml-3 text-gray-200"
                  href="https://github.com/Pythonaholic-Team/connect"
                >
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
