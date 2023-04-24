import Image from "next/image";
import React from "react";

function FourSteps() {
  return (
    <div className="min-h-[60vh] wifull max-h-max  bg-[#cdbccf15] py-8">
      <div className="h-full container mx-auto p-4">
        <div className="md:mb-6 mb-3">
          <h1 className="md:text-4xl font-bold text-3xl text-center">
            Your Success Is Just 4 Steps Away
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center p-11">
          <div className=" bg-[#ffffff] rounded-md p-6 shadow-sm min-h-max max-h-max mx-auto w-full m-4 relative">
            <Image
              src={
                "https://res.cloudinary.com/dpr7otqhn/image/upload/v1682308638/1_aba015b7a6.png"
              }
              width={100}
              height={100}
              alt="Sample Image"
              className="w-[28px] h-auto absolute top-2 right-4"
            />
            <div>
              <h1 className="text-black font-bold text-2xl mt-3">
                Select your course
              </h1>
              <p className="text-gray-700 text-xl mt-3 ">
                Enrol any of One Education premium courses
              </p>
            </div>
          </div>
          <div className=" lg:mt-16 bg-[#ffffff] rounded-md p-6 shadow-sm min-h-max max-h-max  mx-auto w-full m-4 relative">
            <Image
              src={
                "https://res.cloudinary.com/dpr7otqhn/image/upload/v1682308638/2_7391963249.png"
              }
              width={100}
              height={100}
              alt="Sample Image"
              className="w-[28px] h-auto absolute top-2 right-4"
            />
            <div>
              <h1 className="text-black font-bold text-2xl mt-3">
                Select your course
              </h1>
              <p className="text-gray-700 text-xl mt-3 ">
                Enrol any of One Education premium courses
              </p>
            </div>
          </div>
          <div className=" bg-[#ffffff] rounded-md p-6 shadow-sm min-h-max max-h-max mx-auto w-full m-4 relative">
            <Image
              src={
                "https://res.cloudinary.com/dpr7otqhn/image/upload/v1682308638/3_7e34664f12.png"
              }
              width={100}
              height={100}
              alt="Sample Image"
              className="w-[20px] h-auto absolute top-2 right-4"
            />
            <div>
              <h1 className="text-black font-bold text-2xl mt-3">
                Engage in online classes
              </h1>
              <p className="text-gray-700 text-xl mt-3 ">
                Enjoy learning at your own pace and time and boost your
                confidence
              </p>
            </div>
          </div>
          <div className=" bg-[#ffffff] rounded-md p-6  lg:mt-16 shadow-sm min-h-max max-h-max mx-auto w-full m-4 relative">
            <Image
              src={
                "https://res.cloudinary.com/dpr7otqhn/image/upload/v1682308638/4_1075d1a185.png"
              }
              width={100}
              height={100}
              alt="Sample Image"
              className="w-[28px] h-auto absolute top-2 right-4"
            />
            <div>
              <h1 className="text-black font-bold text-2xl mt-3">
                Test yourself
              </h1>
              <p className="text-gray-700 text-xl mt-3 ">
                Attend quizzes and complete assignments applying your learnings
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourSteps;
