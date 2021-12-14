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

            <Link
            href="/"
            className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white no-underline hover:text-xl"
          >
            Connect
          </Link>
            <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
             
            <Link
            href="/controller"
            className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white no-underline hover:text-xl"
          >
            Profile
          </Link>
          <Link
            href="/Explore"
            className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white no-underline hover:text-xl"
          >
            Explore
          </Link>
          <Link

            href="/"
            className={`inline-flex items-center justify-center duration-300 px-4 py-2 ml-8 text-base font-medium text-white ${router.pathname === "/" &&'text-3xl'} no-underline hover:duration-300 hover:text-3xl`}
          >
            Logout
          </Link>
            </div>
          </div>
      
      </div>
      </>
      )
}

