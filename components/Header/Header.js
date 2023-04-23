import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
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
            <img
              className="aspect-[16/10] w-full h-full  md:aspect-auto object-cover "
              src="https://www.teachertrainingkolkata.com/images/Web-Banner-2.jpg"
            />
          </div>
          {/* <div>
            <img
              className="aspect-[16/10] md:aspect-auto object-cover"
              src="https://www.teachertrainingkolkata.com/images/Web-Banner-1.jpg"
            />
          </div>
          <div>
            <img
              className="aspect-[16/10] md:aspect-auto object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBHDJsmOBdBNmTBG2VoaVUD1Yn5YFzS5TzYyMBmotCvzORX0ePFLY7GErksm3NcPCCMNg&usqp=CAU"
            />
          </div> */}
        </Carousel>
      </div>
    </div>
  );
}

export default Header;
