import React from "react";

export default function ComplainsForm() {
  return (
    <div>
      <div class="h-screen bg-indigo-100 flex justify-center items-center">
        <div class="lg:w-2/5 md:w-1/2 w-2/3">
          <form class="bg-white p-10 rounded-lg shadow-lg min-w-full">
            <h1 class="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
            complains
            </h1>
            <div>
              <label
                class="text-gray-800 font-semibold block my-3 text-md"
                for="username"
              >
                Username
              </label>
              <input
                class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="username"
                id="username"
                placeholder="username"
              />
            </div>
            <div>
              <label
                class="text-gray-800 font-semibold block my-3 text-md"
                for="companyName"
              >
                company Name
              </label>
              <input
                class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="companyName"
                id="companyName"
                placeholder="companyName"
              />
            </div>
            <div>
              <label
                class="text-gray-800 font-semibold block my-3 text-md"
                for="password"
              >
                your complain
              </label>
              <textarea
                class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="the_issue"
                id="the_issue"
                placeholder="the_issue"
              />
            </div>
            <div>
              <label
                class="text-gray-800 font-semibold block my-3 text-md"
                for="confirm"
              >
                Additonal data
              </label>
              <input
                class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="file"
                name="additoanal data"
                id="additoanal data"
                placeholder="additoanal data"
              />
            </div>
            <button
              type="submit"
              class="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
            >
              submit
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
