import { addToCart } from "@/src/features/cartSlice";
import Link from "next/link";
import { useDispatch } from "react-redux";
import {  toast } from "react-toastify";

function CourseCard({ data }) {
  let img = data?.attributes?.courseimage?.data?.attributes?.url
  let {id} = data
  let { title, shortdescription, saleprice, regularprice} = data.attributes;
  const dispatch = useDispatch()
  const notify = () => toast(`${title} Course added on your cart`);

  return (
    <div className={`mx-auto ${!img &&" border-t-2 border-green-600"} w-full cursor-pointer hover:-translate-y-2  max-w-md bg-white shadow  duration-700 rounded-md p-2`}>
    
      {
        img && <img
        className="w-full h-[150px] block border-white border-3"
        src={img}
      />
      }
      <div>
        <h1 className="my-2 text-lg h-[76px] flex items-center text-left text-black">
          {title}
        </h1>
        <h1 className="my-1 text-sm h-[52px]  text-black">
          {shortdescription?.slice(0, 75)}...
        </h1>
        <h3 className="my-2 text-lg text-gray-900 font-bold">
        ৳ {saleprice}{" "}
          <span className="line-through ml-1">৳ {regularprice}</span>{" "}
        </h3>
       <div className="flex gap-3">
       <Link
          href={`/course/${id}`}
          className="custom-btn "
        >
          Read More
        </Link>
        <button
         onClick={() => {
          if (data) {
            dispatch(addToCart(data))
            notify()
          }
         }}
          className="custom-btn !bg-green-500 "
        >
         Add To Cart
        </button>
       </div>
      </div>
    </div>
  );
}

export default CourseCard;
