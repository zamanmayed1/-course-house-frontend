import Courses from "@/components/Courses/Courses";
import ComponentHeader from "@/components/Shared/ComponentHeader";
import Head from "next/head";

function AllCourses() {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>All Courses</title>
      </Head>
      <div className="container mx-auto w-full object-contain overflow-hidden pb-14">
        <ComponentHeader
          data={{ title: "All Courses", description: "Explore All Courses." }}
        />
        <Courses />
      </div>
    </div>
  );
}

export default AllCourses;
