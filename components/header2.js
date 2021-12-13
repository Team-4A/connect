import { useRouter } from 'next/router'
export default function Header2(props) {
  const router = useRouter()
  const route=()=>{
    console.log(router.pathname);
  }
  return (
    <>
      <div className="bg-purple-600 ">   
          <div className="flex items-center justify-between py-6 md:justify-start ">
          <a href='/'><img src='logo.png ' className='pl-12 max-h-12'/></a>
            
            <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
             
            <a
            href="/userprofile" onClick={route}
            className={`rounded-tinline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium ${router.pathname === "/userprofile" &&'text-3xl' } text-white no-underline hover:text-3xl`}
          >
            Profile
          </a>
          <a
            href="/Explore" 
            className={`inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium ${router.pathname === "/Explore" &&'text-3xl'} text-white no-underline hover:text-3xl`}
          >
            Explore
          </a>
          <a
            href="/aboutus" 
            className={`inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium ${router.pathname === "/aboutus" &&'text-3xl'} text-white no-underline hover:text-3xl`}
          >
            About us
          </a>
          <a
            href="/"
            className={`inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white ${router.pathname === "/" &&'text-3xl'} no-underline hover:text-3xl`}
          >
            Logout
          </a>
            </div>
          </div>
      
      </div>
      </>
      )
}

