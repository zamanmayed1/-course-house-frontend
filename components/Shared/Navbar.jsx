import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { navData } from "../../data/data";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

export default function Nav() {

  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const cart = useSelector((state) => state.cart.cart)

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navData?.map((val, i) => (
        <Typography
          as="li"
          variant="small"
          className="p-1 font-normal text-white"
          key={i}
        >
          <Link href={{pathname : val.link}} className="flex items-center text-[#139df8]">
            {val.title}
          </Link>
          
        </Typography>
        
      ))}
    </ul>
  );

  return (
   <div className="bg-white">
     <div className="  container mx-auto !bg-white  ">
      <Navbar className="!shadow-none  container mx-auto sticky !bg-transparent !border-none z-10 h-max max-w-full  py-2 px-4  lg:py-4 !rounded-lg">
        <div className="flex items-center  justify-between text-[#139df8] ">
          <div className="flex items-center md:gap-5 gap-3 max-w-max">
            <img className="w-11" src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/hyqdeoruafubnjidim2n' alt="" />
            <Link
              as="Link"
              href="/"
              className="mr-4 md:text-2xl text-xl  cursor-pointer py-1.5 font-bold text-[#139df8]"
            >
              Course House
            </Link>
          </div>
          <div  className="flex items-center gap-4">
            <div className="flex gap-4 items-center">
            <div className="mr-4 hidden lg:block">{navList}</div>
        <Link  href="/cart"  className="relative cusor-pointer">
        <AiOutlineShoppingCart className="text-xl" />
         { cart.length > 0 &&
           <span className="w-5 h-5 p-2 text-xs flex absolute -top-2 -right-2 items-center justify-center text-white font-bold rounded-full  bg-green-600">{cart?.length}</span>
         }
        </Link>
            </div>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>
    </div>
   </div>
  );
}
