import { fetcher } from "@/utils/api";
import React, { useEffect, useState } from "react";
import Loader from "../Shared/Loader";
import useSWR from "swr";
import CourseCard from "../Shared/CourseCard";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import FailedToLoad from "../Shared/FailedToLoad";

function Courses() {
  const [pageCount, setPageCount] = useState(1);
  const [arr, setArr] = useState([]);
  const { data, error, isLoading } = useSWR(
    `/api/courses?populate=*&pagination[page]=${pageCount}&pagination[pageSize]=8`,
    fetcher
  );
  if (error) return <FailedToLoad/>;
  if (isLoading) return <Loader />;
  let courses = data?.data;

  let totalpages = data.meta.pagination.pageCount;

  if (arr.length === 0) {
    let newArr = [];
    for (let i = 1; i <= totalpages; i++) {
      newArr.push(i);
    }
    setArr(newArr);
  }
  return (
   <div>
     <div className="grid grid-cols-1 p-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 2xl:grid-cols-4 gap-6 justify-center w-full">
      {courses?.map((val, i) => (
        <CourseCard key={i} data={val} />
      ))}
    </div>
    {/* Paginations */}
    <div className="flex mt-16 items-center  justify-center">
        <ul className="flex my-2">
          <li onClick={() => {
            if (pageCount > 1 ) {
              setPageCount(pageCount-1)
            }
          }} className="cursor-pointer  mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300">
            <MdKeyboardArrowLeft />
          </li>

          {arr.map((p, i) => (
            <li
              onClick={() => setPageCount(p)}
              key={i}
              className={`cursor-pointer mx-1 flex h-9 w-9 items-center justify-center rounded-full ${
                p === pageCount ? "bg-blue-900 text-white" : "text-gray-600"
              }  p-0 text-sm  shadow-md transition duration-150 ease-in-out`}
            >
              {p}
            </li>
          ))}

          <li  onClick={() => {
            if (pageCount < totalpages ) {
              setPageCount(pageCount+1)
            }
          }}  className="mx-1 cursor-pointer  flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300">
            <MdKeyboardArrowRight />
          </li>
        </ul>
      </div>
   </div>
  );
}

export default Courses;
