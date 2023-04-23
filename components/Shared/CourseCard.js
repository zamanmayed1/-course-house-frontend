import { addToCart } from "@/src/features/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

function CourseCard({ data }) {
  const [isExist, setIsExist] = useState(false);
  const img = data?.attributes?.courseimage?.data?.attributes?.url;
  const { id } = data;
  const { title, shortdescription, saleprice, regularprice } = data.attributes;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const notifyAdd = () => toast(`${title} Course added to your cart`);
  const notifyAlreadyExist = () =>
    toast(`${title} Course already exists in your cart`);

  useEffect(() => {
    const item = cartItems.find((c) => c.id === id);
    setIsExist(item !== undefined);
  }, [cartItems, id]);

  const handleAddToCart = () => {
    const item = cartItems.find((c) => c.id === id);
    if (item) {
      notifyAlreadyExist();
    } else {
      dispatch(addToCart(data));
      notifyAdd();
    }
  };

  return (
    <div
      className={`mx-auto ${
        !img && "border-t-2 border-green-600"
      } max-w-[350px] cursor-pointer overflow-clip hover:-translate-y-2  bg-white shadow duration-700 rounded-md p-4 `}
    >
      {img && (
        <Image
          className="max-w-full h-full  min-h-[150px] max-h-[130px] block border-white border-3"
          src={img}
          alt="image"
          width={400}
          height={100}
        />
      )}
      <div>
        <h1 className="my-2 text-lg h-[76px] flex items-center text-left text-black">
          {title}
        </h1>
        <h1 className="my-1 text-sm h-[52px] text-black">
          {shortdescription?.slice(0, 75)}...
        </h1>
        <h3 className="my-2 text-lg text-gray-900 font-bold">
          ৳ {saleprice}{" "}
          <span className="line-through ml-1">৳ {regularprice}</span>{" "}
        </h3>
        <div className="flex gap-3 justify-between">
          <Link href={`/course/${id}`} className="custom-btn">
            Read More
          </Link>
          <button
            onClick={handleAddToCart}
            className="custom-btn !bg-green-500"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
