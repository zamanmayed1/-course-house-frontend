import Image from "next/image";
import React from "react";

function Loader() {
  return (
    <div className="container mx-auto w-full object-contain overflow-hidden ">
      <Image
        src="https://i.gifer.com/origin/e4/e4cd0639b5a5c1e164aeff4370ed2365.gif"
        alt=""
        width={96}
        height={96}
        className="block mx-auto my-6"
      />
    </div>
  );
}

export default Loader;
