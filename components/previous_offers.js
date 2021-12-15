import { useState } from "react"
import Button from 'react-bootstrap/Button'
export default function PreviousOffers({resources}) {
    const [state, usestate] = useState(0)

    return (
        <>
        {console.log('myresources lllllllllllllll',resources)}

            {resources  && resources.map((item,idx)=>{
                return(

                <>
                <article class="border w-3/4 mx-auto border-gray-400 rounded-lg md:p-4 bg-white sm:py-3 py-4 px-2 m-10" data-article-path="/hagnerd/setting-up-tailwind-with-create-react-app-4jd" data-content-user-id="112962">
  <div role="presentation">
      <div>
        <div class="m-2">
          <div class="flex items-center">
              <div class="mr-2">                
                <a href="/hagnerd">          
                  <img class="rounded-full w-8" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="hagnerd profile" loading="lazy" />        
                </a>      
              </div>
              <div>
                <p>          
                  <a href="/hagnerd" class="text text-gray-700 text-sm hover:text-black">{item.title}</a>                  
                </p>
                <a href="/hagnerd/setting-up-tailwind-with-create-react-app-4jd" class="text-xs text-gray-600 hover:text-black">          
                  <time datetime="2019-08-02T13:58:42.196Z">{item.created_at} </time>        
                </a>      
              </div>
          </div>
        </div>
        <div class="pl-12 md:pl-10 xs:pl-10">
          <h2 class="text-2xl font-bold mb-2 hover:text-blue-600 leading-7">
            <p> Price ={item.price}</p>
           
            
          </h2>
          
          {/* <div class="mb-2">
              <a href="/t/react" class="text-sm text-gray-600 p-1 hover:text-black">
                <span class="text-opacity-50">#</span>
                react
              </a>
              <a href="/t/javascript" class="text-sm text-gray-600 p-1 hover:text-black">
                <span class="text-opacity-50">#</span>
                javascript
              </a>
              <a href="/t/tailwind" class="text-sm text-gray-600 p-1 hover:text-black">
                <span class="text-opacity-50">#</span>
                tailwind
              </a>
          </div> */}
          <div class="mb-1 leading-6">
              <p>{item.description}</p>
             
          </div>
          <div class="flex justify-between items-center">
  
              <div class="flex items-center">                
                <small class="mr-2 text-gray-600">status</small>                
                <button type="button" class="bg-gray-400 rounded text-sm px-3 py-2 text-current hover:text-black hover:bg-gray-500">                      
                  <span>Pending</span>                      
                </button>              
              </div>
          </div>
        </div>
    </div>
  </div>
</article>
                </>
                )
            })}

        </>
    )
}