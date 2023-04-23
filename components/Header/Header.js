import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
function Header() {
  return (
    <div className="max-h-[500px] w-full object-contain overflow-hidden">
      <div className="container  mx-auto">
        <Carousel
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showArrows={false}
          autoPlay={true}
          showStatus={false}
        >
          <div>
            <Image
              className="aspect-w-16 w-[1440px] aspect-h-10 max-w-full h-full md:aspect-auto object-cover"
              src="https://www.teachertrainingkolkata.com/images/Web-Banner-2.jpg"
              alt="Banner image"
              width={1000}
              height={1000}
            />
          </div>
          
        </Carousel>
      </div>
    </div>
  );
}

export default Header;
