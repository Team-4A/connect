import React, { useState } from "react";
import swal from "sweetalert2";
import axios from 'axios'
import useOffersHooks from '../hooks/useOffersHooks'

/// this will store the data coming out from the offer form
let sentData={
    
}
export default function CreateOffer({body , id , to_company}) {
  const {resources,createResource} = useOffersHooks()
  const [showModal, setShowModal] = React.useState(false);
  const dateHndler =(e)=>sentData['date'] =e.target.value
  const infoHandler =(e)=>sentData['info'] =e.target.value
  const titleHandler =(e)=>sentData['title'] =e.target.value
  const priceHandler =(e)=>sentData['price'] =e.target.value

  const handlClick = async () => {
  
    console.log(sentData);
    setShowModal(false);
    swal.fire({
      title: "Good job!",
      text: "offer sent successfully !",
      icon: "success",
      timer: 3000,
    });

    
    console.log('this is sent data',sentData);
    
    let data = {
      created_at: sentData.date,
        owner_id: id,
        to_company:[to_company],
        title: sentData.title,
        description:sentData.info,
        price:parseInt(sentData.price)   

    }
    console.log('111111111111111111111111',data);
    createResource(data)
  };

  return (
    <>
      <button
        className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-violet-500 active:bg-pink-600 hover:shadow-lg focus:outline-none"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Make Offer
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
                  <h3 className="text-3xl font-semibold">Make Offer</h3>
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <p className="my-4 text-lg leading-relaxed text-blueGray-500">
                  {body}
                  </p>
                  <div className="flex flex-col gap-2 offerForm ">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large"></div>
                      </div>
                      <span className="datepicker-toggle">
                        <span className="datepicker-toggle-button"></span>
                        <input type="date" className="datepicker-input"  name='date' onChange={(e) => dateHndler(e)} />
                      </span>
                    </div>

                    <div className="form-outline">
                    <label className="form-label">
                        Title
                      </label>
                      <input   name="title" onChange={(e) => titleHandler(e)}/>
                      <br/>
                    <label className="form-label" >
                        Price
                      </label>
                      <input   type="number" name="price" onChange={(e) => priceHandler(e)}/>
                      <br/>
                    <label className="form-label" htmlFor="textAreaExample">
                        addtional details
                      </label>
                      <textarea
                        name="addtinal_details"
                        className="form-control"
                        id="textAreaExample"
                        rows="4"
                        onChange={(e) => infoHandler(e)}
                      ></textarea>
                 
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200">
                  <button
                    className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-violet-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                    type="button"
                    onClick={() => handlClick()}
                  >
                    send offer
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}
