
const products = [
  {
    id: 1,
    name: 'Adham Mhadydat',
    href: 'https://www.linkedin.com/in/adham-mhaydat/',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Full Stack Developer',
  },{
    id: 2,
    name: 'Ahmad Al-Rasheed',
    href: 'https://www.linkedin.com/in/ahmad-alrasheed/',
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg",
    color: 'Full Stack Developer',
  },
  {
    id: 3,
    name: 'Ashraf Obeidat',
    href: '#',
    imageSrc: "https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F_400x400.jpg",
    color: 'Full Stack Developer',
  },{
    id: 4,
    name: 'Aseel Al-Saqer',
    href: 'https://www.linkedin.com/in/aseel-al-saqer/',
    imageSrc: "https://media-exp1.licdn.com/dms/image/C4D03AQHAub6Q83sRhA/profile-displayphoto-shrink_800_800/0/1637796339348?e=1644451200&v=beta&t=j1CBgSUgOi8IpyYoTAfx0KaNhlLsoYWuS4CIzL2amI0",
    color: 'Full Stack Developer',
  }
  
  
]


export default function Example() {
  return (
    
    <div className="bg-gradient-to-r from-violet-300 to-violet-700 text-zinc-50 ">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-center ">Connect Team</h2>

        <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="relative group">
              <div className="w-full overflow-hidden bg-gray-200 rounded-md text-zinc-50 min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img 
                 src={product.imageSrc}
                 alt={product.imageAlt}
                  
                  className="object-cover object-center w-full h-full lg:w-full lg:h-full"
                />
              </div>
              <div className="flex justify-between mt-4 text-zinc-50">
                <div className=" text-zinc-50">
                  <h3 className="text-sm text-zinc-50">
                    <a className="no-underline text-zinc-50" href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0 " />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-zinc-50 ">{product.color}</p>
                </div>
                {/* <p className="text-sm font-medium text-gray-900">{product.price}</p>
                + */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
