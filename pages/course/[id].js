import ComponentHeader from "@/components/Shared/ComponentHeader";
import CourseCard from "@/components/Shared/CourseCard";
import Units from "@/components/Units/Units";
import { fetcher } from "@/utils/api";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from 'swr'
import ReactMarkdown from "react-markdown";
import Loader from "@/components/Shared/Loader";
import SimilarCourses from "@/components/SimilarCourses/SimilarCourses";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "@/src/features/cartSlice";
import Head from "next/head";
import FailedToLoad from "@/components/Shared/FailedToLoad";

function SingleCourse() {
  const router = useRouter()
  const { id } = router.query
  const { data, error, isLoading } = useSWR(`/api/courses/${id}?populate=*`, fetcher)
  if (error) return <FailedToLoad/>
  if (isLoading) return <Loader/>
  let { title, shortdescription,longdescription, saleprice, regularprice} = data?.data?.attributes;
  let img = data?.data?.attributes?.courseimage?.data?.attributes?.url
  let units = data?.data?.attributes?.units?.data
  let categoryId = data?.data?.attributes?.category?.data?.id
  const dispatch = useDispatch()
  const notify = () => toast(`${title} Course added on your cart`);
  const courseData = data?.data;
  const handleClick = () => {
    if (courseData) {
      dispatch(addToCart(courseData))
      notify()
    }
  };
  return (
    <div className='bg-white min-h-screen'>
       <Head>
        <title>{title}</title>
      </Head>
      <div className="container mx-auto w-full object-contain overflow-hidden pb-14 p-2">
      <ComponentHeader
        data={{
          title: `${title}`,
          description: `${shortdescription}`,
        }}
      />

      <div className="grid grid-cols-1 p-2 lg:grid-cols-2 gap-6 justify-center w-full">
        <div>
          <img
            className="md:w-[650px]  w-full"
            src={img}
          ></img>
        </div>
        <div>
          <h1 className="mb-2 text-xl md:text-2xl text-black">
          {title}
          </h1>
          <h1 className="my-1 text-sm  text-black">
          {shortdescription}
          </h1>
          <h3 className="my-2 text-gray-700 font-bold">
          ৳ {saleprice}{" "}
          <span className="line-through ml-1">৳ {regularprice}</span>{" "}
        </h3>         
        <button
         onClick={handleClick}
          className="custom-btn !bg-green-500 "
        >
         Add To Cart
        </button>
        

        </div>
      </div>
      <div className="my-2">
        <div className="mb-6">
            <h2 className="text-xl font-bold">Description</h2>
            <hr></hr>
        </div>
       <div className="markdown ">
       <ReactMarkdown>{longdescription}</ReactMarkdown>
       </div>
      </div>
      <Units units={units}/>

      <ComponentHeader
        data={{
          title: "Similar Courses",
          description: "Explore all similar courses",
        }}
      />
      <SimilarCourses id={categoryId}/>
    </div>
    </div>
  );
}

export default SingleCourse;
