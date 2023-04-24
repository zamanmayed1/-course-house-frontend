import ComponentHeader from "@/components/Shared/ComponentHeader";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Failed() {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Payment Failed!</title>
      </Head>
      <div className="container mx-auto w-full object-contain overflow-hidden pb-14">
        <ComponentHeader
          data={{
            title: "Payment Failed",
            description: "Payment Cancel May Be, By You",
          }}
        />
        <div className="my-16">
          <Image
           width={800}
           height={500}
           alt="Failed Payment"
            className="w-64 block mx-auto"
            src="https://res.cloudinary.com/dpr7otqhn/image/upload/v1682210540/thumbnail_payment_failed_da7628af44.png"
          />
          <h2 className="text-red-500 font-bold text-center text-xl">
            Ooops! Payment Failed
          </h2>
          <Link className="custom-btn block mx-auto" href={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Failed;
