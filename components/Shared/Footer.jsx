import { Typography } from "@material-tailwind/react";
import { navData } from "../../data/data";
import Link from "next/link.js";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="w-full  text-[#139df8] p-8">
      <div className="container mx-auto">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  text-center md:justify-between">
          <Image
            className="w-12"
            src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/hyqdeoruafubnjidim2n"
            alt="logo-ct"
            width={100}
            height={100}
          />

          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            {navData?.map((val, i) => (
              <Typography
                as="li"
                variant="small"
                className="p-1 font-normal text-[#139df8]"
                key={i}
              >
                <Link
                  href={{ pathname: val.link }}
                  className="flex items-center"
                >
                  {val.title}
                </Link>
              </Typography>
            ))}
          </ul>
        </div>
        <hr className="my-8 border-blue-100" />
        <Typography className="text-center font-normal text-[#139df8]">
          &copy; 2023 Course House
        </Typography>
      </div>
    </footer>
  );
}
