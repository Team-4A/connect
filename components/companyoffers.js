import { useState } from "react";
import Button from "react-bootstrap/Button";
export default function CompanyOffers({ sliderShow }) {
  const [state, setState] = useState(0);
  
    const handleState = () =>{
        setState(0)
    }
  return (
    <>
      
      {sliderShow && (
        <div
          className="fixed inset-0 overflow-hidden"
          ariaLabelledby="slide-over-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75"
              aria-hidden="true"
            ></div>

            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
              <div className="w-screen max-w-md">
                <div className="flex flex-col h-full overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2
                        className="text-lg font-medium text-gray-900"
                        id="slide-over-title"
                      >
                        Previous Offers
                      </h2>
                      <div className="flex items-center ml-3 h-7">
                        <button
                          onClick={() => handleState}
                          type="button"
                          className="p-2 -m-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Close panel</span>
                          <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                          <li className="flex py-6">
                            <div className="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                              <img
                                src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                                alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                className="object-cover object-center w-full h-full"
                              />
                            </div>

                            <div className="flex flex-col flex-1 ml-4">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href="#">Throwback Hip Bag</a>
                                  </h3>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">Salmon</p>
                              </div>
                              <div className="flex items-end justify-between flex-1 text-sm">
                                <p className="text-gray-500">Qty 1</p>

                                <div className="flex">
                                  <button
                                    type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>

                          <li className="flex py-6">
                            <div className="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                              <img
                                src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg"
                                alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
                                className="object-cover object-center w-full h-full"
                              />
                            </div>

                            <div className="flex flex-col flex-1 ml-4">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href="#">Medium Stuff Satchel</a>
                                  </h3>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">Blue</p>
                              </div>
                              <div className="flex items-end justify-between flex-1 text-sm">
                                <p className="text-gray-500">Qty 1</p>

                                <div className="flex">
                                  <button
                                    type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="flex py-6">
                            <div className="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                              <img
                                src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg"
                                alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
                                className="object-cover object-center w-full h-full"
                              />
                            </div>

                            <div className="flex flex-col flex-1 ml-4">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href="#">Medium Stuff Satchel</a>
                                  </h3>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">Blue</p>
                              </div>
                              <div className="flex items-end justify-between flex-1 text-sm">
                                <p className="text-gray-500">Qty 1</p>

                                <div className="flex">
                                  <button
                                    type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="flex py-6">
                            <div className="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                              <img
                                src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg"
                                alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
                                className="object-cover object-center w-full h-full"
                              />
                            </div>

                            <div className="flex flex-col flex-1 ml-4">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href="#">Medium Stuff Satchel</a>
                                  </h3>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">Blue</p>
                              </div>
                              <div className="flex items-end justify-between flex-1 text-sm">
                                <p className="text-gray-500">Qty 1</p>

                                <div className="flex">
                                  <button
                                    type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="flex py-6">
                            <div className="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                              <img
                                src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg"
                                alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
                                className="object-cover object-center w-full h-full"
                              />
                            </div>

                            <div className="flex flex-col flex-1 ml-4">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href="#">Medium Stuff Satchel</a>
                                  </h3>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">Blue</p>
                              </div>
                              <div className="flex items-end justify-between flex-1 text-sm">
                                <p className="text-gray-500">Qty 1</p>

                                <div className="flex">
                                  <button
                                    type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                  ></button>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="flex py-6">
                            <div className="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                              <img
                                src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg"
                                alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
                                className="object-cover object-center w-full h-full"
                              />
                            </div>

                            <div className="flex flex-col flex-1 ml-4">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href="#">Medium Stuff Satchel</a>
                                  </h3>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">Blue</p>
                              </div>
                              <div className="flex items-end justify-between flex-1 text-sm">
                                <p className="text-gray-500">Qty 1</p>

                                <div className="flex">
                                  <button
                                    type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
