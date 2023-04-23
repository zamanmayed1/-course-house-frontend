import Image from "next/image";
import ComponentHeader from "./ComponentHeader";

function FailedToLoad() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto w-full object-contain overflow-hidden pb-14">
        <ComponentHeader
          data={{
            title: "Ooops!",
            description: "Failed To Load Data",
          }}
        />

        <Image
          src="https://res.cloudinary.com/dpr7otqhn/image/upload/v1682270724/thumbnail_sync_error_5779521_4833802_4f20787475.png"
          alt=""
          width={256}
          height={256}
        />
      </div>
    </div>
  );
}

export default FailedToLoad;
