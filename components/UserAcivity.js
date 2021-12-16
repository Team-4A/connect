// import Card from 'react-bootstrap'
// export default function Useractivity({ activityResources, postResources }) {
//     console.log({activityResources})
//     console.log({postResources})
//   return (
//     <div className="container w-full mx-auto ">
//       <div>
//         <div className="relative w-full mx-auto bg-white shadow-xl">
//           <div className="">
//             <div className="w-full">
//               <h3 className="px-4 font-bold text-center text-gray-600">
//                 Recent activites
//               </h3>
//               <div className="w-full mt-5">
//                 {(activityResources &&
//                   postResources) &&
//                   activityResources.map((ele, idx) => {
//                     postResources.map((item, idnx) => {
//                       if (ele.on_post === item.id) {
//                         return (
//                           <>
//                             <a key={idx}
//                               href="#"
//                               className="block w-full px-4 py-4 font-medium text-gray-600 transition duration-150 border-t-2 border-gray-100 hover:bg-gray-100"
//                             >
//                               <img
//                                 src="https://pantazisoft.com/img/avatar-2.jpeg"
//                                 alt=""
//                                 className="inline-block h-6 mr-2 rounded-full shadow-md"
//                               />
//                               You have reacted to this post by{" "}
//                               {ele.type_of_activity}
//                               <span className="text-sm text-gray-400">
//                                 at {ele.created_at}
//                               </span>
//                             </a>
//                             <Card key={item.id}>
//                               <Card.Body>
//                                 {item.Body}
//                               </Card.Body>
//                             </Card>
//                           </>
//                         );
//                       }
//                     });
//                   })}

                
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
