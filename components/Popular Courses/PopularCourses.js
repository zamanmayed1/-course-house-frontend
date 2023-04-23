import ComponentHeader from "../Shared/ComponentHeader";
import CourseCard from "../Shared/CourseCard";
import { fetcher } from "@/utils/api";
import useSWR from 'swr'
import Loader from "../Shared/Loader";

export default function PopularCourses() {
    const { data, error, isLoading } = useSWR('/api/courses?populate=courseimage&pagination[limit]=4', fetcher)
    if (error) return <div>failed to load</div>
    if (isLoading) return <Loader/>
  return (
    <div className="container mx-auto w-full object-contain overflow-hidden pb-14">
      <ComponentHeader
        data={{
          title: "Popular Courses",
          description: "Explore All Our Popular Courses.",
        }}
      />
      <div  className="grid grid-cols-1 p-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 2xl:grid-cols-4 gap-6 justify-center w-full">
        {data?.data?.map((val, i) => (
          <CourseCard key={i} data={val} />
        ))}
      </div>
    </div>
  );
}

