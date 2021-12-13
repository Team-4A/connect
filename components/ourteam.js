const products = [
  {
    id: 1,
    name: "Adham Mhadydat",
    href: "https://www.linkedin.com/in/adham-mhaydat/",
    imageSrc:
      "https://media-exp1.licdn.com/dms/image/C4D03AQHpC7zJLtxwXw/profile-displayphoto-shrink_400_400/0/1591730411849?e=1645056000&v=beta&t=LrbehhUM7ARmSwJbC0_6mdP9Qgw7_KTGIggKuAaQ9V4",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Full Stack Developer",
  },
  {
    id: 2,
    name: "Ahmad Al-Rasheed",
    href: "https://www.linkedin.com/in/ahmad-alrasheed/",
    imageSrc:
      "https://media-exp1.licdn.com/dms/image/D4E35AQF53Yi3VdxC1g/profile-framedphoto-shrink_800_800/0/1638126315390?e=1639497600&v=beta&t=jfjxeqTyKg9FfIhT4qQeYB1OkKg1SqUYqrC-UbzDdVs",
    color: "Full Stack Developer",
  },
  {
    id: 3,
    name: "Ashraf Obeidat",
    href: "#",
    imageSrc:
      "https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F_400x400.jpg",
    color: "Full Stack Developer",
  },
  {
    id: 4,
    name: "Aseel Al-Saqer",
    href: "https://www.linkedin.com/in/aseel-al-saqer/",
    imageSrc:
      "https://media-exp1.licdn.com/dms/image/C4D03AQHAub6Q83sRhA/profile-displayphoto-shrink_800_800/0/1637796339348?e=1644451200&v=beta&t=j1CBgSUgOi8IpyYoTAfx0KaNhlLsoYWuS4CIzL2amI0",
    color: "Full Stack Developer",
  },
];

export default function Example() {
  return (
    <div className="bg-gradient-to-r from-violet-300 to-violet-700 text-zinc-50 ">
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-center ">
          Connect Team
        </h2>

        <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
          {products.map((product) => (
            <div key={product.id} className="relative group ">
              <div className="wrapper ">
                <div className="profile ">
                  <div className="big">
                    <img src={product.imageSrc} />
                    <div className="overlay ">
                      <div className="centered about flex-column">
                        <h4>{product.name}</h4> <span>{product.color}</span>
                        <ul className="centered social-icons">
                        <li>
                        <a className="no-underline text-zinc-50" href={product.href}>
                          <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
