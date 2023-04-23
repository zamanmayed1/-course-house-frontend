import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxCrossCircled } from "react-icons/rx";
import { removeFromCart } from "@/src/features/cartSlice";
import { useMemo } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "@/utils/api";
import ComponentHeader from "@/components/Shared/ComponentHeader";
import Head from "next/head";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

function Cart() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  let subtotal = useMemo(() => {
    const cartTotal = cart.reduce((total, val) => total + val?.attributes?.saleprice, 0);
    return Math.max(cartTotal, 50); // ensure subtotal is at least 50
  }, [cart]);
  
 
 
  const handlePayment = async () => {
    try {
      setLoading(true);
      const stripe = await stripePromise;
      const res = await makePaymentRequest("/api/orders", {
        courses: cart,
        email: "popcorn@gmail.com"
      });

      await stripe.redirectToCheckout({
        sessionId: res.stripeSession.id,
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="bg-white min-h-screen">
       <Head>
        <title>My Cart</title>
      </Head>
      <div className="container mx-auto w-full object-contain overflow-hidden pb-14 p-2">
        <ComponentHeader
          data={{
            title: "Cart",
            description: "Check all cart items and then checkout",
          }}
        />
        {cart.length === 0 ? (
          <span className="block py-3 px-2 font-bold text-blue-600 bg-green-50">
            Your Cart is Empty!
          </span>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-5">
            <div className="md:col-span-3">
              {cart.map((course, i) => (
                <div key={i} className="p-2 shadow-sm flex gap-3 my-2 relative">
                  <img
                    className="w-24 h-16"
                    src={course?.attributes?.courseimage?.data?.attributes?.url}
                  />
                  <div>
                    <h1 className="text-lg font-bold text-gray-900 md:text-xl">
                      {course?.attributes?.title}
                    </h1>
                    <h1 className="text-lg font-bold text-gray-700">
                      Price: ৳ {course?.attributes?.saleprice}
                    </h1>
                  </div>
                  <div
                    onClick={() => dispatch(removeFromCart(course))}
                    className="w-14 h-9 bg-green-50 hover:bg-red-100 duration-500 cursor-pointer absolute right-0 top-0 bottom-0 my-auto rounded-l-full flex items-center justify-center hover:font-extrabold"
                  >
                    <RxCrossCircled className="text-2xl" />
                  </div>
                </div>
              ))}
            </div>
            <div className="md:col-span-1 max-h-[200px] p-2 bg-green-50 rounded-lg">
              <div className="flex justify-between py-2 mb-3 border-b">
                <h1 className="font-extrabold">Subtotal</h1>
                <h1>৳ {subtotal }</h1>
              </div>
              <p className="text-sm md:text-sm">
                If You want to buy course under 50 Taka it take more 50 Taka extra as a Payment Charge
              </p>
              <button
                onClick={handlePayment}
                className="px-12 mt-4 rounded-full py-3  bg-green-500 hover:bg-blue-900 duration-500 text-white"
              >
                 {loading ? "Loading..." : "Pay Now"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart
