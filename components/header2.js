
import Link from 'next/link'
export default function Header2(props) {
  return (
    <>
      <div className="bg-purple-600 ">   
          <div className="flex items-center justify-between py-6 md:justify-start ">
            <a
            href="/"
            className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white no-underline hover:text-xl"
          >
            Connect
          </a>
            <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
             
            <Link
            href="/Explore"
            className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white no-underline hover:text-xl"
          >
            Profile
          </Link>
          <a
            href="/"
            className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white no-underline hover:text-xl"
          >
            Explore
          </a>
          <a
            href="/"
            className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white no-underline hover:text-xl"
          >
            Logout
          </a>
            </div>
          </div>
      
      </div>
      </>
      )
}

