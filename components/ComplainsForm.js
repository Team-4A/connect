import React from "react";
import swal from "sweetalert2";

export default function ComplainsForm() {
  const handleSubmit = (e)=>{
    e.preventDefault();
    swal.fire({
      title: "Good job!",
      text: "offer sent successfully !",
      icon: "success",
      timer: 3000,
    });
    e.target.reset();
  }
  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-indigo-100">
        <div className="w-2/3 lg:w-2/5 md:w-1/2">
          <form onSubmit={(e)=>{handleSubmit(e)}} className="min-w-full p-10 bg-white rounded-lg shadow-lg">
            <h1 className="mb-6 font-sans text-2xl font-bold text-center text-gray-600">
            Complaints
            </h1>
            <div>
              <label
                className="block my-3 font-semibold text-gray-800 text-md"
                for="username"
              >
                Username
              </label>
              <input
                className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none"
                type="text"
                name="username"
                id="username"
                placeholder="username"
              />
            </div>
            <div>
              <label
                className="block my-3 font-semibold text-gray-800 text-md"
                for="companyName"
              >
                company Name
              </label>
              <input
                className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none"
                type="text"
                name="companyName"
                id="companyName"
                placeholder="companyName"
              />
            </div>
            <div>
              <label
                className="block my-3 font-semibold text-gray-800 text-md"
                for="password"
              >
                your complain
              </label>
              <textarea
                className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none"
                type="text"
                name="the_issue"
                id="the_issue"
                placeholder="the_issue"
              />
            </div>
            <div>
              <label
                className="block my-3 font-semibold text-gray-800 text-md"
                for="confirm"
              >
                Additonal data
              </label>
              <input
                className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none"
                type="file"
                name="additoanal data"
                id="additoanal data"
                placeholder="additoanal data"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 mt-6 font-sans text-lg font-semibold tracking-wide text-white bg-indigo-600 rounded-lg"
            >
              submit
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
