import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from "next/image";
function Header() {
  return (
    <div className="min-h-screen max-h-screen bg-[url('https://res.cloudinary.com/dpr7otqhn/image/upload/v1682311766/thumbnail_bannerbg_28e9e3a49a.png')] bg-cover bg-no-repeat bg-fixed  w-full overflow-hidden">
      <div className="container  mx-auto">
        <div className="p-4 md:flex w-full items-center">
          <div className="md:w-2/4 h-full ">
            <h1 className="text-center md:text-left">The Leader in Online Learning</h1>
            <h1 className="text-4xl leading-10 line-clamp-6 lg:text-5xl mt-2 font-bold text-center md:text-left">Engaging & Accessible Online Courses For All</h1>
            <h1 className="text-center md:text-left mt-4">Own your future learning new skills online</h1>
            <div className="my-2 grid  p-2 grid-cols-3 mx-auto max-w-md md:mx-0">
                <div>
                  <h1 className="text-2xl font-extrabold">25+</h1>
                  <h1>Online Courses</h1>
                </div>
                <div>
                <h1 className="text-2xl font-extrabold">4+</h1>
                  <h1>Expert Tutors</h1>
                </div>
                <div>
                <h1 className="text-2xl font-extrabold">75+</h1>
                  <h1>Online Students</h1>
                </div>
            </div>
          </div>
          <div className="md:w-2/4 h-full">
            <Image
              className="hero-image lg:mt-28  "
              src="https://res.cloudinary.com/dpr7otqhn/image/upload/v1682313983/53dfd469a087a0eee1c6f4ba46476c02_vew2mx.png"
              alt="Hero image for the home page"
              width={1680}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
