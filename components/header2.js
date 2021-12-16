import { useRouter } from 'next/router'
import Link from 'next/link';
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
            <img className="w-64 hover:w-120" src='./logo.png'/>
          </Link>
            <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
             
           <Link href='/controller' passHref>
           <a
            href="/controller" onClick={route}
            className={`rounded-tinline-flex items-center duration-300 justify-center px-4 py-2 ml-8 text-base font-medium ${router.pathname === "/userprofile" &&'text-3xl' } text-white no-underline hover:duration-300 hover:text-3xl`}
          >
            Profile
          </a></Link>
          <Link href="/Explore" passHref>
          <a
            href="/Explore" 
            className={`inline-flex items-center duration-300 justify-center px-4 py-2 ml-8 text-base font-medium ${router.pathname === "/Explore" &&'text-3xl'} text-white no-underline  hover:duration-300 hover:text-3xl`}
          >
            Explore
          </a>
          </Link>
         
          <Link href="/aboutus" passHref>
          <a
            href="/aboutus" passHref
            className={`inline-flex items-center duration-300 justify-center px-4 py-2 ml-8 text-base font-medium ${router.pathname === "/aboutus" &&'text-3xl'} text-white no-underline hover:duration-300 hover:text-3xl`}
          >
            About us
          </a>
          </Link>
          <Link  href="/Complain" passHref>
          <a
            href="/Complain"
            className={`inline-flex items-center justify-center duration-300 px-4 py-2 ml-8 text-base font-medium text-white ${router.pathname === "/" &&'text-3xl'} no-underline hover:duration-300 hover:text-3xl`}
          >
            Complaints
          </a>
          </Link>
          <Link  href="/" passHref>
          <a
            href="/"
            className={`inline-flex items-center justify-center duration-300 px-4 py-2 ml-8 text-base font-medium text-white ${router.pathname === "/" &&'text-3xl'} no-underline hover:duration-300 hover:text-3xl`}
          >
            Logout
          </a>
          </Link>
         
            </div>
          </div>
      
      </div>
      </>
      )
}

