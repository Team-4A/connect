import { useState } from "react";
import Button from "react-bootstrap/Button";
export default function PreviousOffers({ resources }) {
  const [state, usestate] = useState(0);

  return (
    <>
      

      {resources &&
        resources.map((item, idx) => {
          return (
            <>
              <article
                className="w-3/4 px-2 py-4 m-10 mx-auto bg-white border border-gray-400 rounded-lg md:p-4 sm:py-3"
                data-article-path="/hagnerd/setting-up-tailwind-with-create-react-app-4jd"
                data-content-user-id="112962"
              >
                <div role="presentation">
                  <div>
                    <div className="m-2">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <a href="/hagnerd">
                            <img
                              className="w-8 rounded-full"
                              src="https://bootdey.com/img/Content/avatar/avatar3.png"
                              alt="hagnerd profile"
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div>
                          <p>
                            <a
                              href="/hagnerd"
                              className="text-2xl font-bold text-gray-700 text hover:text-black"
                            >
                              {item.title}
                            </a>
                          </p>
                          <a
                            href="/hagnerd/setting-up-tailwind-with-create-react-app-4jd"
                            className="text-xs text-gray-600 hover:text-black"
                          >
                            <time dateTime="2019-08-02T13:58:42.196Z">
                              {item.created_at}{" "}
                            </time>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="pl-12 md:pl-10 xs:pl-10">
                      <h2 className="mb-1 text-sm leading-7 hover:text-blue-600">
                        <p> Price ={item.price}</p>
                      </h2>

               
                      <div className="mb-1 leading-6">
                        <p>{item.description}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <small className="mr-2 text-gray-600">status</small>
                          {item.status === "pending" ? <>
                          <button
                            type="button"
                            className="px-3 py-2 text-sm text-current bg-gray-400 rounded hover:text-black hover:bg-gray-500"
                          >
                            <span>Pending</span>
                          </button></>:item.status === "approved" ? <>
                          <button
                            type="button"
                            className="px-3 py-2 text-sm text-current bg-green-400 rounded hover:text-black hover:bg-green-500"
                          >
                            <span>Approved</span>
                          </button></>:<><button
                            type="button"
                            className="px-3 py-2 text-sm text-current bg-red-400 rounded hover:text-black hover:bg-red-500"
                          >
                            <span>Rejected</span>
                          </button></>}
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </>
          );
        })}
    </>
  );
}
