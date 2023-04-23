import ComponentHeader from "@/components/Shared/ComponentHeader";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

function AboutUs() {
  return (
    <div className='bg-white min-h-screen'>
       <Head>
        <title>About Us</title>
      </Head>
      <div className="container mx-auto w-full object-contain overflow-hidden pb-14">
      <ComponentHeader
        data={{ title: "About Us", description: "Explore All About Us" }}
      />
      <div className="grid grid-cols-1 p-2 lg:grid-cols-2 gap-6 justify-center w-full">
        <div>
          <Image
            className="md:w-[500px] mx-auto border-white border-spacing-3 w-full"
            src="https://res.cloudinary.com/dpr7otqhn/image/upload/v1682270986/thumbnail_hero_1_494f6eb6fa.png"
            alt="About Us image"
            width={1000}
            height={1000}
          />
        </div>
        <div>
          <h1 className="mb-2 text-xl md:text-2xl text-black mt-5 text-center lg:text-left">
            How To Train a Dog Under A Week
          </h1>
          <h1 className="my-1 text-sm  text-black">
            Dog training goes beyond sit, stay, and shake. Whether you need help
            with potty training your pup, curbing your rescue’s aggression and
            barking, or understand the fundamentals of dog behavior, Udemy has a
            course to help.
          </h1>
          <h1 className="my-1 text-sm  text-black">
            This online seminar consists of six hours of video lecture by
            renowned animal behaviorist and dog trainer, Dr. Ian Dunbar. It has
            been approved for 6 continued education credits by the CCPDT, IAABC
            & NADOI. This seminar will offer simple solutions for the most
            common dog behavior and training problems, including: housesoiling,
            destructive chewing, excessive barking, digging, home-alone problems
            (and separation anxiety), leash reactivity to other dogs,
            hyperactivity, jumping-up, not coming when called, pulling on leash,
            plus lack of attention and compliance. Obviously, preventing
            predictable doggy problems is the way to go but what do we do when
            adolescence exuberance, distraction and the development of fears and
            phobias override socialization and training? How can we retrain dogs
          </h1>
          <Link
            href={"/course/1"}
            className="px-4 bg-blue-500 my-2 py-2 text-white "
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AboutUs;
